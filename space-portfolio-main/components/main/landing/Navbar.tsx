import Link from 'next/link';

export function Navbar() {
  return (
    <nav>
      <div className="container">
        <Link className="logo" href="/">
          <img src="/assets/icon-full.png" alt="Ensolite" className="logo-img" />
        </Link>
        <button type="button" className="hamburger" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className="nav-links">
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/about" target="_blank" rel="noopener noreferrer">About Us</Link>
          </li>
          <li>
            <Link href="/contact" className="cta-button" target="_blank" rel="noopener noreferrer">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
