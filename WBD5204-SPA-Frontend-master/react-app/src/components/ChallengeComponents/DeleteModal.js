import React from 'react';

const DeleteModal = (props) => {

    function deleteChallenge(challenge_id) {

        const token = localStorage.getItem( 'jwt' ); 
        
        fetch( `${process.env.REACT_APP_BACKEND_URI}/api/challenges/delete/${challenge_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': token
            }
        })
            .then(res => res.json())
            .then(dt => {
                // success message would be here
            })
            .catch(err => console.log(err, 'FAIL'))
    }

    return (
        <>
            <div className="modal" tabIndex="-1" style={{display: 'block'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Challenge löschen?</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => props.setModal(false)}></button>
                    </div>
                    <div className="modal-body">
                        <p>Bist du sicher, dass du die Challenge mit dem Titel <b><span bold>{props.values.title}</span></b> löschen möchtest?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="link-btn--div btn btn-tertiary cancel-btn" data-bs-dismiss="modal" onClick={() => props.setModal(false)}>
                            <span className="edit-span">Abbrechen</span>
                        </button>
                        <button className="link-btn--div btn btn-secondary destroy-btn" onClick={() => {props.setModal(false); deleteChallenge(props.values.cid)}}>
                            <i className="far fa-trash-alt me-2"></i>
                            <span className="delete-span">Challenge unwiderruflich löschen</span>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteModal;
