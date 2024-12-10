import { useActionState } from "react";

function FormActionExample() {
  const [state, formActionFunc] = useActionState(
    async (prevState, formData) => {
      const name = formData.get("email");
      const password = formData.get("password");

      const attempts = (prevState?.attempts || 0) + 1;

      console.log(name);
      console.log(password);

      return { message: "Login Success", attempts: attempts };
    },
  );

  return (
    <div className="flex flex-col gap-4">
      <form action={formActionFunc} className="flex flex-col gap-4 min-w-72">
        <input
          type="email"
          name="email"
          placeholder="User Email"
          className="border-2 border-solid border-black rounded-md p-2"
        />
        <input
          type="password"
          name="password"
          placeholder="User Password"
          className="border-2 border-solid border-black rounded-md p-2"
        />
        <button
          type="submit"
          className="border-2 border-solid border-black rounded-md p-2 bg-black text-white"
        >
          Login
        </button>
      </form>

      {state?.message && <p>{state.message}</p>}
      {state?.attempts && <p>Login attempts: {state.attempts}</p>}
    </div>
  );
}

export default FormActionExample;
