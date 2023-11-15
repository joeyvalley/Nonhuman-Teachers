import "../styles/donationform.css"

export default function DonationForm() {
  console.log("hello");
  return (
    <>
      <script src="https://donorbox.org/widget.js" paypalExpress="false"></script>
      <div className="donation-form-container">
        <iframe title="Donation Form" className="donation-form" src="https://donorbox.org/embed/nonhuman-teachers-website?default_interval=o&enable_auto_scroll=false" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" ></iframe>
      </div>
    </>
  );
}