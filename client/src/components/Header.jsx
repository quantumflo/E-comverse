// src/components/Header.js
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="title">E-comverse</h1>
                <nav className="nav">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#shop" className="nav-link">Shop</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
