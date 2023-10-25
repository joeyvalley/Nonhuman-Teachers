import Newsletter from "../components/Newsletter";
import { useNavigate } from "react-router-dom";

export default function Home() {

  // Handle donate click and navigation.
  const navigation = useNavigate();

  function handleDonate() {
    navigation('/donate');;
  }

  return (
    <div>
      <div className="home">
        <div className="homeish">
          <img src="assets/beetle-worship.png" alt="NHT Logo" />
        </div>
      </div >
    </div>
  );
}