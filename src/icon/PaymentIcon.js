import * as React from "react"

const PaymentIcon = (props) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-color"
    {...props}
  >
    <path
      d="M22 12v4a2 2 0 0 1-2 2h-5a1 1 0 0 1-1-1v-5Zm0-2V8a2 2 0 0 0-2-2h-5a1 1 0 0 0-1 1v3Z"
      style={{
        fill: "rgb(30 58 138)",
      }}
    />
    <rect
      x={2}
      y={2}
      width={14}
      height={20}
      rx={2}
      style={{
        fill: "#fafafa",
      }}
    />
    <path
      d="m12 2-.31 1.24a1 1 0 0 1-1 .76H7.28a1 1 0 0 1-1-.76L6 2m3.12 12.25a1 1 0 0 0 .76-.39l1.91-2.5a1 1 0 0 0-1.58-1.22L9 11.67l-.29-.33a1 1 0 1 0-1.5 1.32l1.09 1.25a1 1 0 0 0 .75.34Z"
      style={{
        fill: "rgb(30 58 138)",
      }}
    />
  </svg>
)

export default PaymentIcon;