export const PostgresIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Official PostgreSQL Elephant Logo */}

    {/* Background circle */}
    <circle cx="50" cy="50" r="48" fill="#F7F7F7"/>

    {/* Elephant head - main body */}
    <ellipse cx="50" cy="45" rx="30" ry="25" fill="#336791"/>

    {/* Elephant head - lighter shade */}
    <ellipse cx="50" cy="43" rx="28" ry="23" fill="#4B8BBE"/>

    {/* Elephant trunk */}
    <path d="M 48 65 Q 45 72 42 76 Q 40 78 38 76 Q 36 74 38 72 Q 42 68 45 65 Z" fill="#336791"/>
    <path d="M 48 65 Q 46 70 44 74 Q 42 76 40 74 Q 38 72 40 70 Q 43 67 46 65 Z" fill="#4B8BBE"/>

    {/* Elephant ears */}
    <ellipse cx="25" cy="40" rx="12" ry="18" fill="#336791" transform="rotate(-20 25 40)"/>
    <ellipse cx="75" cy="40" rx="12" ry="18" fill="#336791" transform="rotate(20 75 40)"/>

    <ellipse cx="26" cy="41" rx="10" ry="16" fill="#4B8BBE" transform="rotate(-20 26 41)"/>
    <ellipse cx="74" cy="41" rx="10" ry="16" fill="#4B8BBE" transform="rotate(20 74 41)"/>

    {/* Elephant eyes */}
    <circle cx="38" cy="40" r="4" fill="white"/>
    <circle cx="62" cy="40" r="4" fill="white"/>
    <circle cx="38" cy="40" r="2.5" fill="black"/>
    <circle cx="62" cy="40" r="2.5" fill="black"/>
    <circle cx="39" cy="39" r="1" fill="white"/>
    <circle cx="63" cy="39" r="1" fill="white"/>

    {/* PostgreSQL text */}
    <text x="50" y="88" textAnchor="middle" fill="#336791" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">PostgreSQL</text>
  </svg>
)