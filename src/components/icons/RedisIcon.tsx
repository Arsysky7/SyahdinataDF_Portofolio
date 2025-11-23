export const RedisIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Official Redis Logo */}
    {/* Top block */}
    <rect x="20" y="15" width="60" height="20" rx="3" fill="#DC382D"/>
    <rect x="22" y="17" width="56" height="16" rx="2" fill="#D82C20"/>

    {/* Middle block */}
    <rect x="20" y="38" width="60" height="20" rx="3" fill="#DC382D"/>
    <rect x="22" y="40" width="56" height="16" rx="2" fill="#D82C20"/>

    {/* Bottom block */}
    <rect x="20" y="61" width="60" height="20" rx="3" fill="#DC382D"/>
    <rect x="22" y="63" width="56" height="16" rx="2" fill="#D82C20"/>

    {/* Stack depth effect */}
    <rect x="18" y="17" width="60" height="20" rx="3" fill="#A42622" opacity="0.3"/>
    <rect x="18" y="40" width="60" height="20" rx="3" fill="#A42622" opacity="0.3"/>
    <rect x="18" y="63" width="60" height="20" rx="3" fill="#A42622" opacity="0.3"/>

    {/* Redis text on top block */}
    <text x="50" y="29" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">redis</text>

    {/* Database elements on blocks */}
    {/* Top block elements */}
    <circle cx="35" cy="25" r="2" fill="white" opacity="0.8"/>
    <circle cx="45" cy="25" r="2" fill="white" opacity="0.8"/>
    <circle cx="55" cy="25" r="2" fill="white" opacity="0.8"/>

    {/* Middle block elements */}
    <rect x="30" y="46" width="8" height="2" rx="1" fill="white" opacity="0.8"/>
    <rect x="42" y="46" width="8" height="2" rx="1" fill="white" opacity="0.8"/>
    <rect x="54" y="46" width="8" height="2" rx="1" fill="white" opacity="0.8"/>

    {/* Bottom block elements */}
    <polygon points="30,70 35,67 40,70" fill="white" opacity="0.8"/>
    <polygon points="45,70 50,67 55,70" fill="white" opacity="0.8"/>
    <polygon points="60,70 65,67 70,70" fill="white" opacity="0.8"/>
  </svg>
)