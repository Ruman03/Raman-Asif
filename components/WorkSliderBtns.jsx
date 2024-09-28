'use client';

import {PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi';
import { useSwiper } from "swiper/react";

const WorkSliderBtns = ({containerStyles, btnStyles, iconsStyles}) => {
    const swiper = useSwiper();
  return (
    <div className={containerStyles}>
        <button aria-label='Left' className={btnStyles}>
            <PiCaretLeftBold className={iconsStyles} onClick={() => swiper.slidePrev()} />
        </button>
        <button aria-label='Right' className={btnStyles}>
            <PiCaretRightBold className={iconsStyles} onClick={() => swiper.slideNext()} />
        </button>
    </div>
  )
}

export default WorkSliderBtns