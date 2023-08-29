import { Link, useLocation } from 'react-router-dom';

function Footer() {
    const currentPage = useLocation().pathname;

    return (
        <Link >
            <h1> Footer Example</h1>
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        </Link>
    );
}

export default Footer;