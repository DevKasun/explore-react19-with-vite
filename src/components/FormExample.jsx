import { useRef } from "react";
import CustomInputFiled from "./CustomInputField";

function FormExample() {
  const userName = useRef(null);
  const userEmail = useRef(null);

  function onsubmit(e) {
    e.preventDefault();
    console.log(userName.current.value, userEmail.current.value);
  }

  return (
    <form onSubmit={onsubmit} className="flex flex-col gap-4">
      <CustomInputFiled inputRef={userName} placeholder="Enter your name" />
      <CustomInputFiled inputRef={userEmail} placeholder="Enter your email" />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded-md">
        Submit
      </button>
    </form>
  );
}

export default FormExample;
