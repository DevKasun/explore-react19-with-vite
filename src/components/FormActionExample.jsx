import CustomInputFiled from "./CustomInputField";

function FormActionExample() {
  const formAction = async (formData) => {
    "use server";
    console.log(formData.get("username"));
  };
  return (
    <form action={formAction} className="flex flex-col gap-4">
      <CustomInputFiled name="username" placeholder="Enter your name" />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded-md">
        Submit
      </button>
    </form>
  );
}

export default FormActionExample;
