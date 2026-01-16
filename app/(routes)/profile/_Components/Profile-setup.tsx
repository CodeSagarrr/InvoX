"use client";
import React, { useState, useRef } from "react";
import { Save } from "lucide-react";
import { useRouter } from "next/navigation";
import Loader from "@/components/ui/Loader";
import { useAppContext } from "@/app/Context/Context";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createProfile } from "@/lib/api";
import { toast } from "sonner";
import Image from "next/image";

export default function ProfileSetup() {
  // States
  const { user } = useKindeBrowserClient(); // For authentication data
  const { currentUser } = useAppContext(); // For profile Data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    gstNumber: "",
    pan: "",
    address:
      "",
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const queryClient = useQueryClient();

  // Functions
  const handleFormImageRef = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  // Handle POST route 
  const handleMutation = useMutation({
    mutationFn: async (data: FormData) => {
      return await createProfile(data);
    },
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      console.log(data);
    },
    onError : (error : any) => {
      const errorMessage = error?.response?.data?.error || 'Something went wrong';
      toast.error(errorMessage);
    }
  });

  const handleProfile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const data = new FormData();

    Object.entries(formData).forEach(([key , value]) => {
      if(value !==undefined || value !== null){
        data.append(key , value)
      }
    });

    if(file){
      data.append("file" , file)
    }

    handleMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-[ubuntu] text-gray-900 mb-2">
            Profile Setup
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            Enter your personal and business details to customize your invoices.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-8">
          {/* Avatar Section */}
          <div className="border-t border-gray-200 pt-8">
            {/* Avatar Section */}
            <div className="flex items-center gap-6 mb-8">
              <div
                className="w-24 h-24 rounded-full bg-linear-to-br from-pink-200 to-red-200 flex items-center justify-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={handleFormImageRef}
              >
                {avatarPreview ? (
                  <Image
                    src={avatarPreview}
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer" 
                    unoptimized
                  />
                ) : currentUser && currentUser?.logo ? (
                  <Image
                    src={currentUser?.logo || (user?.picture as string)}
                    width={40}
                    height={40}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer" 
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full bg-pink-100 flex items-center justify-center text-4xl">
                    👩‍💼
                  </div>
                )}
              </div>
              <div>
                <input
                  ref={fileInputRef}
                  name="file"
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/gif"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  onClick={handleFormImageRef}
                  type="button"
                  className="px-6 py-2.5 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors mb-2"
                >
                  Change Avatar
                </button>
                <p className="text-sm text-gray-400">
                  JPG, GIF or PNG. 1MB max.
                </p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Full Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder={currentUser?.name || "Alex Sterling"}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={currentUser?.email || "alex@sterlingdesign.com"}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  placeholder={
                    currentUser?.businessName || "Sterling Creative Studio"
                  }
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>

              {/* GST and PAN */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    GST No.
                  </label>
                  <input
                    type="text"
                    name="gstNumber"
                    placeholder={currentUser?.gstNumber || "22ABCDE1234F1Z5"}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    PAN No.
                  </label>
                  <input
                    type="text"
                    name="pan"
                    placeholder={currentUser?.pan || "ABCDE1234F"}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Address
                </label>
                <textarea
                  name="address"
                  placeholder={currentUser?.address || "123 Design Avenue, Creative District Indianagar, Bangalore 560038"}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end items-center gap-4 mt-10">
              <button className="px-6 py-3 text-gray-500 font-medium hover:text-gray-700 transition-colors">
                Cancel
              </button>
              <button
                onClick={handleProfile}
                disabled={handleMutation.isPending}
                className="px-6 py-3 rounded-lg font-medium text-white flex items-center gap-2 transition-all hover:opacity-90 shadow-sm"
                style={{ backgroundColor: "#FE9900" }}
              >
                {handleMutation.isPending ? (
                  <Loader />
                ) : (
                  <p className="flex items-center gap-2 ">
                    <Save size={20} />
                    Save Changes
                  </p>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
