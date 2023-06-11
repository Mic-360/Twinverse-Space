import { Head } from "$fresh/runtime.ts";
import Footer from "../../islands/Footer.tsx";
import Video from "../../islands/Video.tsx";

const Waitlist = () => {
  return (
    <>
      <Head>
        <title>Waitlist - Twinverse™</title>
        <link rel="icon" href="/imgs/logoImage.svg" />
        <link rel="stylesheet" href="globals.css" />
      </Head>
      <Video src="/videos/background.mp4" type="video/mp4" />
      <div class="flex flex-col justify-center items-center h-screen text-gray-600 drop-shadow-[0_5px_3px_rgba(255,255,255,0.8)]">
        <div>
          <div class="mb-6 mx-8 text-center">
            <span class="block text-5xl font-bold text-gray-300 mb-3 hover:text-white">
              Thank You for Joining the Waitlist!
            </span>
          </div>
          <div class='flex justify-center items-center w-full'>
            <span>
              We will be connectong with you soon.
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Waitlist;
