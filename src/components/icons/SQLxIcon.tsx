export const SQLxIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* SQLx Logo - Rust SQL toolkit */}
    <rect x="5" y="5" width="90" height="90" rx="15" fill="#000000"/>
    <rect x="10" y="10" width="80" height="80" rx="12" fill="#1A1A1A"/>

    {/* Database cylinder shape */}
    <ellipse cx="50" cy="30" rx="25" ry="8" fill="#00758F"/>
    <rect x="25" y="30" width="50" height="35" fill="#00758F"/>
    <ellipse cx="50" cy="65" rx="25" ry="8" fill="#00758F"/>

    {/* Database sections with SQLx branding */}
    <ellipse cx="50" cy="30" rx="20" ry="6" fill="#00A0D1"/>
    <rect x="30" y="30" width="40" height="5" fill="#00A0D1"/>

    {/* SQL text on database */}
    <text x="50" y="35" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="monospace">SQL</text>

    {/* Rust integration indicator */}
    <rect x="35" y="45" width="30" height="20" rx="3" fill="#CE4E1F" opacity="0.9"/>
    <text x="50" y="52" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="monospace">RUST</text>
    <text x="50" y="60" textAnchor="middle" fill="white" fontSize="6" fontFamily="monospace">SQLx</text>

    {/* Check mark for compile-time verification */}
    <circle cx="75" cy="40" r="8" fill="#00FF00" opacity="0.9"/>
    <path d="M70 40 L73 43 L80 36" stroke="black" strokeWidth="2" fill="none"/>

    {/* Type safety symbols */}
    <text x="25" y="75" fill="#00A0D1" fontSize="10" fontWeight="bold" fontFamily="monospace">&lt;T&gt;</text>
    <text x="60" y="75" fill="#00A0D1" fontSize="10" fontWeight="bold" fontFamily="monospace">Compile-Time</text>
    <text x="40" y="88" fill="#FFA500" fontSize="8" fontFamily="monospace">Type-Safe SQL</text>
  </svg>
)