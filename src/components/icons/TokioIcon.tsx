export const TokioIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Tokio Logo - Async runtime */}
    <rect x="5" y="5" width="90" height="90" rx="15" fill="#000000"/>
    <rect x="10" y="10" width="80" height="80" rx="12" fill="#1A1A1A"/>

    {/* Background hexagon */}
    <polygon points="50,20 75,35 75,65 50,80 25,65 25,35" fill="#2ECC71"/>

    {/* Tokio tower representation */}
    <rect x="45" y="30" width="10" height="30" fill="#000000"/>
    <rect x="42" y="25" width="16" height="5" fill="#000000"/>
    <rect x="40" y="60" width="20" height="3" fill="#000000"/>

    {/* Async waves */}
    <path d="M20 45 Q25 40 30 45 T40 45 T50 45 T60 45 T70 45 T80 45"
          stroke="#000000" strokeWidth="2" fill="none" opacity="0.6">
      <animate attributeName="d"
               values="M20 45 Q25 40 30 45 T40 45 T50 45 T60 45 T70 45 T80 45;
                       M20 45 Q25 50 30 45 T40 45 T50 45 T60 45 T70 45 T80 45;
                       M20 45 Q25 40 30 45 T40 45 T50 45 T60 45 T70 45 T80 45"
               dur="2s" repeatCount="indefinite"/>
    </path>
    <path d="M20 55 Q25 60 30 55 T40 55 T50 55 T60 55 T70 55 T80 55"
          stroke="#000000" strokeWidth="2" fill="none" opacity="0.6">
      <animate attributeName="d"
               values="M20 55 Q25 60 30 55 T40 55 T50 55 T60 55 T70 55 T80 55;
                       M20 55 Q25 50 30 55 T40 55 T50 55 T60 55 T70 55 T80 55;
                       M20 55 Q25 60 30 55 T40 55 T50 55 T60 55 T70 55 T80 55"
               dur="2s" repeatCount="indefinite"/>
    </path>

    {/* Tokio text */}
    <text x="50" y="75" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="monospace">TOKIO</text>
  </svg>
)