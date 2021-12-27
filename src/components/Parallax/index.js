import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import { useWindowSize } from '../../hooks/useWindowSize';

const ParallaxComponent = ({ children }) => {
  const [isMobile, setIsMobile] = useState(true);
  const size = useWindowSize();

  useEffect(() => {
    if(size[0] > 768) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [size[0]]);

  return (
    <>
      <Parallax y={isMobile ? [-0, 0] : [-20, 20]} tagOuter='div'>
        {children}
      </Parallax>
    </>
  )
}

export default ParallaxComponent;
