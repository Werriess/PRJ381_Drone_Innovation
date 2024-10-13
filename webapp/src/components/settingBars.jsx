import React, { useState, useEffect, useRef } from 'react';
import '../styles.css';

const settingBars = () => {
const [width, setWidth] = useState(0);
const arrowUpRef = useRef(null);
const arrowDownRef = useRef(null);
const barRef = useRef(null);

let increaseInterval;
let decreaseInterval;

useEffect(() => {
    const arrowUp = arrowUpRef.current;
    const arrowDown = arrowDownRef.current;

    const increase = () => {
        setWidth(prevWidth => {
            let newWidth = prevWidth+1;
            return newWidth > 100 ? 100 : newWidth;
        });
    };

    const decrease = () => {
        setWidth(prevWidth => {
            let newWidth = prevWidth-1;
            return newWidth < 0 ? 0 : newWidth;
        });
    };

    const startIncrease = () => {
        increaseInterval = setInterval(increase,100);
    };

    const stopIncrease = () => {
        clearInterval(increaseInterval);
    };

    const startDecrease = () => {
        decreaseInterval = setInterval(decrease,100);
    };

    const stopDecrease = () => {
        clearInterval(decreaseInterval);
    };

    //Touch Handles for mobile
    const handleTouch = (event) => {
        const touch = event.touches[0];
        const touchX = touch.clientX;
        const barRect = barRef.current.getBoundingClientRect();
        const barWidth = barRect.width;
        const newWidth = ((touchX - barRect.left)/barWidth) *100;
        setWidth(newWidth < 0 ? 0 : newWidth > 100 ? 100 : newWidth);
    };
    if((arrowUp && arrowDown && barRef.current)){
    arrowUp.addEventListener('mousedown', startIncrease);
    arrowUp.addEventListener('mouseleave', stopIncrease);
    arrowUp.addEventListener('mouseup', stopIncrease);

    arrowDown.addEventListener('mousedown', startDecrease);
    arrowDown.addEventListener('mouseleave', stopDecrease);
    arrowDown.addEventListener('mouseup', stopDecrease);

    arrowUp.addEventListener('touchstart', startIncrease);
    arrowUp.addEventListener('touchcancel', stopIncrease);
    arrowUp.addEventListener('touchend', stopIncrease);

    arrowDown.addEventListener('touchstart', startDecrease);
    arrowDown.addEventListener('touchcancel', stopDecrease);
    arrowDown.addEventListener('touchend', stopDecrease);

    barRef.current.addEventListener('touchmove', handleTouch);
    }

    return() => {
        if((arrowUp && arrowDown )){
    arrowUp.removeEventListener('mousedown', startIncrease);
    arrowUp.removeEventListener('mouseleave', stopIncrease);
    arrowUp.removeEventListener('mouseup', stopIncrease);

    arrowDown.removeEventListener('mousedown', startDecrease);
    arrowDown.removeEventListener('mouseleave', stopDecrease);
    arrowDown.removeEventListener('mouseup', stopDecrease);

    arrowUp.removeEventListener('touchstart', startIncrease);
    arrowUp.removeEventListener('touchcancel', stopIncrease);
    arrowUp.removeEventListener('touchend', stopIncrease);

    arrowDown.removeEventListener('touchstart', startDecrease);
    arrowDown.removeEventListener('touchcancel', stopDecrease);
    arrowDown.removeEventListener('touchend', stopDecrease);
        }
        if((barRef.current)){
    barRef.current.removeEventListener('touchmove', handleTouch);
        }
    };
}, []);


    return(
                    <div className="outer">
                        <div className="bar" id="setting1" ref={barRef} style={{width: `${width}%`}}></div>
                        <div className="settingButtons">
                            <img src="../src/assets/Sorting arrowheads.png" alt="Increase" id="arrowUp1" ref={arrowUpRef}/>
                            <img src="../src/assets/Sorting arrowheads.png" alt="Decrease" id="arrowDown1" className="bottomArrow" ref={arrowDownRef} />
                        </div>
		            </div>
    );
};

export default settingBars;