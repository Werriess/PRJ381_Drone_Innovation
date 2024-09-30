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

    arrowUp.addEventListener('mousedown', startIncrease);
    arrowUp.addEventListener('mouseleave', stopIncrease);
    arrowUp.addEventListener('mouseup', stopIncrease);

    arrowDown.addEventListener('mousedown', startDecrease);
    arrowDown.addEventListener('mouseleave', stopDecrease);
    arrowDown.addEventListener('mouseup', stopDecrease);

    return() => {
    arrowUp.removeEventListener('mousedown', startIncrease);
    arrowUp.removeEventListener('mouseleave', stopIncrease);
    arrowUp.removeEventListener('mouseup', stopIncrease);

    arrowDown.removeEventListener('mousedown', startDecrease);
    arrowDown.removeEventListener('mouseleave', stopDecrease);
    arrowDown.removeEventListener('mouseup', stopDecrease);
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