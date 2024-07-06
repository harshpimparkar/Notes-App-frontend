import { Link, useNavigate } from "react-router-dom";
import ProfileInfo from "./ProfileInfo";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };
  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  };
  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow-md text-xl">
      <h2 className="text-xl font-bold text-black py-2 mr-2">
        <div className="flex gap-2 items-center mr-5 font-bold">
          <img src="https://img.icons8.com/?size=160&id=PyrI7GCv8LCv&format=png" alt="logo" className="w-10 h-10 cursor-pointer" />
          <Link to="/">Notes.</Link>
        </div>
      </h2>
      <SearchBar
        value={searchQuery}
        setSearchQuery={setSearchQuery}
        onClearSearch={onClearSearch}
        handleSearch={handleSearch}
      />
      <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
