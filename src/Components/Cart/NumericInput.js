import React, { useState } from 'react';
import dropDown from "../../assets/Icons/Drop-Down-Small.png"
import dropUp from "../../assets/Icons/Drop-Up-Small.png"
const NumericInput = () => {
    const [value, setValue] = useState(1);

    const increment = () => {
        setValue(prevValue => prevValue + 1);
    };

    const decrement = () => {
        setValue(prevValue => prevValue - 1);
    };

    return (
        <div className="numeric-input">
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value) || 0)}
            />
            <div className="controls">
                <div onClick={increment}><img src={dropUp} alt="icon"/></div>
                <div onClick={decrement}><img src={dropDown} alt="icon"/></div>
            </div>
        </div>
    );
};

export default NumericInput;
