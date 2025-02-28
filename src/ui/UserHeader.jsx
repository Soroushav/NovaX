import {
  HiOutlineBell,
  HiOutlineChatBubbleBottomCenterText,
} from "react-icons/hi2";
import UserAvatar from "../features/authentication/UserAvatar";

function UserHeader() {
  const iconStyle = "text-4xl text-stone-400 rounded-full p-1 cursor-pointer";
  console.log(iconStyle + ` text-stone-800`)
  return (
    <div className="flex gap-2 items-center">
      <div className="relative">
        <HiOutlineChatBubbleBottomCenterText className={`${iconStyle} text-stone-600`} />
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
      </div>
      <div>
        <HiOutlineBell className={iconStyle} />
        
      </div>

      <UserAvatar />
    </div>
  );
}

export default UserHeader;
