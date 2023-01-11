import React, { useState } from "react";

const Login = () => {
  const [phone, setPhone] = useState(true);
  const [email, setEmail] = useState("");
  const handlePhone = () => {
    setPhone(true);
    setEmail(false);
  };
  const handleEmail = () => {
    setPhone(false);
    setEmail(true);
  };

  return (
    <div>
      <button
        onClick={() => handlePhone()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      >
        Login with Phone
      </button>

      <button
        onClick={() => handleEmail()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      >
        Login with Email
      </button>
      {email && (
        <div>
          <form>
            <input type="email" name="email" placeholder="Enter Email" />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      {phone && (
        <div>
          <form>
            <input
              type="number"
              name="phoneNumber"
              placeholder="Enter phone Number"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
