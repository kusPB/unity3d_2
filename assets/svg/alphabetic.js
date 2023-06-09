import * as React from 'react';
import Svg, {Defs, Path, G, Mask, Use, ClipPath, Rect} from 'react-native-svg';

function Alphabetic(props) {
  return (
    <Svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4.893 12.857v.25H7.07c.348 0 .524.424.278.67l-.007.009-.008.008-3.206 3.848a.393.393 0 0 1-.54 0L.38 13.794l-.007-.008-.008-.008a.393.393 0 0 1 .277-.67H2.82V.642A.393.393 0 0 1 3.214.25H4.5a.393.393 0 0 1 .393.393v12.214Zm9.117.164.36-.414h-2.799a.393.393 0 0 1-.393-.393V10.93a.393.393 0 0 1 .393-.393h5.143a.393.393 0 0 1 .393.393v.708a1.037 1.037 0 0 1-.348.774l-.012.01-.01.013-2.461 2.83-.36.415h2.798a.393.393 0 0 1 .393.392v1.286a.393.393 0 0 1-.393.393h-5.143a.393.393 0 0 1-.393-.393v-.708a1.037 1.037 0 0 1 .348-.774l.012-.011.01-.012 2.462-2.83ZM15.345.511l.001.003 2.38 6.425.001.001a.391.391 0 0 1-.37.524h-.998a.393.393 0 0 1-.376-.272l-.001-.004-.177-.519-.058-.169h-3.211l-.057.17-.178.518v.004a.393.393 0 0 1-.375.272h-.997a.393.393 0 0 1-.37-.523l2.38-6.427.001-.003a.393.393 0 0 1 .37-.261h1.665a.393.393 0 0 1 .37.26Zm-2.097 3.908-.113.331h2.016l-.113-.33-.659-1.93-.236-.692-.237.693-.658 1.928Z"
        fill="#000"
        stroke="#EDF1F9"
        strokeWidth={0.5}
      />
    </Svg>
  );
}

export default Alphabetic;
