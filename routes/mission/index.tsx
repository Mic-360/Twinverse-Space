import Footer from "../../islands/Footer.tsx";
import Video from "../../islands/Video.tsx";

const Misson = () => {
  return (
    <>
      <Video src="/background.mp4" type="video/mp4" />
      <div class="flex flex-col justify-center items-center h-screen text-gray-600 drop-shadow-[0_5px_3px_rgba(255,255,255,0.8)]">
        <div>
          <div class="mb-16 mx-8 text-center">
            <span class="block text-5xl font-bold text-gray-300 mb-3 hover:text-white">
              Our Mission.
            </span>
          </div>
          <div class="w-full px-48 text-center tracking-widest leading-loose font-semibold text-xl text-white flex justify-center items-center flex-col gap-y-8">
            <article>
              To develop a software platform that allows users to easily create
              and customize their own virtual spaces without the need for
              extensive frontend, backend, and design development. Our software
              streamlines the process of creating virtual environments, making
              it accessible and straightforward for anyone to create their own
              immersive experiences.
            </article>
            <span class="flex justify-between text-center gap-x-20 mt-12">
              <a href="https://www.facebook.com/twinversetech/">
                <img
                  class="h-10 w-10 mx-auto mb-4 drop-shadow-2xl cursor-pointer"
                  src="/facebook.svg"
                  alt="facebook"
                />
              </a>
              <a href="https://www.twitter.com/twinversetech/">
                <img
                  class="h-10 w-10 mx-auto mb-4 drop-shadow-2xl cursor-pointer"
                  src="/twitter.svg"
                  alt="twitter"
                />
              </a>
              <a href="https://www.linkedin.com/company/twinversetech/">
                <img
                  class="h-10 w-10 mx-auto mb-4 drop-shadow-2xl cursor-pointer"
                  src="/linkedin.svg"
                  alt="linkedin"
                />
              </a>
              <a href="https://www.instagram.com/twinversetech/">
                <img
                  class="h-10 w-10 mx-auto mb-4 drop-shadow-2xl cursor-pointer"
                  src="/instagram.svg"
                  alt="instagram"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Misson;
