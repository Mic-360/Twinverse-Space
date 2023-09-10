import { Head } from "$fresh/runtime.ts";
import Button from "../../components/Button.tsx";
import ImageCarousel from "../../components/Carousel.tsx";
import Footer from "../../islands/Footer.tsx";
import Navbar from "../../islands/Navbar.tsx";
import Video from "../../islands/Video.tsx";

const Demo = () => {
  const images = [
    "https://i0.wp.com/www.odishaecoretreats.com/wp-content/uploads/2023/05/bhitarkanika.jpg?w=1000&ssl=1",
    // "https://i0.wp.com/www.odishaecoretreats.com/wp-content/uploads/2023/05/sonapur.jpg?w=1200&ssl=1",
    // "https://i0.wp.com/www.odishaecoretreats.com/wp-content/uploads/2023/05/Putsil.jpg?w=1200&ssl=1",
    // "https://i0.wp.com/www.odishaecoretreats.com/wp-content/uploads/2023/05/hirakud.jpg?w=1200&ssl=1",
    // "https://i0.wp.com/www.odishaecoretreats.com/wp-content/uploads/2023/05/Daringbadi.jpg?w=1200&ssl=1",
    // "https://i0.wp.com/www.odishaecoretreats.com/wp-content/uploads/2023/05/Satkosia.jpg?w=850&ssl=1",
    // "https://i0.wp.com/www.odishaecoretreats.com/wp-content/uploads/2023/05/1.jpg?w=1200&ssl=1",
    // Add more image paths here
  ];

  return (
    <>
      <Head>
        <title>Demo - Twinverse™</title>
        <link rel="icon" href="/imgs/logoImage.svg" />
        <link rel="stylesheet" href="globals.css" />
      </Head>
      <Navbar />
      <div class="flex h-screen w-full text-gray-400 drop-shadow-[0_5px_3px_rgba(255,255,255,0.8)]">
        <Video src="/videos/background.mp4" type="video/mp4" />
        <div class='flex flex-col lg:flex-row gap-y-2 justify-center items-center'>
          <div class="w-full h-96 mt-8 lg:mt-0 md:mt-0 md:h-1/2 lg:h-full flex flex-col justify-center md:px-14 px-8 lg:px-4 lg:pl-10">
            <ImageCarousel images={images} />
          </div>
          <div class="w-full h-96 lg:h-full lg:w-full flex flex-col justify-center px-10 md:px-24">
            <h1 class="text-lg md:text-xl lg:text-3xl mb-8 text-gray-200">Eco Retreat.</h1>
            <article class="text-md md:text-xl lg:text-2xl tracking-tight text-justify lg:text-start mb-4">
              Immerse yourself in the beauty of Bhubaneswar's Eco Retreat with
              our new virtual reality experience. Step into a world of lush
              greenery, cascading waterfalls, and stunning architecture.
              Experience the peace and tranquility of this hidden gem from the
              comfort of your own home.
            </article>
            <form action="https://www.wewer.live/">
              <button
                type={"submit"}
                className="flex justify-center items-center flex-col rounded-lg border-gray-400 border-2 px-4"
              >
                <div className="text-gray-400 hover:text-gray-100 tracking-tightest shadow font-bold text-sm py-1 px-1 md:py-2 lg:py-3 md:px-1.5 lg:px-2 flex justify-start items-center cursor-pointer animate-pulse">
                  <span>Coming Soon...</span>
                  <img
                    className="fill-current -ml-4 w-10 h-6"
                    src="/imgs/arrow.svg"
                    alt="assign"
                  />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Demo;
