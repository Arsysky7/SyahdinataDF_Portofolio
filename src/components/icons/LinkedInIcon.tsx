export const LinkedInIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Background box */}
    <rect x="5" y="5" width="90" height="90" rx="18" fill="url(#linkedin-gradient)"/>

    {/* "in" text - LinkedIn logo */}
    <text
      x="18"
      y="70"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
      fontSize="42"
      fill="white"
      style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
    >
      in
    </text>

    {/* Gradients */}
    <defs>
      <linearGradient id="linkedin-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0077B5"/>
        <stop offset="100%" stopColor="#00A0DC"/>
      </linearGradient>
    </defs>
  </svg>
)
