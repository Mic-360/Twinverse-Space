const Button = () => {
  return (
    <button type='submit' class="flex justify-center items-center flex-col">
      <a
        href="/"
        class="bg-transparent border-gray-500 hover:border-gray-100 border-2 text-gray-400 hover:text-gray-100 shadow font-bold text-sm py-3 px-4 rounded-lg flex justify-start items-center cursor-pointer mt-4"
      >
        <span>Join The Waitlist</span>
        <img
          class="fill-current -ml-4 w-10 h-6"
          src="/imgs/arrow.svg"
          alt="assign"
        />
      </a>
    </button>
  );
}
export default Button;
