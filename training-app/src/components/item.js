import React from "react";
import "./item.css";

function item(props) {
  return (
    <div className="item-style">
      {props.editable ? (
        <input
          type="text"
          defaultValue={props.item.name}
          onKeyPress={(e) => props.onKeyPress(e, props.index)}
        />
      ) : (
        <h3 onDoubleClick={props.onDoubleClick}>{props.item.name}</h3>
      )}
      <h3>{props.item.calories}</h3>
      <button
        name={props.item.name}
        className="remove-button"
        onClick={props.onClick}
      >
        Remove
      </button>
    </div>
  );
}

export default item;
