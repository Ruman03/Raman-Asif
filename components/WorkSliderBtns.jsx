'use client';

import {PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi';
import { useSwiper } from "swiper/react";

const WorkSliderBtns = ({containerStyles, btnStyles, iconsStyles}) => {
    const swiper = useSwiper();
  return (
    <div className={containerStyles}>
        <button 
          onClick={() => swiper.slidePrev()} 
          aria-label='Previous project' 
          className={btnStyles}
        >
            <PiCaretLeftBold className={iconsStyles} />
        </button>
        <button 
          onClick={() => swiper.slideNext()} 
          aria-label='Next project' 
          className={btnStyles}
        >
            <PiCaretRightBold className={iconsStyles} />
        </button>
    </div>
  )
}

export default WorkSliderBtns