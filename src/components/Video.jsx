import videoList from "../api/videoList";

export default function Video({ highlighterVisible }) {
  return (
    <div className="video-container">
      <div className={`notebook ${highlighterVisible ? "notebook-visible" : ""}`}>
        <img alt="notebook" src="/assets/images/pages/find3.png" />
      </div>
      <video className="background-video" autoPlay muted playsInline loop preload="auto" src={videoList[Math.floor(Math.random() * videoList.length)].link} type="video/mp4">
      </video>
    </div>
  )
}