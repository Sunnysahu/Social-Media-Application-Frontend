import React from "react";

function InputComponent({ placeholder, classname, value, onChange, onClick }) {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder={placeholder}
        className={` ${classname}`}
        value={value}
        onChange={onChange}
        onClick={onClick}
      />
    </div>
  );
}

export default InputComponent;
