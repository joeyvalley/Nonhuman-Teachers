import "../styles/style.css";
import Video from "../components/Video";


export default function Home() {

  return (
    <>
      <div className="home">
        <div className="homeish">

          <p>Nonhuman Teachers is a registered 501(c)(3) non-profit organization based between Los Angeles and New York.</p>
          <p>We aim to promote new forms of ecological storytelling at a time when the relationship between humans and nature is under enormous pressure.</p>
          <p>For more information, please email us at <a href="mailto:info@nonhumanteachers.org">info@nonhumanteachers.org</a></p>
          <p>To support our efforts, please consider <a href="/donate">making a donation</a>.</p>
        </div>
      </div >
      <Video />
    </>
  );
}
