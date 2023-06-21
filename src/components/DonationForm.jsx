import "../styles/donationform.css"

export default function DonationForm() {
  return (
    <>
      <script src="https://donorbox.org/widget.js" paypalExpress="false"></script>
      <div className="donation-container">
        <iframe className="donation-form" title="Donate" src="https://donorbox.org/embed/nonhuman-teachers-website" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" ></iframe>
      </div>
    </>
  );
}