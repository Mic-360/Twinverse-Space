const Navbar = () => {
  return (
    <nav class="absolute top-0 left-0 sm:invisible flex px-4 justify-between items-center w-full z-10">
      <span>
        <a href="/" class="flex justify-center items-center gap-x-4">
          <img
            class="h-16 mx-auto drop-shadow-2xl"
            src="/imgs/logoVec.svg"
            alt="Logo"
          />
        </a>
      </span>
      <button
        type="button"
        class="mr-2 flex gap-x-12 font-semibold text-gray-400"
      >
        <img
          class="h-8 mx-auto drop-shadow-2xl"
          src="/imgs/menu.svg"
          alt="menu"
        />
      </button>
      <div
        class={`bg-white hidden text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44`}
      >
        <ul class="py-1" aria-labelledby="dropdownLargeButton">
          <li>
            <a
              href="#"
              class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
            >
              Earnings
            </a>
          </li>
        </ul>
        <div class="py-1">
          <a
            href="#"
            class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
          >
            Sign out
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
