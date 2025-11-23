export const NatsIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* NATS.io Logo - Cloud messaging system */}
    <rect x="5" y="5" width="90" height="90" rx="15" fill="#000000"/>
    <rect x="10" y="10" width="80" height="80" rx="12" fill="#1A1A1A"/>

    {/* Cloud shape */}
    <path d="M30 50 Q25 40 30 35 Q35 30 45 30 Q50 25 60 25 Q70 25 75 30 Q85 30 90 35 Q95 40 90 50 Q90 60 80 60 L30 60 Q25 60 25 50 Q25 45 30 50" fill="#4A90E2"/>
    <path d="M35 50 Q32 43 35 38 Q38 33 45 33 Q48 29 55 29 Q62 29 65 33 Q72 33 75 38 Q78 43 75 50 Q75 55 68 55 L35 55 Q32 55 32 50 Q32 47 35 50" fill="#5BA0F2"/>

    {/* NATS text */}
    <text x="50" y="45" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="monospace">NATS</text>
    <text x="50" y="60" textAnchor="middle" fill="#B8D4F1" fontSize="10" fontFamily="monospace">.io</text>

    {/* Message particles */}
    <circle cx="25" cy="35" r="2" fill="#00FF00" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="75" cy="40" r="2" fill="#00FF00" opacity="0.8">
      <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="50" cy="70" r="2" fill="#00FF00" opacity="0.8">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite"/>
    </circle>

    {/* Connection lines */}
    <line x1="25" y1="35" x2="75" y2="40" stroke="#00FF00" strokeWidth="1" opacity="0.3" strokeDasharray="2,2">
      <animate attributeName="stroke-dashoffset" values="0;4" dur="1s" repeatCount="indefinite"/>
    </line>
    <line x1="50" y1="55" x2="50" y2="70" stroke="#00FF00" strokeWidth="1" opacity="0.3" strokeDasharray="2,2">
      <animate attributeName="stroke-dashoffset" values="0;4" dur="1s" repeatCount="indefinite"/>
    </line>
  </svg>
)