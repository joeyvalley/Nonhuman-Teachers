import videoList from "../api/videoList";

export default function Video({ videoInfo }) {

  const startingVideo = randomVideo();

  function randomVideo() {
    return videoList[Math.floor(Math.random() * videoList.length)]
  }

  return (
    <div className="video-container">
      <video className="background-video" autoPlay muted playsInline loop preload="auto" src={startingVideo.link || videoInfo.link} type="video/mp4">
      </video>
    </div>
  )
}