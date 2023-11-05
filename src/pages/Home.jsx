export default function Home({ onLogoClick }) {
  return (
    <div>
      <div className="home">
        <div className="homeish">
          <img className="home-logo" src="assets/white.png" alt="NHT Logo" onClick={onLogoClick} />
        </div>
      </div >
    </div>
  );
}