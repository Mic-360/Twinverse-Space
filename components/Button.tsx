// Desc: Button component
const Button = () => {
  return (
    <button
      type={"submit"}
      className="flex w-full justify-center items-center flex-col rounded-lg border-gray-400 border-2"
    >
      <div className="text-gray-400 hover:text-gray-100 tracking-tightest shadow font-bold text-sm py-1 px-1 md:py-2 lg:py-3 md:px-1.5 lg:px-2 flex justify-start items-center cursor-pointer animate-pulse">
        <span>Join The Waitlist</span>
        <img
          className="fill-current -ml-4 w-10 h-6"
          src="/imgs/arrow.svg"
          alt="assign"
        />
      </div>
    </button>
  );
};
export default Button;
