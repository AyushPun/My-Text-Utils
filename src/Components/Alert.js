import React from "react";

export default function Alert(props) {
    const Capitalized = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height: '50px'}}>
    {props.alert && 
    <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{Capitalized(props.alert.type)}</strong>: {props.alert.msg}
      </div>
    </div>}
    </div>
  );
}
