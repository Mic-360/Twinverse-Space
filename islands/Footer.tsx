const Footer = () => {
  return (
    <footer class="absolute bottom-0 left-0 invisible sm:visible flex px-4 justify-between items-center w-full z-10">
      <span>
        <a href="/" class='flex justify-center items-center gap-x-4'>
          <img
          class="h-12 mx-auto drop-shadow-2xl"
          src="/imgs/logoVec.svg"
          alt="Logo"
        />
        <span class='text-gray-400 hover:text-gray-100 text-xl -ml-4 font-semibold'>Twinverse™</span>
        </a>
      </span>
      <div class="mr-10 flex gap-x-12 font-semibold text-gray-400">
        <a href="/mission" class="hover:text-gray-100 cursor-pointer">
          Our Mission
        </a>
        {/* <a href="/team" class="hover:text-gray-100 cursor-pointer">
          Our Team
        </a> */}
        {/* <a href="/team" class="hover:text-gray-100 cursor-pointer">
          Our Media
        </a> */}
      </div>
    </footer>
  );
};
export default Footer;
