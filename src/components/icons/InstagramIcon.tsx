export const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Instagram Logo */}
    <rect x="5" y="5" width="90" height="90" rx="25" fill="url(#instagram-gradient)"/>
    <rect x="10" y="10" width="80" height="80" rx="20" fill="url(#instagram-gradient-dark)"/>

    {/* Instagram camera shape */}
    <rect x="25" y="25" width="50" height="50" rx="15" fill="none" stroke="white" strokeWidth="4"/>
    <circle cx="50" cy="50" r="12" fill="none" stroke="white" strokeWidth="4"/>
    <circle cx="50" cy="50" r="6" fill="white"/>
    <circle cx="62" cy="38" r="4" fill="white"/>

    {/* Gradients */}
    <defs>
      <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#833AB4"/>
        <stop offset="25%" stopColor="#FD1D1D"/>
        <stop offset="50%" stopColor="#FCB045"/>
        <stop offset="75%" stopColor="#FE4A5A"/>
        <stop offset="100%" stopColor="#C13584"/>
      </linearGradient>
      <linearGradient id="instagram-gradient-dark" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6B2C91"/>
        <stop offset="25%" stopColor="#C41717"/>
        <stop offset="50%" stopColor="#E6930C"/>
        <stop offset="75%" stopColor="#E03D4A"/>
        <stop offset="100%" stopColor="#9A296C"/>
      </linearGradient>
    </defs>
  </svg>
)