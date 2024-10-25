import { Link } from 'react-router-dom';
import Navbar from './UI/navbar';

export default function Nav() {
    return (
        <Navbar
        links={[
            <Link key={1} className="nav-link text-light" to="/">
                Home
            </Link>,
            <Link key={2} className="nav-light text-light" to="/about">
                About Me
            </Link>,
            <Link key={3} className="nav-light text-light" to="/portfolio">
                Portfolio
            </Link>,
            <Link key={4} className="nav-light text-light" to="/resume">
                Resume
            </Link>,
            <Link key={5} className="nav-light text-light" to="/contact">
                Contact
            </Link>,
        ]}
        />
    );
}