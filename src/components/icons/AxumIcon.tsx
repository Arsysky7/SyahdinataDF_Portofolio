export const AxumIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Axum Framework Logo - Modern design */}
    <rect x="5" y="5" width="90" height="90" rx="15" fill="#0F172A"/>
    <rect x="10" y="10" width="80" height="80" rx="12" fill="#1E293B"/>

    {/* Axum router/network design */}
    <circle cx="50" cy="50" r="8" fill="#3B82F6"/>
    <circle cx="30" cy="30" r="6" fill="#10B981"/>
    <circle cx="70" cy="30" r="6" fill="#10B981"/>
    <circle cx="30" cy="70" r="6" fill="#10B981"/>
    <circle cx="70" cy="70" r="6" fill="#10B981"/>

    {/* Connection lines */}
    <line x1="50" y1="50" x2="30" y2="30" stroke="#3B82F6" strokeWidth="3"/>
    <line x1="50" y1="50" x2="70" y2="30" stroke="#3B82F6" strokeWidth="3"/>
    <line x1="50" y1="50" x2="30" y2="70" stroke="#3B82F6" strokeWidth="3"/>
    <line x1="50" y1="50" x2="70" y2="70" stroke="#3B82F6" strokeWidth="3"/>

    {/* Text "AX" */}
    <text x="50" y="75" textAnchor="middle" fill="#60A5FA" fontSize="12" fontWeight="bold" fontFamily="monospace">AX</text>
  </svg>
)