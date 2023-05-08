// will eventually want posterSrc as well

export default function VideoBackground (videoSrc) {
  return (
    <video id="promotional-video-bg" className="object-cover w-full h-full absolute opacity-75"  autoPlay muted loop >
      <source src={videoSrc.src} type="video/mp4"/>
      Your browser does not support HTML5 video.
    </video>
  )
};