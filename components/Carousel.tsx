interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {

  return (
    <div class="relative h-3/4 overflow-hidden rounded-2xl transition-transform transform-gpu duration-500 ease-in-out">
      {images.map((image, index) => {
        return (
          <div class="w-full h-full">
            <img
            key={index}
            className={`flex-shrink-0 w-full h-full object-cover opacity-60`}
            src={image}
            alt={`Slide ${index}`}
          />
          </div>
        );
      })}
    </div>
  );
};

export default ImageCarousel;
