import { type SVGAttributes } from "react"

const SearchIcon = (props: SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#2c3e50"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      stroke="none"
      d="M0 0h24v24H0z"
      fill="none"
    />
    <circle
      cx="10"
      cy="10"
      r="7"
    />
    <line
      x1="21"
      y1="21"
      x2="15"
      y2="15"
    />
  </svg>
)

export { SearchIcon }