export const Footer = () => {
  return (
    <div className="flex justify-between pt-10  bg-slate-800 text-slate-400 px-10 font-light mt-10 pb-20">
      <div className="">Harsh Pimparkar @ 2024</div>
      <div className="flex mr-10 gap-10">
        <div className=" flex justify-between">
          <div>
            <a href="https://github.com/harshpimparkar" className="_blank">
              <img
                src="https://www.svgrepo.com/show/325237/github-outline.svg"
                alt="gihub logo"
                className="w-10 h-10 text-white"
              />
              <div>github</div>
            </a>
          </div>
        </div>
        <div className="flex justify-between">
          <a href="https://www.instagram.com/harsh_pimparkar" className="_blank">
            <img
              src="https://www.svgrepo.com/show/447167/instagram-outline.svg"
              alt="gihub logo"
              className="w-10 h-10 text-white"
            />
            <div>instagram</div>
          </a>
        </div>
      </div>
    </div>
  );
};
