import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use, ClipPath, Rect } from "react-native-svg"

function Smallcases(props) {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M10.3 2.473c-.667.35-2.585 1.335-4.259 2.183-1.673.858-3.061 1.61-3.093 1.674a.325.325 0 0 0 .032.243c.074.127 8.316 4.153 8.496 4.153.064 0 1.335-.625 2.829-1.388 5.286-2.701 5.742-2.956 5.742-3.157 0-.18-1.123-.763-6.78-3.485-.901-.435-1.664-.805-1.695-.827-.032-.01-.604.255-1.272.604Zm3.083 2.606c1.801.87 2.14 1.113 1.96 1.399-.095.148-3.538 1.928-3.75 1.938-.096.011-1.028-.402-2.066-.9-2.48-1.197-2.48-1.123-.021-2.405.995-.519 1.843-.943 1.896-.943.042-.01.943.403 1.981.911ZM16.392 9.91a507.251 507.251 0 0 0-4.27 2.225c-.095.063-.127 1.186-.127 4.937 0 4.1.021 4.873.148 4.99.128.095.392 0 1.356-.51 1.05-.55 2.045-1.058 6.526-3.357l.975-.498-.021-4.948c-.032-4.852-.032-4.936-.244-4.958-.116-.01-2.076.943-4.343 2.12Zm1.695 2.532c1.048.816.625 3.062-.837 4.407-.615.572-1.017.763-1.568.763-.986 0-1.483-.88-1.24-2.193.223-1.208 1.176-2.564 2.12-3.03.518-.254 1.164-.233 1.525.053ZM6.211 13.141c-.17.106-2.055 2.956-2.055 3.094 0 .159 4.11 2.15 4.237 2.066.212-.127.085-.52-.815-2.734-1.06-2.606-1.07-2.627-1.367-2.426Z"
                fill="#4E8AD0"
            />
        </Svg>
    )
}

export default Smallcases;