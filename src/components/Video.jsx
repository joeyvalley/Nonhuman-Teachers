export default function Video() {

  const videos = [
    // { title: "The fungus Aspergillus niger growing fruiting bodies at 10x magnification. Video by Wim van Egmond.", link: "https://i.imgur.com/FDT2jp5.mp4" },
    // { title: "Chromataphores in squid mantle at 4x magnification. Video by Bill Shin.", link: "https://i.imgur.com/lSpFsxe.mp4" },
    // { title: "Green Stentor coeruleus and Vorticella at 25x magnification. Video by Frank Fox.", link: "https://i.imgur.com/ENiRikD.mp4" },
    // { title: "Perspiration on a human fingertip at 5 - 40x magnification. Video by Tsutomu Tomita and Shun Miyazaki.", link: "https://i.imgur.com/KY947KI.mp4" },
    // { title: "A ciliate from genus Pseudomicrothorax devours a cyanobacterial filament at 20x and 40x magnification. Video by Dr. Sally Warring.", link: "https://i.imgur.com/cTQqlEk.mp4" },
    // { title: "The rotifer Limnias melicerta at 200x magnification. Video by Wim van Egmond.", link: "https://i.imgur.com/iIntJym.mp4" },
    // { title: "Polychaete worm of the Syllidae family at 20x and 40x magnification. Video by Rafael Martín-Ledo.", link: "https://i.imgur.com/R4UIzum.mp4" },
    { title: "Lightning strike on the coast of Montenegro", link: "https://i.imgur.com/h8KFmE9.mp4" },
    { title: "Dancing bug", link: "https://i.imgur.com/MZX1rNr.mp4" },
    { title: "Trampoline foxes", link: "https://i.imgur.com/qTJLuco.mp4" },
    { title: "Relaxed frog", link: "https://i.imgur.com/1qIC6BV.mp4" },
    { title: "Hawkmoth", link: "https://i.imgur.com/NudotTQ.mp4" },
    { title: "Friendly deer", link: "https://i.imgur.com/vJ5PXiR.mp4" },
    { title: "Jumping fish", link: "https://i.imgur.com/w89cJtl.mp4" },
    { title: "mini horse", link: "https://i.imgur.com/oXV1dQ1.mp4" },
    { title: "opossums", link: "https://i.imgur.com/QtoenRl.mp4" },
    { title: "cracking geode", link: "https://i.imgur.com/LO3T7QN.mp4" },
    { title: "swimming crab", link: "https://res.cloudinary.com/dnld1cqvy/video/upload/v1698254341/NHT%20Videos/swimming-crab_ancpbc.mp4" },
    { title: "snail", link: "https://res.cloudinary.com/dnld1cqvy/video/upload/v1698254336/NHT%20Videos/snail_qonnht.mp4" },
    { title: "manowar", link: "https://res.cloudinary.com/dnld1cqvy/video/upload/v1698254335/NHT%20Videos/manowar_hswpl1.mp4" },
    { title: "sunset", link: "https://res.cloudinary.com/dnld1cqvy/video/upload/v1698254332/NHT%20Videos/sunset_wxpkgf.mp4" },
    { title: "husky", link: "https://res.cloudinary.com/dnld1cqvy/video/upload/v1698254326/NHT%20Videos/husky_eerne8.mp4" },
    { title: "high voltage", link: "https://res.cloudinary.com/dnld1cqvy/video/upload/v1698254324/NHT%20Videos/high-voltage_sj4day.mp4" },
    { title: "chips crab", link: "https://res.cloudinary.com/dnld1cqvy/video/upload/v1698254319/NHT%20Videos/chips-crab_rcpnzz.mp4" }
  ]
  const startingVideo = randomVideo();

  function randomVideo() {
    return videos[Math.floor(Math.random() * videos.length)]
  }

  return (
    <div className="video-container">
      <video className="background-video" autoPlay muted playsInline loop preload="auto" src={startingVideo.link} type="video/mp4">
      </video>
    </div>
  )
}