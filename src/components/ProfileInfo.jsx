// import { getInitials } from "../utils/helper.js";
import { GrLogout } from "react-icons/gr";


const ProfileInfo = ({ onLogout }) => {
  return (
    <>
      <div className="flex items-center justify-center gap-3 ml-5 drop-shadow-md border mr-5 px-5 py-1 text-white bg-primary hover:bg-blue-700 rounded-md">
        {/* <div className="w-8 h-8 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
          {getInitials(userInfo.fullname)}
        </div> */}
        <div>
          {/* <p className="text-sm font-bold">{userInfo.fullname}</p> */}
          <button
            className="text-md text-white hover:underline"
            onClick={onLogout}
          >
            <GrLogout size={22} className="text-white bg-transparent mx-auto"/>
            Logout
          </button>
        </div>
      </div>
      
    </>
  );
};

export default ProfileInfo;
