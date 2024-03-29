import { React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Context } from '../../helpers/Context';
import { logout } from '../../helpers/Helpers';

const ErrorModal = (props) => {

    const { setError } = useContext(Context);
    const navigate = useNavigate();

    logout()

    return (
        <>
        <div className="modal" tabIndex="-1" style={{display: 'block'}}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header text-white">
                    <h5>Fehlermeldung</h5> 
                </div>
                <div className="modal-body">
                {props.errors.jwt
                        ?   (logout(), <p className="modal-title ">Du bist nicht angemeldet. Melde dich erneut an.</p>)
                        :   <>Ein Fehler ist aufgetreten.</>
                    } 
                </div>
                <div className="modal-footer">
                        <button className="win-state-modal--btn btn btn-primary w-100" onClick = {() => {navigate('/login'); setError({});}}>
                            <i className="fas fa-undo-alt me-2"></i>
                            <span className="">Zum Login</span>
                        </button>
                </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default ErrorModal;