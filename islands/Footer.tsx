const Footer = () => {
  return (
    <div class="absolute bottom-0 left-0 flex px-4 justify-between w-full z-10">
      <span>
        <a href="/" class='flex justify-center item-center gap-x-4'>
          <img
          class="h-8 mx-auto mb-4 drop-shadow-2xl"
          src="/imgs/logoImage.svg"
          alt="Logo"
        />
        <span class='text-white text-2xl font-semibold'>Twinverse™</span>
        </a>
      </span>
      <footer class="mr-10 flex gap-x-12 font-semibold text-gray-400">
        <a href="/mission" class="hover:text-gray-100 cursor-pointer">
          Our Misson
        </a>
        {/* <a href="/team" class="hover:text-gray-100 cursor-pointer">
          Our Team
        </a> */}
        {/* <a href="/team" class="hover:text-gray-100 cursor-pointer">
          Our Media
        </a> */}
      </footer>
    </div>
  );
};
export default Footer;
