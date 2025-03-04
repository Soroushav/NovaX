function UserAvatar() {
  return (
    <div className="flex justify-center items-center gap-5 mx-5">
      <img
        className="block w-14 aspect-square object-cover rounded-full"
        src="/default-user.jpg"
      />
      <div>
        <p className="font-bold">SoroushAv</p>
        <p className="text-stone-600">Level 2</p>
      </div>
    </div>
  );
}

export default UserAvatar;
