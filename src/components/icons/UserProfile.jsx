const UserProfile = ({className}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={800}
    height={800}
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 64 64"
    className={className}
  >
    <path
      d="M0 0h1280v800H0z"
      style={{
        fill: "none",
      }}
      transform="translate(-1216 -192)"
    />
    <path
      d="M50 46.5c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13Zm0-22c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9Z"
      style={{
        fillRule: "nonzero",
      }}
      transform="matrix(.93925 0 0 .93925 -15.338 -11.276)"
    />
    <path
      d="M34.036 58.5V67H30.4v-8.5c0-7.182 8.818-12.727 20-12.727s20 5.545 20 12.727V67h-3.636v-8.5c0-4.909-7.455-9.091-16.364-9.091S34.036 53.591 34.036 58.5Z"
      style={{
        fillRule: "nonzero",
      }}
      transform="translate(-20.07 -13.201) scale(1.03318)"
    />
  </svg>
)
export default UserProfile
