function SubmitComponent({ onClick, text, classname }) {
  return (
    <button type="submit" onClick={onClick} className={`${classname}`}>
      {text}
    </button>
  );
}

export default SubmitComponent
