import { Link } from "react-router-dom";
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
            <Link to="/">Notes.</Link>
          </div>
        </h2>
        <div className="font-bold text-black py-2 mr-2 flex justify-between gap-5 text-center">
          <div className="bg-primary rounded-md p-1.5 text-white hover:bg-blue-700"><Link to="/login">Login</Link></div>
          <div className="bg-primary rounded-md p-1.5 text-white hover:bg-blue-700"><Link to="/create-account">Sign-Up</Link></div>
        </div>
      </div>
      <div className="overflow-auto">
        <div className="flex flex-col items-center justify-center mt-10 ">
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
