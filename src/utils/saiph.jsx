import React from 'react'

const Saiph = () => {
  return (
    <div className="mt-4 flex flex-col items-center flex-auto ">
    <svg viewBox="0 0 100 20" height="80">
      <defs>
        <linearGradient id="gradient">
          <stop color="#000" />
        </linearGradient>
        <pattern
          id="wave"
          x="0"
          y="-0.5"
          width="100%"
          height="100%"
          patternUnits="userSpaceOnUse"
        >
          <path
            id="wavePath"
            d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
            mask="url(#mask)"
            fill="url(#gradient)"
          >
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="1.5s"
              type="translate"
              from="0,0"
              to="40,0"
              repeatCount="indefinite"
            />
          </path>
        </pattern>
      </defs>
      <text
        className="select-none"
        textAnchor="middle"
        x="50"
        y="15"
        fontSize="17"
        fill="white"
        fillOpacity="0.1"
      >
        SAiPH
      </text>
      <text
        className="select-none "
        textAnchor="middle"
        x="50"
        y="15"
        fontSize="17"
        fill="url(#wave)"
        fillOpacity="1"
      >
        SAiPH
      </text>
    </svg>

    <div className="mb-8 text-center text-sm text-gray-500 dark:text-gray-400">
      <span>SAiPH Technologies © 2023. </span>
    </div>
  </div>
  )
}

export default Saiph