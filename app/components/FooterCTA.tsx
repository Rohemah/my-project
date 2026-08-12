import "./FooterCTA.css";

export default function FooterCTA() {
  return (
    <section className="footerCTA"  data-aos="fade-up">

  <div className="footerCTA-left">

    <div className="cta-top">
      <span>BOOST YOUR CAREER</span>
      <div className="cta-line"></div>
    </div>

    <h2>
      Advance your knowledge,
      <br />
      achieve greater opportunities
    </h2>

    <button className="cta-btn">
      Contact now
      <span>→</span>
    </button>

  </div>

  <div className="footerCTA-right">
    <img
      src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68d36e1ef7e7d18265801ff9_461bbddae587805361cc0e11ef717658_koursio-cta-one-image-p-800.webp"
      alt=""
    />
  </div>

</section>
  );
}