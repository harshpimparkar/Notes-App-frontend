import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { Footer } from "../components/Footer";
const LandingPage = () => {
  return (
    <>
      <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow-md text-xl">
        <h2 className="text-xl font-bold text-black py-2 mr-2">
          <div className="flex gap-2 items-center mr-5 font-extrabold">
            <img
              src="/icons8-scroll-94.png"
              alt=""
              className="w-10 h-10 cursor-pointer"
            />
            <Link to="/">Scribe</Link>
          </div>
        </h2>
      </div>
      <div className="overflow-auto">
        <div className="flex flex-col items-center justify-center mt-10 ">
          {/* <img src="frontend\public\icons8-library-94.png" alt="Library" /> */}
          <div className="flex flex-col items-center ">
            <div className="font-extrabold text-4xl pt text-slate-900 pb-3 hover:text-5xl transition-all ease-in-out">
              Welcome to
            </div>
            <div className="font-extrabold text-5xl pt bg-slate-900 text-white hover:bg-slate-700 p-2">
              SCRIBE
            </div>
          </div>
          <div className="font-bold text-5xl pt-10 text-primary flex flex-col items-center hover:text-6xl transition-all ease-in-out">
            <div>Create a library of notes!</div>
            <div className="">
              <img
                src="/icons8-library-94.png"
                alt=""
                className="w-15 h-15 cursor-pointer hover:drop-shadow-2xl"
                sizes={30}
              />
            </div>
          </div>
          <div className="flex font-bold text-xl pt-7 justify-between">
            {"Create yout first note by clicking on"}
            <div className="ml-4">
              <AddIcon className="bg-blue-600 text-white rounded-md border hover:drop-shadow-2xl transition-all ease-in-out" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 m-2 pt-10 pb-10 items-center">
          <div className="pl-[60%]">
            <p className="text-xl font-md pb-8">{`Welcome back :)`}</p>
            <div className="font-bold text-2xl transition-all ease-in-out hover:text-primary">
              <Link to="/login">Jump back in!</Link>
            </div>
            <div></div>
          </div>
          <div className="pl-[25%]">
            <p className="text-xl font-md pb-8">{`New here?`}</p>
            <div className="font-bold text-2xl transition-all ease-in-out hover:text-primary">
              <Link to="/create-account">{`Let's begin!`}</Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
