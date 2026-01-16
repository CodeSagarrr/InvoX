import { v2 as cld, UploadApiResponse } from "cloudinary";

cld.config({
  cloud_name: "dgsmntpfe",
  api_key: "975586279947331",
  api_secret: "9pL-HEjhlNPdlxpFd5ybNjjgV3g",
});

export const uploadImageUrl = async (
  file: File
): Promise<UploadApiResponse | null> => {
  if (!file) return null;

  try {
    const byte = await file.arrayBuffer();
    const buffer = Buffer.from(byte);

    const resultImage = await new Promise<UploadApiResponse>(
      (resolve, reject) => {
        const uploadSteam = cld.uploader.upload_stream(
          {
            folder: "InvoX-Image",
            secure: true,
            transformation: [
              { width: 1000, height: 1000, crop: "limit" },
              { quality: "auto" },
            ],
          },
          (error, result) => {
            if (error) reject(error);
            else if (result) resolve(result);
            else reject(new Error("Upload failed: no result returned"));
          }
        );
        uploadSteam.end(buffer);
      }
    );

    return resultImage;
  } catch (error) {
    console.error("Upload error:", error);
    throw new Error("Failed to upload image");
  }
};
