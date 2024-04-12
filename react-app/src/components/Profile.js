import React, { useState, useEffect, useContext } from 'react';

import { Context } from '../helpers/Context';

import CreateChallenge from './ChallengeComponents/CreateChallenge';
import Header from './LayoutComponents/Header';
import BlackDropback from './LayoutComponents/BlackDropback';
import ErrorModal from './LayoutComponents/ErrorModal';

const Profile = () => {

    const { create, setModal, error, setError } = useContext(Context);
    const [ user, setUser ] = useState([]);
    const [ challengeNumber, setChallengeNumber ] = useState(0);

    const imgStyle = {
        width: '100%',
        height: '100%',
        backgroundImage: `url("data:image/jpeg;base64, ${user.base64}")`,
        backgroundSize: 'cover',
        borderRadius: '50%',
        backgroundPositionY: '30%',
        boxShadow: '0px 5px 10px black'
    }

    useEffect( () => {
        const token = localStorage.getItem( 'jwt' );

        const fetchUserData = async () => {

            return fetch( 
                `${process.env.REACT_APP_BACKEND_URI}/api/user/getProfile`, 
                { headers: {'authorization': token} }
                )
            .then( (response) => response.json())
            .then( (data) => {
                if (data.errors) {
                    setError(data.errors);
                } else {
                    const u = Object.values(data.result);
                    setUser(u[0]);
                }
            })
        }

        const fetchChallenges = async () => {
            fetch (
                `${process.env.REACT_APP_BACKEND_URI}/api/challenges/getMine`,
                { headers: {'authorization': token} }
            )
            .then( response => response.json() )
            .then( data => {
                if (data.errors) {
                    setError(data.errors);
                } else {
                    setChallengeNumber(data.result.length);
                }
            })
        }

        fetchUserData();
        fetchChallenges();

    }, [ setError ])

    return (
        <>
            <div className="page-wrapper">
                <Header pageTitle="Mein Profil"/>
                
                <main className='profile-main'>
                    <div className="content-view">

                        {create ? <CreateChallenge mode="create" setModal={setModal}></CreateChallenge> : <></>}

                        {error.jwt ? <> <ErrorModal errors={error}/><BlackDropback/> </> : <></>}

                        <div className="card row profile-card mt-2">
                            <div className="card-body profilecard-body col-12">

                                <div className="profilecard-left col-12 col-sm-6">
                                    <div className="profilecard-image-wrap">
                                        <div className="profilecard-image" style={imgStyle}></div>
                                    </div>
                                    <div className="profilecard-stats">
                                        <i>{challengeNumber}</i>
                                        <span>Anzahl Challenges</span>
                                    </div>
                                </div>
                                <div className="profilecard-right col-12 col-sm-6">
                                    <div className="profilecard-right-top">
                                        <div className="profilecard-label">
                                            <span className="profilecard-username">{user.username}</span>
                                        </div>
                                    </div>
                                    <div className="profilecard-right-bottom">
                                        <div className="profilecard-label">
                                            <span>Email</span>
                                            <i>{user.email}</i>
                                        </div>
                                        <div className="profilecard-label">
                                            <span>Vorname</span>
                                            <i>{user.firstname}</i>
                                        </div>
                                        <div className="profilecard-label">
                                            <span>Nachname</span>
                                            <i>{user.lastname}</i>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Profile;