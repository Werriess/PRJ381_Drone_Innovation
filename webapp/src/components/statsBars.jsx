import React, { useState, useEffect, useRef } from 'react';
import '../styles.css';

const statsBars = () => {
return(
    <div className="outer">
        <div id = "inner">
        <div className="bar" id="statBar"> </div>
        <div>%</div>
        </div>
    </div>
);
};

export default statsBars;