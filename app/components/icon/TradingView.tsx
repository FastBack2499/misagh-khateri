import * as React from "react"

interface TradingViewProps {
  props?: React.SVGProps<SVGSVGElement>;
}

const TradingView: React.FC<TradingViewProps> = ({
  props
}) =>  {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      height={21}
      width={21}
      fill="currentColor"
      {...props}
    >
      <path d="M66.106 34.495c0 5.643-4.574 10.217-10.217 10.217-5.642 0-10.216-4.574-10.216-10.217 0-5.642 4.574-10.216 10.217-10.216 5.642 0 10.216 4.574 10.216 10.216zM40.625 25H0v20.433h20.192V75.72h20.433zm35.818 0H100L78.726 75.72H55.168z" />
    </svg>
  )
}

export default TradingView