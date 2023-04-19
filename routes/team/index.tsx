import { Detail } from "../../utils/detail.ts";
import Footer from "../../islands/Footer.tsx";
import Video from "../../islands/Video.tsx";
import { useRef } from "preact/hooks";

const Team = () => {
  return (
    <>
      <Video src="/background.mp4" type="video/mp4" />
      <div class="flex justify-evenly items-center h-screen text-gray-600 drop-shadow-[0_5px_3px_rgba(255,255,255,0.8)] p-4 gap-x-4">
        <div id="image" class="w-2/6">
          <img src="/logo.png" alt="Logo" />
        </div>
        <div id="text" class="w-2/6">
          <h1 class="text-5xl my-4 text-white font-bold -ml-1">
            {detail.name}
          </h1>
          <h4 class="text-2xl my-4 text-white font-semibold">
            {detail.role}
          </h4>
          <article class="text-xl text-gray-500 text-justify">
            {detail.description}
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Team;

const detail: Detail = {
  id: 1,
  name: "Wewer",
  role: "Artificially Virtual Environment",
  image: "/logo.png",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error blanditiis, maxime ratione porro incidunt quos debitis distinctio quam, fugiat facilis ipsam repellendus nesciunt inventore eos officiis dolores quasi assumenda consectetur qui animi placeat.",
};
