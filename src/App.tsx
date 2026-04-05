function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">Café Aura</div>
        <nav className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#menu">Menu</a>
          <a href="#order">Order</a>
        </nav>
      </header>

      <main className="page-layout">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">High-end coffee commerce</span>
            <h1>Elevate your café with elegant online ordering and a premium brand presence.</h1>
            <p className="hero-text">
              A refined landing page built for coffee shops that need a clear transaction path, elevated visuals, and effortless customer conversion.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#order">
                Order online
              </a>
              <a className="button secondary" href="#menu">
                View menu
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <strong>4.9/5</strong>
                <span>Guest satisfaction</span>
              </div>
              <div>
                <strong>1.2k</strong>
                <span>Orders this month</span>
              </div>
              <div>
                <strong>98%</strong>
                <span>Repeat customers</span>
              </div>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-card">
              <div className="media-tag">Signature shop</div>
              <div className="media-photo" />
              <div className="media-details">
                <h2>Roast house collection</h2>
                <p>Premium espresso, barista-crafted lattes, and a welcoming atmosphere designed for every visit.</p>
              </div>
              <div className="media-footer">
                <span>Quick pickup</span>
                <span>Table booking</span>
              </div>
            </div>
          </div>
        </section>

        <section className="features" id="experience">
          <div className="feature-card">
            <h3>Instant ordering</h3>
            <p>Fast online checkout for drinks, snacks, and gift cards that customers can complete in seconds.</p>
          </div>
          <div className="feature-card">
            <h3>Experience-led design</h3>
            <p>Polished layouts and premium imagery drive trust while highlighting your café’s atmosphere.</p>
          </div>
          <div className="feature-card">
            <h3>Revenue-first flow</h3>
            <p>Order, reservation, and loyalty prompts are placed where they convert best.</p>
          </div>
        </section>

        <section className="transaction" id="order">
          <div className="transaction-copy">
            <span className="eyebrow">Transaction ready</span>
            <h2>Built to convert visitors into paying customers.</h2>
            <p>From instant pickup orders to table reservations and premium gift packs, the page is optimized for high-value customer actions.</p>
            <div className="transaction-pills">
              <span>Online checkout</span>
              <span>Gift cards</span>
              <span>Pickup & delivery</span>
            </div>
          </div>

          <div className="transaction-summary">
            <div className="summary-card">
              <p>Daily order volume</p>
              <strong>320+</strong>
            </div>
            <div className="summary-card">
              <p>Average basket</p>
              <strong>$18.40</strong>
            </div>
            <div className="summary-card highlight">
              <p>Conversion uplift</p>
              <strong>28%</strong>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
