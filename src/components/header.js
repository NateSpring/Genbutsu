import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../ITD Logo.svg';

const Header = () => {
    return (
        <div>
            <Link to="/" className="devisit">
                <h1 className="app-title">Genbutsu</h1>
            </Link>
        </div>
    )
}
export default Header;