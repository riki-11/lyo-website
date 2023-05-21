import VideoBackground from "./video-background";

export default function Hero() {
  return (
    <div className="flex flex-col bg-lyo-darkgreen h-75-screen justify-center items-center relative">
      <VideoBackground src="videos/promotional-video.mp4"/>
      <div className="flex flex-col justify-center items-center space-y-28 relative">
        <p className="text-body font-body text-lyo-cream text-center text-5xl leading-relaxed drop-shadow-lg">Harmonizing Hearts and Serenading Souls</p>
        <button className="bg-lyo-salmon font-body text-lyo-cream rounded-lg p-5 text-2xl">Forte 2023</button>
      </div>
    </div>
  );
};