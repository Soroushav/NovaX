import { useState } from "react";
import { useUpdateUser } from "./useUpdateUser";
import { useForm } from "react-hook-form";

function UpdatePasswordForm() {
  const { register, getValues, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit(e) {
    const password = e.password;
    updateUser({ password }, { onSuccess: reset });
  }
  return (
    <div className="max-w-[65%] mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Password Field */}
        <div className="mb-4">
          <label className="text-lg font-medium text-stone-700 block mb-2">
            Password (Min 8 Characters)
          </label>
          <input
            type="password"
            className="w-3/4 border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="********"
            disabled={isUpdating}
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Minimum password should be 8 characters.",
              },
            })}
          />
          {errors?.password && (
            <span className="text-red-500 text-lg mt-1 block px-2 ">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="mb-3">
          <label className="text-lg font-medium text-stone-700 block mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-3/4 border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="********"
            disabled={isUpdating}
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                getValues().password === value || "Password need to match.",
            })}
          />
          {errors?.passwordConfirm && (
            <span className="text-red-500 text-lg mt-1 block px-2 ">
              {errors.passwordConfirm.message}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            className="px-5 py-2 border rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Update password
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdatePasswordForm;
