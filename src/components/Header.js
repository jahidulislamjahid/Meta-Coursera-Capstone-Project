 import Nav from './Nav';

function Header() {
    return (
        <header>
            <a href="/" className="Banner"><img src={require('../Logo.svg').default} alt='Little Lemon' className='logo' /></a>
            <Nav />
        </header>
    );
  }

  export default Header;
