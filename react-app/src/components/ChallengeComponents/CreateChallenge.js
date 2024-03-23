import React, {useEffect, useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import { Context } from '../../helpers/Context';

const CreateChallenge = ({mode, setModal, values}) => {

    const { setScrollToTop } = useContext( Context );

    const [ questions, setQuestions ] = useState([]);
    const [ pokemons, setPokemons ] = useState([]);    
    
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ pokemon_id, setPokemon_id ] = useState(1);
    const [ question_id, setQuestion_id ] = useState(1);
    const navigate = useNavigate();

    const data = {
        title: title,
        description: description,
        pokemon_id: pokemon_id,
        question_id: question_id
    }


    useEffect( () => {
        // put headerbar back in place to prevent overlay from showing white background at its top (scroll 0%)
        const cWrapper = document.querySelector('.page-wrapper');
        cWrapper.style.scrollBehavior = 'unset'; 
        cWrapper.scrollTo(0, 0);
        cWrapper.style.scrollBehavior = 'smooth';
        
        const token = localStorage.getItem( 'jwt' ); 
        
        // get all Questions
        fetch( `${process.env.REACT_APP_BACKEND_URI}/api/questions/getQuestions`, {
            headers: {
                'authorization': token
            }
        })
        .then( (res) => res.json())
        .then( (dt) => {
            const q = Object.values(dt.result);
            setQuestions(q);
        })
        .catch( (err) => console.log(err))
        
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
    
    
    useEffect( () => {
        // getting and setting values of the clicked challenge in order to let user edit them
        if ( mode === 'edit' ) {

            console.log(setScrollToTop);
            setScrollToTop(true);

            if ( pokemons !== undefined && questions !== undefined ) {
                
                const foundP = pokemons.find( el => el.name === values.pokemon );
                if ( foundP !== undefined ) {    
                    setPokemon_id(foundP.id);
                }

                const foundQ = questions.find( el => el.content === values.question );
                if ( foundQ !== undefined ) {
                    setQuestion_id(foundQ.id);
                }
            }
            
            setTitle(values.title)
            setDescription(values.description)
        }
    }, [ pokemons, questions ] )

    
    function handleSubmit( e ) {
        e.preventDefault();

        
        const token = localStorage.getItem( 'jwt' );
        const formData = new FormData();
        
        
        for (const key in data) {
            formData.append( key, data[key] )
        }

        fetch(`${process.env.REACT_APP_BACKEND_URI}/api/challenges/write`, {
            method: 'POST',
            headers: {
                'authorization': token
            },
            body: formData
        })
            .then( res => res.json())
            .then( (dt) => { 
                
            } )
            .catch( err => {
                const errorsArray = Object.values(err);

                const errorsMerged = [].concat.apply([], errorsArray);

                console.log(errorsMerged);
            })        
    }


    function handleEdit(e) {
        e.preventDefault();
        


        const token = localStorage.getItem( 'jwt' );
        const formData = new FormData();

        for (const key in data) {
            formData.append( key, data[key] )
        }

        fetch( `${process.env.REACT_APP_BACKEND_URI}/api/challenges/update/${values.cid}`, {
                method: 'PUT',
                headers: {
                    'authorization': token,
                },
                body: formData
            }
        )
        .then( (res) => res.json() )
        .then( () => setModal(false))
        .catch( (err) => console.log(err))
    }
    

    return (
    <>
        <div id="create-offset-layer">
            <div id="create-form-wrapper">
                <form id="create-form" noValidate onSubmit={(e) => {
                        if (mode === 'create') {
                            handleSubmit(e);
                        } else if (mode === 'edit') {
                            handleEdit(e);
                        }
                    }}>
                    <div className="form-group create-form-group">
                        <label htmlFor="challenge-title-ip">Titel</label>
                        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" name="title" id="challenge-title-ip" className='form-control' placeholder='Mein Beispieltitel'/>
                    </div>

                    <div className="form-group create-form-group">
                        <label htmlFor="challenge-description-ip">Beschreibung</label>
                        <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" name="description" id="challenge-description-ip" className='form-control' placeholder='Mein Beispieltext'/>
                    </div>

                    <div className="form-group create-form-group">
                        <label htmlFor="challenge-pokemon-ip">Pokémon</label>
                        <select onChange={(e) => setPokemon_id(e.target.value)} value={pokemon_id} type="text" name="pokemon_id" id="challenge-pokemon-ip" className='form-select' aria-label="Default select example">
                        <option defaultValue disabled>Welches Pokémon soll herausgefordert werden?</option>
                            {pokemons.map( ( pokemon, index ) => {
                                return <option value={pokemon.id} key={index} title={pokemon.name} onClick={(e) => setQuestion_id(pokemon.id)}>{pokemon.name}</option>;
                            })}
                        </select>
                    </div>

                    <div className="form-group create-form-group">
                        <label htmlFor="challenge-question-ip">Frage deiner Challenge</label>
                        <select onChange={(e) => setQuestion_id(e.target.value)} value={question_id} type="text" name="question_id" id="challenge-question-ip" className='form-select' aria-label="Default select example">
                            <option defaultValue disabled className="text-muted">Wähle deine Frage</option>
                            {questions.map( ( question, index ) => {
                                return <option value={question.id} key={index} title={question.content} onClick={(e) => setQuestion_id(question.id)}>{question.content}</option>
                            })}
                        </select> 
                    </div>

                    <div className="btn-wrapper">
                        {
                            (mode === "create") ?
                            <button className="start-btn btn btn-primary my-3">
                                Challenge erstellen!
                            </button> :
                            <button className="start-btn btn btn-primary my-3">
                                Challenge überschreiben
                            </button>
                        }
                    </div>
                </form>
            </div>
        </div>
    </>
    );
}

export default CreateChallenge;