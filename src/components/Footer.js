function Footer() {
    return (
        <footer>
          <section className="footer-section">
            <div className="footer-panel">
                <img className='footer-logo' src={require('../assets/ll_logo_monochrome.png')} alt='Little Lemon' />
                <div>
                    <h5>Doormat Navigation</h5>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="/booking">Reservation</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Contact</h5>
                    <ul>
                        <li>556 Address str., Ostin, QA 75423</li>
                        <li>Phone: +1.23456789</li>
                        <li>Email: email@littlelemon.com</li>
                    </ul>
                </div>
                <div>
                    <h5>Social Media</h5>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>
                </div>
            </div>
          </section>
        </footer>
    );
  }
  
  export default Footer;