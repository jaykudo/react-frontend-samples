import React from "react";

// Props using Children instead of Attribute
function nameTagChildren(props) {
    return <h3 className="name">{props.children}</h3>;
}

export default nameTagChildren