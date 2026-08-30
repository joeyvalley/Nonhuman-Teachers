export default function Video({ videoInfo, highlighterVisible }) {
  
  if (!videoInfo) return null;

  return (
    <div className="video-container">
      <div className={`notebook ${highlighterVisible ? "notebook-visible" : ""}`}>
        <img alt="notebook" src="/assets/images/pages/find3.png" />
      </div>
      <video
        className="background-video"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        src={videoInfo.link}
        type="video/mp4"
      ></video>
    </div>
  );
}