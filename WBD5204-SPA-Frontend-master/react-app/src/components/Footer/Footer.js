import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    // const {} = props;
    return (
    <>
        <div className="footer-wrapper">
            <footer className='container d-flex align-items-center flex-column'>
                <ul className="d-flex flex-column column align-items-center justify-content-between">
                <li>
                    <Link to='/'>Datenschutz</Link>
                </li>
                <li>
                    <Link to='/'>Impressum</Link>
                </li>
                <li>
                    <Link to='/'>Contact</Link>
                </li>
                </ul>
                <div className="copyright">Copyright &copy; 2022</div>
            </footer>
        </div>
    </>
    );
}

export default Footer;