export const DockerIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Official Docker Logo */}

    {/* Background */}
    <circle cx="50" cy="50" r="48" fill="#000000"/>

    {/* Main Docker container */}
    <rect x="20" y="30" width="60" height="40" rx="8" fill="#2496ED"/>
    <rect x="20" y="30" width="60" height="8" rx="8" fill="#0DB7ED"/>

    {/* Docker whale body */}
    <ellipse cx="50" cy="50" rx="18" ry="8" fill="#FFFFFF"/>
    <ellipse cx="50" cy="48" rx="16" ry="6" fill="#E1F5FE"/>

    {/* Whale head */}
    <circle cx="65" cy="48" r="6" fill="#FFFFFF"/>
    <circle cx="65" cy="48" r="4" fill="#E1F5FE"/>

    {/* Whale eye */}
    <circle cx="67" cy="46" r="1.5" fill="#000000"/>

    {/* Whale tail */}
    <path d="M 30 48 Q 25 52 28 56 Q 32 54 30 48" fill="#FFFFFF"/>
    <path d="M 32 50 Q 28 53 30 55 Q 33 53 32 50" fill="#E1F5FE"/>

    {/* Container stack on whale's back */}
    {[...Array(4)].map((_, i) => (
      <rect key={i} x={35 + i * 8} y={40 + i * 2} width="8" height="6" rx="1" fill="#FFFFFF" opacity="0.9"/>
    ))}

    {/* Docker logo text */}
    <text x="50" y="85" textAnchor="middle" fill="#2496ED" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">Docker</text>

    {/* Small wave effects */}
    <path d="M 15 65 Q 20 63 25 65" stroke="#2496ED" strokeWidth="1" fill="none" opacity="0.6"/>
    <path d="M 75 65 Q 80 63 85 65" stroke="#2496ED" strokeWidth="1" fill="none" opacity="0.6"/>

    {/* Port indicators for container networking */}
    <circle cx="15" cy="35" r="2" fill="#4CAF50"/>
    <text x="15" y="38" textAnchor="middle" fill="black" fontSize="3" fontWeight="bold">80</text>

    <circle cx="85" cy="35" r="2" fill="#4CAF50"/>
    <text x="85" y="38" textAnchor="middle" fill="black" fontSize="3" fontWeight="bold">443</text>

    {/* Spout for water/containerization */}
    <rect x="48" y="25" width="4" height="8" rx="1" fill="#2496ED"/>
    <circle cx="50" cy="23" r="3" fill="#4CAF50"/>
  </svg>
)