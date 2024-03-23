import React, { useContext } from 'react';

import { Context } from '../helpers/Context';

import CreateChallenge from './ChallengeComponents/CreateChallenge';
import Header from './LayoutComponents/Header';

const PokeShop = () => {

    const { create, setModal } = useContext(Context);

    return (
        <>
            <div className="page-wrapper">
                <Header pageTitle="PokéShop"/>

                <main className='pokeshop-main'>
                    <div className="content-view pokeshop-view">

                        {create ? <CreateChallenge mode="create" setModal={setModal}></CreateChallenge> : <></>}

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