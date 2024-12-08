function CustomInputFiled({ name, inputRef, placeholder }) {
  return (
    <>
      <input
        type="text"
        name={name}
        ref={inputRef}
        placeholder={placeholder}
        className="border-2 border-solid stroke-black p-2 rounded-md"
      />
    </>
  );
}

export default CustomInputFiled;
