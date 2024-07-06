import AddIcon from "@mui/icons-material/Add";
export const EmptyCard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10 ">
        {/* <img src="frontend\public\icons8-library-94.png" alt="Library" /> */}
        <div className="flex flex-col items-center ">
          <div className="font-extrabold text-5xl pt text-slate-900 pb-3 hover:text-5xl transition-all ease-in-out">
            Hello there!
          </div>
        </div>
        <div className="font-bold text-5xl pt-10 text-primary flex flex-col items-center hover:text-6xl transition-all ease-in-out">
          <div>Welcome to <div className="text-center text-7xl hover:text-blue-950 ">Notes.</div> </div>
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
    </>
  );
};
