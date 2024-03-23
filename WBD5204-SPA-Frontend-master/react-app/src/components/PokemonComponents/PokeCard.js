import React from 'react';

const PokeCard = (props) => {

    return (
    <>
        <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-3">
            <div className="card">
                <div className="card-body pokecard-body">

                    <div className="h3 card-title mb-2">{props.pokemon}</div>
                    <div className="pokecard-image" dangerouslySetInnerHTML={{__html: props.svg}}></div>
                    <div className="pokecard-specs">
                        <div className="pokecard--type pb-2">
                            <span>Pokedex Nr.
                                <i className="pokecard--type--value">
                                    {` ${props.pokedex}`}
                                </i>
                            </span>
                        </div>
                        <div className="pokecard--portrait"> 
                            <i className="pokecard--portrait--value">
                                {`${props.info}`}
                            </i>
                        </div>
                        <div className="pokecard--type">
                            <span>Typ
                                <i className="pokecard--type--value">
                                    {` ${props.type}`}
                                </i>
                            </span>
                        </div>
                        <div className="pokecard--state">
                            <span>Evolutionsstufe
                                <i className="pokecard--type--value">
                                {` ${props.state}`}
                                </i> 
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
    );
}


export default PokeCard;