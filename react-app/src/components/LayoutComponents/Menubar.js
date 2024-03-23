import React from 'react';
import { NavLink } from 'react-router-dom';

const Menubar = (props) => {
    // const {} = props;
    return (
    <>
        <div className="menubar">
            <NavLink to='/challenges' className="menu-option">
                <div className="menu-option--icon">
                    <i className='fas fa-bolt'></i>
                </div>
                <span className="menu-option--label">Challenges</span>
            </NavLink>
            <NavLink to='/pokemons' className="menu-option">
                <div className="menu-option--icon">
                    <i className='fas fa-dragon'></i>
                </div>
                <span className="menu-option--label">Pokémons</span>
            </NavLink>
            <NavLink to='/pokeshop' className="menu-option">
                <div className="menu-option--icon">
                    <i className='fas fa-store'></i>
                </div>
                <span className="menu-option--label">PokéShop</span>
            </NavLink>
            <NavLink to='/profile' className="menu-option">
                <div className="menu-option--icon">
                    <i className="fas fa-user"></i>
                </div>
                <span className="menu-option--label">Mein Profil</span>
            </NavLink>
        </div>
    </>
    );
}

export default Menubar;