import { useState } from "react";
import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

function UpdateUserForm() {
  const { user } = useUser();
  const [fullName, setFullname] = useState(user.user_metadata.fullName);
  const [avatar, setAvatar] = useState(null);
  const { updateUser, isUpdating } = useUpdateUser();
  function handleSubmit(e) {
    e.preventDefault();
    if (!avatar) updateUser({ fullName });
    else {
      updateUser({ avatar, fullName });
    }
  }

  function handleCancel() {
    setFullname(user.user_metadata.fullName);
    setAvatar(null);
  }
  return (
    <div className="max-w-[85%] mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold text-stone-700 mb-6">
        Update user data
      </h2>

      <form className="space-y-6">
        {/* Email Address */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={`${user.email}`}
            disabled
            className="w-full border rounded-md px-4 py-2 bg-stone-100 text-stone-500 cursor-not-allowed"
          />
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Enter your full name"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Avatar Image */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">
            Avatar Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setAvatar(e.target.files[0])}
            className="block w-full text-sm text-stone-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 pt-4 border-t">
          <button
            type="button"
            className="px-4 py-2 border border-stone-300 rounded-md text-stone-700 hover:bg-stone-100 transition"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
            onClick={handleSubmit}
            disabled={isUpdating}
          >
            Update account
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUserForm;
