import React, { useEffect, useState, useContext } from 'react';

import CreateChallenge from '../ChallengeComponents/CreateChallenge';
import Header from '../LayoutComponents/Header';
import PokeCard from './PokeCard';
import ScrollTopBtn from '../IconComponents/ScrollTopBtn';

import { Context } from '../../helpers/Context';

const Pokemons = () => {

    const [ pokemons, setPokemons ] = useState([]);
    const { create, edit, scrollToTop, setScrollToTop, topBtn, handleTopBtn } = useContext(Context);

    useEffect( () => {
        const token = localStorage.getItem( 'jwt' );

        // get all Pokemons
        fetch( `${process.env.REACT_APP_BACKEND_URI}/api/pokemons/getPokemons`, {
            headers: {
                'authorization': token
            }
        })
            .then( (res) => res.json())
            .then( (dt) => {
                const p = Object.values(dt.result);
                setPokemons(p);
            })
            .catch( (err) => console.log(err))
    }, [])

    useEffect ( () => {

        if (scrollToTop) {
            document.querySelector('.page-wrapper').scrollTo(0, 0);
            setScrollToTop(false);
        };

    }, [ setScrollToTop, scrollToTop ])

    return (
        <>
            <div className="page-wrapper" onScroll={(e) => handleTopBtn(e)}>
                
                <Header pageTitle="Pokémons"/>                
                <main>
                    <div className="content-view">

                        {create ? <CreateChallenge mode="create"/> : <></>}
                        
                        {(Object.keys(edit).length !== 0) ? <CreateChallenge mode="edit" values={edit}/> : <></>}

                    <div className="cards-wrapper pt-2">
                            
                            {
                                pokemons.map( ( p, key ) => {

                                    return ( 

                                        <PokeCard 
                                            key={key}
                                            pokemon={p.name}
                                            svg={p.svg}
                                            info={p.info}
                                            type={p.type}
                                            state={p.state}
                                            pokedex={p.pokedex_no}
                                        >
                                        </PokeCard>
                                )} )
                            }
                        </div>
                        
                    </div>
                    {
                        (topBtn) ?<ScrollTopBtn setScrollToTop={setScrollToTop}/> : <></>
                    }
                </main>

            </div>
        </>
    )
}

export default Pokemons;