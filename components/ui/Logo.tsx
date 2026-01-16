import React from "react";

function Logo({ width, height }: any) {
  return (
    <div>
      {/* <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
      >
        <circle cx="100" cy="100" r="90" fill="#6366F1" opacity="0.1" />

        <g transform="translate(60, 40)">
          <rect x="0" y="0" width="80" height="100" rx="8" fill="#FF5721" />

          <line
            x1="15"
            y1="20"
            x2="65"
            y2="20"
            stroke="white"
            strokeWidth="3"
            opacity="0.3"
          />
          <line
            x1="15"
            y1="32"
            x2="65"
            y2="32"
            stroke="white"
            strokeWidth="3"
            opacity="0.3"
          />
          <line
            x1="15"
            y1="44"
            x2="50"
            y2="44"
            stroke="white"
            strokeWidth="3"
            opacity="0.3"
          />

          <g transform="translate(20, 55)">
            <line
              x1="5"
              y1="5"
              x2="35"
              y2="35"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <line
              x1="35"
              y1="5"
              x2="5"
              y2="35"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </g>

          
        </g>
      </svg> */}

      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={width}
        height={height}>
        <defs>
          <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
            <stop offset="100%" stopColor="#D97706" stopOpacity="1" />
          </linearGradient>
        </defs>

        <rect
          x="35"
          y="35"
          width="130"
          height="130"
          rx="28"
          fill="url(#amberGrad)"
        />

        <g transform="translate(65, 55)">
          <rect x="0" y="0" width="70" height="90" rx="6" fill="white" />

          <rect
            x="8"
            y="8"
            width="30"
            height="4"
            rx="2"
            fill="#F59E0B"
            opacity="0.3"
          />
          <rect
            x="8"
            y="15"
            width="45"
            height="3"
            rx="1.5"
            fill="#F59E0B"
            opacity="0.2"
          />

          <rect x="8" y="28" width="54" height="2.5" rx="1.25" fill="#E5E7EB" />
          <rect x="8" y="35" width="54" height="2.5" rx="1.25" fill="#E5E7EB" />
          <rect x="8" y="42" width="40" height="2.5" rx="1.25" fill="#E5E7EB" />

          <rect
            x="8"
            y="55"
            width="54"
            height="20"
            rx="4"
            fill="#F59E0B"
            opacity="0.1"
          />
          <rect
            x="12"
            y="60"
            width="20"
            height="4"
            rx="2"
            fill="#F59E0B"
            opacity="0.4"
          />
          <rect x="12" y="67" width="35" height="5" rx="2.5" fill="#F59E0B" />

          <rect x="8" y="82" width="54" height="2" rx="1" fill="#E5E7EB" />
        </g>

        <circle cx="145" cy="145" r="18" fill="#10B981" />
        <path
          d="M 138 145 L 143 150 L 152 140"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default Logo;
