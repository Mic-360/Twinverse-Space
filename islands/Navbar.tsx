import { useState } from "preact/hooks";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

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
        onClick={() => setClicked(!clicked)}
        type="button"
        class="mr-2 flex gap-x-12 font-semibold text-gray-400 outline-none"
      >
        <img
          class="h-8 mx-auto drop-shadow-2xl"
          src="/imgs/menu.svg"
          alt="menu"
        />
      </button>
      <div
        class={clicked
          ? "absolute -top-2 right-5 rounded-xl bg-black text-gray-400 z-10 text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
          : "hidden"}
        id="dropdown"
      >
        <ul class="py-1" aria-labelledby="dropdownLargeButton">
          <li>
            <a
              onClick={() => setClicked(!clicked)}
              href="/mission"
              class="text-sm hover:bg-gray-100 block px-4 py-2"
            >
              Our Mission
            </a>
          </li>
        </ul>
        <div class="py-1">
          <form action="https://896uznc175v.typeform.com/to/j8nQFo6f">
            <button
              type={"submit"}
              onClick={() => setClicked(!clicked)}
              class="text-sm hover:bg-gray-100 block px-4 py-2"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
