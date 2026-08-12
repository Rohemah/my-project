import "./Footer.css";


export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-div">
        
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-brand">
          <h2>Vistario</h2>

          <p>
            Vistario empowers learners with
            flexible courses, expert guidance,
            and affordable education for
            lifelong growth
          </p>
        </div>


        {/* Column 2 */}
        <div className="footer-column">
          <h3>Main pages</h3>

          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Courses</a>
        </div>


        {/* Column 3 */}
        <div className="footer-column">
          <h3>Popular courses</h3>

          <a href="#">Business negotiation</a>
          <a href="#">Content and language</a>
          <a href="#">Web design and creative</a>
          <a href="#">Web development</a>
        </div>


        {/* Column 4 */}
        <div className="footer-column">
          <h3>Quick links</h3>

          <a href="#">Career</a>
          <a href="#">Instructor</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#">Pricing</a>
        </div>


        {/* Column 5 */}
        <div className="footer-column">
          <h3>Social Links</h3>

          <a href="#">Facebook</a>
          <a href="#">Linkedin</a>
          <a href="#">X</a>
        </div>


      </div>
      
      {/* Bottom Footer */}

      <div className="footer-bottom">

        <p>
          © 2026 Vistario. Powered by Webflow
        </p>


        <div className="bottom-links">

          <a href="#">Style guide</a>
          <span></span>

          <a href="#">License</a>
          <span></span>

          <a href="#">Changelog</a>

        </div>

      </div>
        </div>





    </footer>
  );
}