import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const SearchBar = ({ value, setSearchQuery, handleSearch, onClearSearch }) => {
  return (
    <>
      <div>
        <div className="input-box my-auto rounded-2xl flex w-96 justify-between">
          <input
            type="text"
            placeholder="Search Notes..."
            className="outline-none"
            value={value}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <div className="flex flex-row">
            <MdClose
              size={22}
              className={`my-auto  hover:text-slate-900 ${
                value ? "text-slate-500" : "text-transparent"
              }`}
              onClick={onClearSearch}
            />
            <FaMagnifyingGlass
              size={22}
              className={`my-auto hover:text-slate-900 ${
                value ? "text-slate-500" : "text-transparent"
              }`}
              onClick={handleSearch}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
