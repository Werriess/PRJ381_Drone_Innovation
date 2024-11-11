import React, { useState, useEffect, useRef } from 'react';
import '../styles.css';

const checkBox = () => {
    const checkBoxRef = useRef(null);
    const [isChecked, setCheck] = useState(false);

    useEffect(() => {
        const checkBox = checkBoxRef.current;
        const toggleChecked = () => {
            setCheck(prevCheck => !prevCheck);
        };

        checkBox.addEventListener('click', toggleChecked);

        return () => {
            checkBox.removeEventListener('click', toggleChecked);
        };
    }, []);


    return(
			 <div id="checkbox" ref={checkBoxRef} className={isChecked ? 'check' : ''}></div>
    );
};

export default checkBox;