import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";

import Menubar from './Menubar';
import PlusIcon from '../IconComponents/PlusIcon';

import { Context } from '../../helpers/Context';

const Header = ({pageTitle}) => {

    const { create, setCreate, edit, setEdit, setLoggedIn, logout } = useContext(Context);
    const navigate = useNavigate();

    return (
    <>
        <header className="header">
            
            <div className="headerbar">
                <h1>{pageTitle}</h1>
                    {
                        ( !create && Object.keys(edit).length === 0 ) ? 
                            <>
                                <div className="header-button--wrapper">
                                    <div className="header-button" onClick={() => {setCreate(true); document.querySelector('body').style.overflowY = 'hidden';}}>
                                        <PlusIcon />
                                    </div>
                                    <div className="header-button header-button--create" onClick={() => {
                                            try {
                                                logout();
                                                setLoggedIn(false);
                                                navigate('/start');
                                            } catch (error) {
                                                console.error('Etwas beim Logout ging schief.');
                                            }
                                    }}>
                                        <i className="fas fa-sign-out-alt" title="Logout"></i>
                                    </div>
                                </div>
                            </> : 
                            <>
                                <div className="header-button" onClick={() => {setCreate(false); setEdit({}); document.querySelector('body').style.overflowY = 'hidden';}}>
                                    <span className='fas fa-times button-close'></span>
                                </div>
                            </>
                    }
            </div>

            <Menubar></Menubar>
            
        </header>
    </>
    );
}

export default Header;
