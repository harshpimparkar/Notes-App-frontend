// import { getInitials } from "../utils/helper.js";
import { GrLogout } from "react-icons/gr";

const ProfileInfo = ({ onLogout }) => {
  return (
    <>
      <div className="flex items-center justify-center gap-3 ml-5 drop-shadow-md border mr-5 px-5 py-1 text-white bg-primary hover:bg-blue-700 rounded-md">
        <div>
          <button
            className="text-md text-white hover:underline"
            onClick={onLogout}
          >
            <GrLogout size={22} className="text-white bg-transparent mx-auto" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
