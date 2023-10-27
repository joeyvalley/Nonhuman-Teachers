export default function Home({ onLogoClick }) {
  return (
    <div>
      <div className="home">
        <div className="homeish">
          <img src="assets/beetle-worship.png" alt="NHT Logo" onClick={onLogoClick} />
        </div>
      </div >
    </div>
  );
}