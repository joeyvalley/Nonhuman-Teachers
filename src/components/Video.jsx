import "../styles/style.css"

export default function Video() {

  const videos = [
    // { title: "The fungus Aspergillus niger growing fruiting bodies at 10x magnification. Video by Wim van Egmond.", link: "https://i.imgur.com/FDT2jp5.mp4" },
    // { title: "Chromataphores in squid mantle at 4x magnification. Video by Bill Shin.", link: "https://i.imgur.com/lSpFsxe.mp4" },
    // { title: "Green Stentor coeruleus and Vorticella at 25x magnification. Video by Frank Fox.", link: "https://i.imgur.com/ENiRikD.mp4" },
    // { title: "Perspiration on a human fingertip at 5 - 40x magnification. Video by Tsutomu Tomita and Shun Miyazaki.", link: "https://i.imgur.com/KY947KI.mp4" },
    // { title: "A ciliate from genus Pseudomicrothorax devours a cyanobacterial filament at 20x and 40x magnification. Video by Dr. Sally Warring.", link: "https://i.imgur.com/cTQqlEk.mp4" },
    // { title: "Formation of silver dendrites at 3x magnification. Video by Wojtek Plonka.", link: "https://i.imgur.com/xrukDYR.mp4" },
    { title: "The rotifer Limnias melicerta at 200x magnification. Video by Wim van Egmond.", link: "https://i.imgur.com/iIntJym.mp4" },
    // { title: "5-day time-lapse of rat hippocampal neurons at 20x magnification. Video by Thomas A. Zangle and Soorya Pradeep.", link: "https://i.imgur.com/FDOon9v.mp4" },
    // { title: "Polychaete worm of the Syllidae family at 20x and 40x magnification. Video by Rafael Martín-Ledo.", link: "https://i.imgur.com/R4UIzum.mp4" }
  ]
  const startingVideo = randomVideo();

  function randomVideo() {
    return videos[Math.floor(Math.random() * videos.length)]
  }

  return (
    <div className="video-container">
      <video className="background-video" autoPlay muted playsInline loop>
        <source src={startingVideo.link} type="video/mp4" />
      </video>
    </div>
  )
}
