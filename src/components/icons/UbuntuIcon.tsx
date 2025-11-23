export const UbuntuIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Official Ubuntu Logo - Circle of Friends */}

    {/* Background */}
    <circle cx="50" cy="50" r="48" fill="#000000"/>

    {/* Main orange circle */}
    <circle cx="50" cy="50" r="35" fill="#E95420"/>
    <circle cx="50" cy="50" r="32" fill="#FF6B35"/>

    {/* Three people/friends in a circle */}
    {/* Person 1 - Top */}
    <circle cx="50" cy="25" r="8" fill="#FFFFFF"/>
    <circle cx="50" cy="25" r="6" fill="#E95420"/>
    <circle cx="48" cy="23" r="2" fill="#FFFFFF"/>

    {/* Person 2 - Bottom Left */}
    <circle cx="30" cy="65" r="8" fill="#FFFFFF"/>
    <circle cx="30" cy="65" r="6" fill="#E95420"/>
    <circle cx="28" cy="63" r="2" fill="#FFFFFF"/>

    {/* Person 3 - Bottom Right */}
    <circle cx="70" cy="65" r="8" fill="#FFFFFF"/>
    <circle cx="70" cy="65" r="6" fill="#E95420"/>
    <circle cx="68" cy="63" r="2" fill="#FFFFFF"/>

    {/* Arms linking them together */}
    <path d="M 38 30 Q 50 45 62 30" stroke="#FFFFFF" strokeWidth="3" fill="none" opacity="0.8"/>
    <path d="M 35 60 Q 50 50 65 60" stroke="#FFFFFF" strokeWidth="3" fill="none" opacity="0.8"/>

    {/* Ubuntu text */}
    <text x="50" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="Ubuntu, Arial, sans-serif">Ubuntu</text>

    {/* Orange accent dots */}
    <circle cx="25" cy="30" r="2" fill="#FF6B35" opacity="0.6"/>
    <circle cx="75" cy="30" r="2" fill="#FF6B35" opacity="0.6"/>
    <circle cx="25" cy="70" r="2" fill="#FF6B35" opacity="0.6"/>
    <circle cx="75" cy="70" r="2" fill="#FF6B35" opacity="0.6"/>
  </svg>
)