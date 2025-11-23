export const KaliIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Official Kali Linux Dragon Logo */}
    <circle cx="50" cy="50" r="48" fill="#000000"/>

    {/* Dragon body - serpentine shape */}
    <path d="M 25 70 Q 20 60 25 50 Q 30 40 40 35 Q 50 30 60 35 Q 70 40 75 50 Q 80 60 75 70"
          fill="#00FF00" opacity="0.8"/>

    {/* Dragon head */}
    <ellipse cx="50" cy="35" rx="20" ry="15" fill="#00FF00"/>
    <ellipse cx="48" cy="33" rx="18" ry="13" fill="#00CC00"/>

    {/* Dragon horns */}
    <path d="M 35 25 L 30 15 L 32 23 Z" fill="#00FF00"/>
    <path d="M 65 25 L 70 15 L 68 23 Z" fill="#00FF00"/>

    {/* Dragon spikes on back */}
    {[...Array(8)].map((_, i) => {
      const x = 30 + i * 5
      const y = 40 + Math.sin(i * 0.8) * 5
      return (
        <polygon key={i} points={`${x},${y} ${x-2},${y-5} ${x+2},${y-5}`} fill="#00FF00"/>
      )
    })}

    {/* Dragon eyes - menacing red */}
    <circle cx="40" cy="33" r="3" fill="#FF0000"/>
    <circle cx="56" cy="33" r="3" fill="#FF0000"/>
    <circle cx="40" cy="32" r="1.5" fill="#FF6B6B"/>
    <circle cx="56" cy="32" r="1.5" fill="#FF6B6B"/>

    {/* Dragon teeth */}
    <rect x="45" y="38" width="2" height="4" fill="white"/>
    <rect x="48" y="39" width="2" height="3" fill="white"/>
    <rect x="51" y="38" width="2" height="4" fill="white"/>
    <rect x="54" y="37" width="2" height="5" fill="white"/>

    {/* Dragon wings */}
    <ellipse cx="30" cy="45" rx="15" ry="8" fill="#00FF00" opacity="0.6" transform="rotate(-30 30 45)"/>
    <ellipse cx="70" cy="45" rx="15" ry="8" fill="#00FF00" opacity="0.6" transform="rotate(30 70 45)"/>

    {/* KALI text inside dragon */}
    <text x="50" y="38" textAnchor="middle" fill="black" fontSize="10" fontWeight="bold" fontFamily="monospace">KALI</text>

    {/* Terminal window overlay */}
    <rect x="10" y="70" width="80" height="20" rx="2" fill="#000000" stroke="#00FF00" strokeWidth="1"/>
    <text x="15" y="82" fill="#00FF00" fontSize="6" fontFamily="monospace">$ ~# kali-linux</text>
    <circle cx="88" cy="72" r="1" fill="#FF5F56"/>
    <circle cx="92" cy="72" r="1" fill="#FFBD2E"/>
    <circle cx="96" cy="72" r="1" fill="#27C93F"/>
  </svg>
)