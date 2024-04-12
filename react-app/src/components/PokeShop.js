import React, { useContext, useEffect } from 'react';

import { Context } from '../helpers/Context';

import CreateChallenge from './ChallengeComponents/CreateChallenge';
import Header from './LayoutComponents/Header';
import ErrorModal from './LayoutComponents/ErrorModal';
import BlackDropback from './LayoutComponents/BlackDropback';

const PokeShop = () => {

    const { create, setModal, error, setError } = useContext(Context);

    useEffect( () => {
        
        const token = localStorage.getItem( 'jwt' );
        
        const fetchChallenges = async () => {

            return fetch(
                `${process.env.REACT_APP_BACKEND_URI}/api/challenges/getCommunity`,
                { headers: {'authorization': token} }
            )
            .then( response => response.json() )
            .then( data => {
                if(data.errors) {
                    setError(data.errors);
                } else {
                    return; // PokéShop not implemented yet.
                }
            }) 
        }

        fetchChallenges();
        
    }, [ setError ])

    return (
        <>
            <div className="page-wrapper">
                <Header pageTitle="PokéShop"/>

                <main className='pokeshop-main'>
                    <div className="content-view pokeshop-view">

                        {create ? <CreateChallenge mode="create" setModal={setModal}></CreateChallenge> : <></>}

                        {error.jwt ? <> <ErrorModal errors={error}/><BlackDropback/> </> : <></>}

                        <div className="pokeshop-info-div">
                            <div className="pokeshop-info">
                                <i className="fas fa-wrench"></i>
                                <span>Am Shop wird gerade gearbeitet.</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default PokeShop;