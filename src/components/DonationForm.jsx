import "../styles/donationform.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Video from "./Video";

export default function DonationForm() {
  return (
    <>
      {/* <Navbar currentPage="support" /> */}
      <script src="https://donorbox.org/widget.js" paypalExpress="false"></script>
      <div className="donation-form-container">
        <iframe title="Donation Form" className="donation-form" src="https://donorbox.org/embed/nonhuman-teachers-website?default_interval=o&enable_auto_scroll=false" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" ></iframe>
      </div>
      {/* <Footer /> */}
      <Video />
    </>
  );
}