//  _   _        __            _                     _       _           _ _
// | | | |_ __  / _| ___  _ __| |_ _   _ _ __   __ _| |_ ___| |_   _    ( | )_   _ ___  ___
// | | | | '_ \| |_ / _ \| '__| __| | | | '_ \ / _` | __/ _ \ | | | |    V V| | | / __|/ _ \
// | |_| | | | |  _| (_) | |  | |_| |_| | | | | (_| | ||  __/ | |_| |_      | |_| \__ \  __/
//  \___/|_| |_|_|  \___/|_|   \__|\__,_|_| |_|\__,_|\__\___|_|\__, ( )    _ \__,_|___/\___|
//  ___  ___ _ ____   _____ _ __( | ) (_)___   ___| |_(_) | |  |___/|/___ | |_
// / __|/ _ \ '__\ \ / / _ \ '__|V V  | / __| / __| __| | | | | '_ \ / _ \| __|
// \__ \  __/ |   \ V /  __/ |        | \__ \ \__ \ |_| | | | | | | | (_) | |_
// |___/\___|_|    \_/ \___|_|        |_|___/ |___/\__|_|_|_| |_| |_|\___/ \__|
// __      _____  _ __| | _(_)_ __   __ _
// \ \ /\ / / _ \| '__| |/ / | '_ \ / _` |
//  \ V  V / (_) | |  |   <| | | | | (_| |
//   \_/\_/ \___/|_|  |_|\_\_|_| |_|\__, |
//                                  |___/

function FormActionSeverSide() {
  const formAction = async (formData) => {
    "use server";
    const username = formData.get("username");
    console.log(username);
  };
  return (
    <div className="w-full flex flex-col items-center gap-4 text-center">
      <h3 className="text-xl">
        --- Server Side ---{" "}
        <span className="block text-sm">
          (Unfortunately not working yet ⚠️)
        </span>
      </h3>
      <form action={formAction} className="flex flex-col gap-4 max-w-72 w-full">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="border-2 border-solid border-black rounded-md p-2"
        />
        <button
          type="submit"
          className="border-2 border-solid border-black rounded-md p-2 bg-black text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormActionSeverSide;
