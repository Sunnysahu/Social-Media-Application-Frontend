function InputComponent({type, placeholder, classname, value, onChange, onClick, mfull }) {
  return (
    <div className={`${mfull}`}>
      <input
        type={type}
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
