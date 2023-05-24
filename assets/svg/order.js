import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Order(props) {
  return (
    <Svg
    width={14}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.8 14.125a2.194 2.194 0 0 0-.665 1.573c0 1.113.853 2.126 2.028 2.126H13.84V16.414H14v.993c0 .326-.247.593-.55.593H2.21C.994 18.002 0 16.928 0 15.615V2.514C0 1.13 1.047 0 2.328 0h11.223M.8 14.125v1.49c0 .028 0 .056.002.083.039.866.683 1.475 1.36 1.501l.047.001H13.2v-.786h-.16v.61H2.162c-.676 0-1.228-.596-1.228-1.326 0-.729.552-1.325 1.228-1.325h10.876c.489.023.94.014.961-.364m-13.2.116a1.948 1.948 0 0 1 1.363-.552h10.915l.122.006m-12.4.546V2.514C.8 1.514 1.546.8 2.328.8H13.2m.8 13.21V.484m0 13.524-.799-.043a.503.503 0 0 1 .249-.381.28.28 0 0 1 .03-.013l.011-.004-.008.002a1.046 1.046 0 0 1-.115.01l-.168-.001m.8.43h-.8v-.43M14 .485a.507.507 0 0 0-.132-.343.435.435 0 0 0-.317-.142M14 .485h-.45V0m.45.485-.45.001V.8h-.35m.35-.8v.485h-.35V.8m0 0v12.779M13.497.486h.052V.8a.366.366 0 0 1-.268-.114.294.294 0 0 1-.081-.199h.297Z"
      stroke={props.active}
      strokeWidth={1.6}
    />
  </Svg>
    
    
  )
}

export default Order;