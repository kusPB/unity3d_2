import * as React from 'react';
import Svg, {Defs, Path, G, Mask, Use, ClipPath, Rect} from 'react-native-svg';

function Search(props) {
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8.552 17.105a8.5 8.5 0 0 0 5.236-1.805l4.7 4.7 1.51-1.512-4.699-4.7a8.502 8.502 0 0 0 1.806-5.236C17.105 3.837 13.268 0 8.552 0 3.837 0 0 3.837 0 8.552c0 4.716 3.837 8.553 8.552 8.553Zm0-14.967a6.42 6.42 0 0 1 6.415 6.414 6.42 6.42 0 0 1-6.415 6.415 6.42 6.42 0 0 1-6.414-6.415 6.42 6.42 0 0 1 6.414-6.414Z"
        fill="#9B9797"
      />
    </Svg>
  );
}

export default Search;
