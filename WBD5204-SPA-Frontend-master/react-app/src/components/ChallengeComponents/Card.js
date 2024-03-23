import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Context } from '../../helpers/Context';


const Card = (props) => {

    const { loggedIn } = useContext(Context);
    const navigate = useNavigate();

    const imgStyle = {
        height: '30px',
        width: '30px',
        backgroundColor: 'black',
        backgroundImage: `url("data:image/jpeg;base64, ${props.base64}")`,
        backgroundSize: 'cover',
        borderRadius: '50%',
        backgroundPositionY: '-4px'
    }

    return (
    <>
        <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-3">
            <div className="card">
                <div className="card-body">
                    <div className="card-body--wrap row mb-2">
                        <div className="poke-view col-5">
                            <div className="poke-view--image" dangerouslySetInnerHTML={{__html: props.svg}}>
                            </div>
                            <div className="poke-view--name">
                                <span>{props.pokemon}</span>
                            </div>
                            <div className="poke-view--reward">
                                <span>Lvl. {props.level} | +{props.reward}$</span>
                            </div>
                        </div>
                        <div className="challenge-spec col-7">
                            <h3 className="h3 card-title">{props.title}</h3>
                            <div className="challenge-spec--author">
                                <span><div className="userpic-container" style={imgStyle}/></span>
                                <span>{props.username}</span>
                            </div>
                            <p className="card-text">{(props.description.length > 88) ? `${props.description.substring(0,88)}...` : props.description}</p>
                        </div>
                    </div>

                    {
                        (props.filter === 'getMine') 
                        ? 
                        <>
                            <button className="link-btn--div btn btn-secondary me-2 delete-btn" onClick={() => {props.setModal(true); props.setDeleteData(props);}}>
                                <i className="far fa-trash-alt me-2"></i>
                                <span className="delete-span">Löschen</span>
                            </button>
                            
                            <button className="link-btn--div btn btn-tertiary edit-btn" onClick={() => {props.setEdit(props)}}>
                                <i className="far fa-edit me-2"></i>
                                <span className="edit-span">Bearbeiten</span>
                            </button>

                        </> 
                        :
                        <div className="link-btn--div btn btn-primary"  onClick={() => { 

                                if(loggedIn) { 
                                    props.setGameMode(true); props.setGameData(props); props.setTime(true); 
                                    } else {
                                        navigate('/start');
                                    }
                                }}>

                            <i className="fas fa-bolt me-2"></i>
                            <span className="challenge-cta">Challenge!</span>
                        </div>
                    }

                </div>
            </div>
        </div>
    </>
    );
}


export default Card;