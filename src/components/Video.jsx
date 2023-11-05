import videoList from "../api/videoList";

export default function Video({ videoInfo }) {
  return (
    <div className="video-container">
      <video className="background-video" autoPlay muted playsInline loop preload="auto" src={videoList[Math.floor(Math.random() * videoList.length)].link || videoInfo.link} type="video/mp4">
      </video>
    </div>
  )
}