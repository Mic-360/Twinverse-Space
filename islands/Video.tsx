interface VideoProps {
  src: string;
  type: string;
}

const Video = (props: VideoProps) => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute object-cover w-screen h-screen -z-10"
    >
      <source src={props.src} type={props.type} />
    </video>
  );
};
export default Video;
