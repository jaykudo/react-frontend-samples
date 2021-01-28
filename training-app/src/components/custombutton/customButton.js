import React from 'react'
import "./../../styles/common.scss"
import "./customButton.scss"


function CustomButton({children, type, onClick}) {
    let localClass = "primary";
    if(type ==="primary") {
        localClass = "primary";
    }
    if(type === "disabled") {
        localClass = "disabled";
    }

    const cls = `bgYellow fontBlack pad8 width100 radius15 ${localClass}`.trim();

    return ( <div className="btnClass">
        <button className={cls} onClick={onClick}>{children}</button>
    </div>)
}

export default CustomButton;