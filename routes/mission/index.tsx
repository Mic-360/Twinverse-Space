import { Head } from "$fresh/runtime.ts";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../islands/Footer.tsx";
import Video from "../../islands/Video.tsx";

const Mission = () => {
  return (
    <>
      <Head>
        <title>Mission - Twinverse™</title>
        <link rel="icon" href="/imgs/logoImage.svg" />
        <link rel="stylesheet" href="globals.css" />
      </Head>
      <Video src="/videos/background.mp4" type="video/mp4" />
      <Navbar />
      <div class="flex justify-center items-center h-screen text-gray-600 drop-shadow-[0_5px_3px_rgba(255,255,255,0.8)]">
        <div class='flex flex-col justify-center items-center'>
          <div class="mb-4 mt-16 mx-8 text-center w-2/3">
            <h1 class="text-xl md:text-3xl lg:text-5xl mb-10">Our Mission.</h1>
            <article class='text-md md:text-xl lg:text-2xl text-center'>
              To develop a software platform that allows users to easily create
              and customize their own virtual spaces without the need for
              extensive frontend, backend, and design development. Our software
              streamlines the process of creating virtual environments, making
              it accessible and straightforward for anyone to create their own
              immersive experiences.
            </article>
            <span class="flex justify-evenly text-center mt-12">
              <a target="_blank" href="https://www.facebook.com/twinversetech/">
                <img
                  class="h-10 w-10 mx-auto mb-4 drop-shadow-2xl cursor-pointer"
                  src="/imgs/facebook.svg"
                  alt="facebook"
                />
              </a>
              <a target="_blank" href="https://www.twitter.com/twinversetech/">
                <img
                  class="h-10 w-10 mx-auto mb-4 drop-shadow-2xl cursor-pointer"
                  src="/imgs/twitter.svg"
                  alt="twitter"
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/twinversetech/"
              >
                <img
                  class="h-10 w-10 mx-auto mb-4 drop-shadow-2xl cursor-pointer"
                  src="/imgs/linkedin.svg"
                  alt="linkedin"
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/twinversetech/"
              >
                <img
                  class="h-10 w-10 mx-auto mb-4 drop-shadow-2xl cursor-pointer"
                  src="/imgs/instagram.svg"
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

export default Mission;
