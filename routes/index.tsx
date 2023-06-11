import { Head } from "$fresh/runtime.ts";
import Button from "../components/Button.tsx";
import Navbar from "../components/Navbar.tsx";
import Footer from "../islands/Footer.tsx";
import Video from "../islands/Video.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Twinverse Technologies™</title>
        <link rel="icon" href="/imgs/logoImage.svg" />
        <link rel="stylesheet" href="globals.css" />
      </Head>
      <Video src="/videos/background.mp4" type="video/mp4" />
      <Navbar />
      <div class="flex justify-center items-center h-screen text-gray-600 drop-shadow-[0_5px_3px_rgba(255,255,255,0.8)]">
        <div>
          <div class="mb-4 mt-16 mx-8 text-center">
            <span class="block text-2xl md:text-3xl lg:text-5xl font-bold text-gray-300 mb-3 hover:text-white">
              Making The World Work Better
            </span>
            <form
              action={/* @__PURE__ */ "/waitlist"}
              class="flex justify-end mt-8 mr-2"
            >
              <Button />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
