import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import BackIcon from '../IconComponents/BackIcon';
import RegisterDropzone from './RegisterDropzone';

const Register = (props) => {
    const navigate = useNavigate();
    const [ errors, setErrors ] = useState([]);
    const [ boxStatus, setBoxStatus ] = useState(false);

    const [ formdata, setFormdata ] = useState( {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        password_repeat: '',
        image: null
    } );

    async function onSubmitHandler( e ) {
        e.preventDefault();

        const token = localStorage.getItem( 'jwt' ); 
        const formData = new FormData();

        for (const key in formdata) {
            formData.append( key, formdata[key] )
        }

        const response = await fetch( `${process.env.REACT_APP_BACKEND_URI}/api/user/register`, {
            method: 'POST',
            headers: {
                'authorization': token
            },            
            body: formData
        })

        const data = await response.json();
        

        if ( response.status === 201 ) {
            // output success message could be here
            console.log(response);

            // show challenges
            navigate('/challenges');
        } else {
            // output error message from response object

            const errorsArray = Object.values(data.errors);

            const errorsMerged = [].concat.apply([], errorsArray);
            
            if ( !boxStatus ) {
                setErrors([]);
                setErrors([...errorsMerged, 'Bitte stimme den AGB zu, bevor du das Formular abschickt.']);
            } else {
                setErrors([]);
                setErrors(errorsMerged);
            }
            
        }
    }

    return (
    <>
        <div id="m-register" >

            <div className='container start-container'>
                <div className="start-nav d-flex ">
                    <NavLink to="/start" className="back-icon-div">
                            <BackIcon className="back-icon"></BackIcon>
                    </NavLink>
                    <p className='h1'>Registrieren</p>
                </div>
                
                <form onSubmit={(e) => onSubmitHandler(e)} noValidate>
                    <div className="form-group">
                        <label htmlFor="prename">Vorname</label>
                        <input onChange={(e) => setFormdata({...formdata, firstname: e.target.value})} value={formdata.firstname} type="text" className="form-control" id="prename" name="firstname" aria-describedby="firstNameHelp" placeholder="Dein Vorname"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Nachname</label>
                        <input onChange={(e) => setFormdata({...formdata, lastname: e.target.value})} value={formdata.lastname} type="text" className="form-control" id="last-name" name="lastname" aria-describedby="lastNameHelp" placeholder="Dein Nachname"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input onChange={(e) => setFormdata({...formdata, username: e.target.value})} value={formdata.username} type="text" className="form-control" id="username" name="username" aria-describedby="usernameHelp" placeholder="Dein Username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Emailaddresse</label>
                        <input onChange={(e) => setFormdata({...formdata, email: e.target.value})} value={formdata.email} type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Deine Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Passwort</label>
                        <input onChange={(e) => setFormdata({...formdata, password: e.target.value})} value={formdata.password} type="password" className="form-control" id="password" name="password" placeholder="Passwort"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password-repeat">Passwort wiederholen</label>
                        <input onChange={(e) => setFormdata({...formdata, password_repeat: e.target.value})} value={formdata.password_repeat} type="password" className="form-control" id="password-repeat" name="password_repeat" placeholder="Passwort"/>
                    </div>

                    <RegisterDropzone formdata={formdata} setFormdata={setFormdata}></RegisterDropzone>
                    
                    <div className="form-group form-check">
                        <input onChange={() => (!boxStatus) ? setBoxStatus(true) : setBoxStatus(false)} type="checkbox" className="form-check-input" id="agb"/>
                        <label className="form-check-label" htmlFor="agb">Ich habe die AGB gelesen und stimme ihnen zu.</label>
                    </div>

                    {
                        
                        ( errors ) ?
                        
                        errors.map( (error, idx) => { 
                            return (
                                <>
                                    <small className="form-text text-warning" key={idx}>{error}</small>
                                    <br key={idx/100}/>
                                </>
                            )
                        })

                        :
                        <></>

                    }
                    
                    <div className="btn-wrapper">
                        <button className="start-btn btn btn-primary my-3">
                            Registrieren
                        </button>
                    </div>
                </form>
                
            </div>
            
        </div>
    </>
    );
}

export default Register;