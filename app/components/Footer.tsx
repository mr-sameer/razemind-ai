export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid container">
        
        {/* BRAND */}
        <div>
          <div className="footer-brand">RazeMind AI</div>
          <p className="footer-text">
            AI tools for creators to grow faster without overthinking.
          </p>
        </div>

        {/* PRODUCT */}
        <div>
          <div className="footer-title">Product</div>
          <ul className="footer-links">
            <li><a href="/tools">All Tools</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        {/* TOOLS */}
        <div>
          <div className="footer-title">Tools</div>
          <ul className="footer-links">
            <li><a href="/tools/hook">Hook Generator</a></li>
            <li><a href="/tools/caption">Caption Generator</a></li>
            <li><a href="/tools/hashtag">Hashtag Generator</a></li>
            <li><a href="/tools/workflow">Workflow</a></li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <div className="footer-title">Legal</div>
          <ul className="footer-links">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} RazeMind AI. All rights reserved.
      </div>
    </footer>
  );
}