import "../../styles/style.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"

export default function PlantOrphansPage() {

  return (
    <>

      <div className="main">
        <Navbar currentPage="about" />
        <div className="section" id="calendar">
          <div className="copy">
            <h1>Plant Orphans</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe corporis corrupti doloremque! Suscipit optio architecto libero repellat. Corrupti impedit, cum rem hic maxime commodi est necessitatibus, reprehenderit iste aperiam cumque.</p>
          </div>
        </div>
        <Footer></Footer>
      </div >
    </>
  );
}
