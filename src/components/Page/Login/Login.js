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
    <div className="flex justify-center">
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
      </div>
      {email && (
        <div className="w-1/2">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                {/* <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a> */}
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      )}
      {phone && (
        <div className="w-1/2">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="phone number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                {/* <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a> */}
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
