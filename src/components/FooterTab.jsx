import { Link, useLocation } from 'react-router-dom';

function Footer() {
    const currentPage = useLocation().pathname;

    return (
        <Link className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
            <h1> Footer </h1>

        </Link>
    );
}

export default Footer;