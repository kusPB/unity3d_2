import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use, ClipPath, Rect } from "react-native-svg"

function Screener(props) {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M11.64 1.14c0 .408-.012.42-.468.42-1.968 0-4.716 1.236-6.468 2.928C2.94 6.168 1.56 9.12 1.56 11.172c0 .456-.012.468-.42.468-.384 0-.42.024-.42.36 0 .336.036.36.42.36.408 0 .42.012.42.468 0 2.124 1.428 5.076 3.288 6.804 1.74 1.632 4.404 2.808 6.324 2.808.456 0 .468.012.468.42 0 .384.024.42.36.42.336 0 .36-.036.36-.42 0-.408.012-.42.468-.42 1.224 0 3.132-.612 4.632-1.488 1.104-.648 2.844-2.388 3.492-3.492.876-1.5 1.488-3.408 1.488-4.632 0-.456.012-.468.42-.468.384 0 .42-.024.42-.36 0-.336-.036-.36-.42-.36-.408 0-.42-.012-.42-.468 0-1.92-1.176-4.584-2.808-6.324-1.728-1.86-4.68-3.288-6.804-3.288-.456 0-.468-.012-.468-.42 0-.384-.024-.42-.36-.42-.336 0-.36.036-.36.42Zm0 1.668v.54l-.564.072c-2.124.3-3.936 1.188-5.28 2.616-1.344 1.416-2.088 3.012-2.376 5.028l-.072.576H2.244l.084-.816c.108-1.068.684-2.772 1.296-3.792.624-1.068 1.956-2.448 3.012-3.156 1.284-.852 3.312-1.56 4.56-1.584l.444-.012v.528Zm3.42-.036c.6.204 1.452.576 1.896.84.912.552 2.28 1.776 2.892 2.616.912 1.248 1.68 3.18 1.824 4.632l.084.78h-1.104l-.072-.576c-.288-2.016-1.032-3.612-2.376-5.028-1.344-1.428-3.156-2.316-5.268-2.616l-.576-.072V2.244l.816.084c.444.048 1.296.252 1.884.444ZM11.64 4.74c0 .516.012.54.36.54s.36-.024.36-.54c0-.528.012-.54.396-.54.72 0 1.908.36 2.892.864a7.675 7.675 0 0 1 3.348 3.468c.528 1.104.804 2.04.804 2.748 0 .348-.024.36-.54.36s-.54.012-.54.36.024.36.54.36c.528 0 .54.012.54.396 0 .66-.336 1.776-.864 2.844a7.361 7.361 0 0 1-3.336 3.336c-1.068.528-2.184.864-2.844.864-.384 0-.396-.012-.396-.54 0-.516-.012-.54-.36-.54s-.36.024-.36.54-.012.54-.36.54c-.708 0-1.644-.276-2.748-.804a7.675 7.675 0 0 1-3.468-3.348c-.504-.984-.864-2.172-.864-2.904 0-.372.012-.384.54-.384.516 0 .54-.012.54-.36s-.024-.36-.54-.36c-.528 0-.54-.012-.54-.396 0-.72.36-1.908.864-2.892 1.176-2.256 3.888-4.092 6.132-4.14l.444-.012v.54Zm-8.22 8.184c.3 2.124 1.188 3.936 2.616 5.28 1.416 1.344 3.012 2.088 5.04 2.376l.564.072v1.104l-.78-.084c-1.452-.144-3.384-.912-4.632-1.824-.852-.624-2.076-1.98-2.616-2.904C3 15.9 2.436 14.232 2.328 13.164l-.084-.804h1.104l.072.564Zm18.3-.18c-.012 1.08-.636 3.012-1.404 4.332-.48.816-1.728 2.184-2.544 2.772-1.248.912-3.18 1.68-4.632 1.824l-.78.084v-1.104l.576-.072c2.64-.372 4.836-1.704 6.192-3.768.816-1.248 1.236-2.364 1.452-3.888l.072-.564h.54c.516 0 .528.012.528.384Z"
                fill="#4E8AD0"
            />
            <Path
                d="M15.36 7.5c0 .168-.492 3.12-.552 3.288-.036.108-.264-.132-.6-.636-.36-.528-.612-.792-.744-.768-.108.024-.744.9-1.416 1.956-.672 1.056-1.284 1.932-1.368 1.956-.072.024-.48-.096-.9-.264-.42-.168-.84-.276-.924-.24-.144.06-2.268 2.496-2.352 2.688-.012.048.096.168.264.276.288.192.3.192 1.32-.996l1.032-1.188.864.36c.48.192.924.336.996.3.084-.024.564-.72 1.08-1.536.516-.804 1.056-1.656 1.2-1.872l.264-.384.636.96c.588.9.936 1.164 1.128.864.084-.144.828-4.584.78-4.644-.096-.096-.708-.204-.708-.12ZM6.804 16.524c-.048.036-.084.228-.084.42v.336h10.572l-.036-.396-.036-.384-5.172-.036c-2.844-.012-5.208.012-5.244.06Z"
                fill="#4E8AD0"
            />
        </Svg>
    )
}

export default Screener;