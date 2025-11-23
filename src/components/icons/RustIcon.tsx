export const RustIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Official Rust Logo */}
    <circle cx="50" cy="50" r="48" fill="#CE4E1F"/>
    <circle cx="50" cy="50" r="45" fill="#E57A00"/>
    <circle cx="50" cy="50" r="42" fill="#CE4E1F"/>

    {/* Gear teeth around the circle - predefined positions */}
    <rect x="87" y="48.5" width="6" height="3" fill="#CE4E1F" transform="rotate(0 90 50)"/>
    <rect x="87" y="48.5" width="6" height="3" fill="#CE4E1F" transform="rotate(30 90 50)"/>
    <rect x="87" y="48.5" width="6" height="3" fill="#CE4E1F" transform="rotate(60 90 50)"/>
    <rect x="87" y="48.5" width="6" height="3" fill="#CE4E1F" transform="rotate(90 90 50)"/>
    <rect x="87" y="48.5" width="6" height="3" fill="#CE4E1F" transform="rotate(120 90 50)"/>
    <rect x="87" y="48.5" width="6" height="3" fill="#CE4E1F" transform="rotate(150 90 50)"/>
    <rect x="87" y="48.5" width="6" height="3" fill="#CE4E1F" transform="rotate(180 90 50)"/>
    <rect x="87" y="48.5" width="6" height="3" fill="#CE4E1F" transform="rotate(210 90 50)"/>
    <rect x="87" y="48.5" width="6" height="3" fill="#CE4E1F" transform="rotate(240 90 50)"/>
    <rect x="87" y="48.5" width="6" height="3" fill="#CE4E1F" transform="rotate(270 90 50)"/>
    <rect x="87" y="48.5" width="6" height="3" fill="#CE4E1F" transform="rotate(300 90 50)"/>
    <rect x="87" y="48.5" width="6" height="3" fill="#CE4E1F" transform="rotate(330 90 50)"/>

    {/* Inner white circle background for R */}
    <circle cx="50" cy="50" r="25" fill="white"/>

    {/* The letter R in Rust style */}
    <path
      d="M 30 65 L 30 35 L 45 35 C 52 35 58 38 58 45 C 58 52 54 55 48 56 L 58 65 L 50 65 L 42 56 L 38 56 L 38 65 Z M 38 42 L 38 49 L 45 49 C 48 49 50 47 50 45 C 50 43 48 42 45 42 Z"
      fill="#CE4E1F"
    />
  </svg>
)