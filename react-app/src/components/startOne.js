import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import MewtoIcon from './IconComponents/MewtoIcon';
import PokeballIcon from './IconComponents/PokeballIcon';
import ProfEichIcon from './IconComponents/ProfEichIcon';

const StartOne = () => {
    // const {} = props;

    return (
    <>
        <div id="m-start-one" >
            <div className='container start-container'>
                <p className='h1'>Let's get started</p>

                <div className="usp-wrapper">
                <div className="usp-row row">
                    <div className="usp-icon col-4 col-sm-3 col-md-2">
                        <MewtoIcon style={ { height: 88 } } />
                    </div>
                    <div className="usp-text col">
                        <h2 className='usp-headline'>Test your Knowledge.</h2>
                        <p className='usp-paragraph'>Je mehr Challenges du gewinnst, desto mehr Pokémon kannst du dir leisten.</p>
                    </div>
                </div>

                <div className="usp-row row">
                    <div className="usp-icon col-4 col-sm-3 col-md-2">
                        <PokeballIcon style={ { height: 88 } }></PokeballIcon>
                    </div>
                    <div className="usp-text col">
                        <h2 className='usp-headline'>Gotta catch ’em all!</h2>
                        <p className='usp-paragraph'>Sammle die kultigen Pocket Monster aus Japan.</p>
                    </div>
                </div>

                <div className="usp-row row">
                    <div className="usp-icon col-4 col-sm-3 col-md-2">
                    <ProfEichIcon style={ { height: 88 } }></ProfEichIcon>
                    </div>
                    <div className="usp-text col">
                        <h2 className='usp-headline'>Share your PokeDex.</h2>
                        <p className='usp-paragraph'>Zeige deinen Freunden stolz deine Pokémon.</p>
                    </div>
                </div>
                </div>

                <div className="btn-wrapper">
                <NavLink to="/start">
                    <button className="start-btn btn btn-primary">
                        Los geht's!
                    </button>
                </NavLink>
            </div>
            </div>
            
        </div>
    </>
    ); 
}

export default StartOne;