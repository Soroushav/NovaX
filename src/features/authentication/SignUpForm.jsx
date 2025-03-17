import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSignup } from "./useSignup";

export default function SignupForm() {
  const navigate = useNavigate();
  const { signup, isLoading } = useSignup();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  function onSubmit(data) {
    const { email, password, fullName } = data;
    signup({ email, password, fullName });
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        {/* Title */}
        <h2 className="text-center text-2xl font-bold text-gray-900">
          Sign Up
        </h2>

        {/* Form */}
        <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("fullName", {
                required: "This field is required",
              })}
            />
            {errors?.fullName?.message ? (
              <span className="text-red-600 bg-red-300 mt-5 block rounded-lg px-2 py-1 ">
                {errors?.fullName?.message}
              </span>
            ) : (
              ""
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email format is incorrect",
                },
              })}
            />
            {errors?.email?.message ? (
              <span className="text-red-600 bg-red-300 mt-5 block rounded-lg px-2 py-1 ">
                {errors?.email?.message}
              </span>
            ) : (
              ""
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("password", {
                required: "This field is required!",
                minLength: {
                  value: 8,
                  message: "Password min lenghth is 8 charachters!",
                },
              })}
            />
            {errors?.password?.message ? (
              <span className="text-red-600 bg-red-300 mt-5 block rounded-lg px-2 py-1 ">
                {errors?.password?.message}
              </span>
            ) : (
              ""
            )}
          </div>

          {/* Repeat Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Repeat Password
            </label>
            <input
              type="password"
              placeholder="Repeat your password"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("repeatPassword", {
                validate: (value) =>
                  value === getValues().password || "Password did not match!",
              })}
            />
            {errors?.repeatPassword?.message ? (
              <span className="text-red-600 bg-red-300 mt-5 block rounded-lg px-2 py-1 ">
                {errors?.repeatPassword?.message}
              </span>
            ) : (
              ""
            )}
          </div>

          {/* Signup Button */}
          <button className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition duration-300">
            Sign Up
          </button>
        </form>

        {/* Already have an account? */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <span
            onClick={(e) => {
              e.preventDefault();
              navigate("/login");
            }}
            className="text-indigo-600 font-semibold hover:underline cursor-pointer"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
}
