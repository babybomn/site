import React from 'react';
import { Link} from 'gatsby';
import headerStyles from './header.module.scss';

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1><Link to="/" className={headerStyles.title}>
            Pongchai Hantapong
            </Link></h1>
            <nav>
                <ul className={headerStyles.navList}>
            <li><Link className={headerStyles.navItem}  to="/">Home</Link></li>
             <li><Link className={headerStyles.navItem} to="/blog">Blog</Link></li>
            <li><Link  className={headerStyles.navItem} to="/about">About</Link></li>
            <li><Link  className={headerStyles.navItem} to="/contact">Contact</Link></li>
            </ul>
            </nav>
        </header>
    )
}

export default Header;
