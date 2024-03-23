import React, {useState, useContext} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import BackIcon from './IconComponents/BackIcon';
import { Context } from '../helpers/Context';

const Login = (props) => {
    // const {} = props;

    const { setLoggedIn, loggedIn } = useContext( Context);
    const navigate = useNavigate();
    const [ error, setError ] = useState('');

    const [ formdata, setFormdata ] = useState( {
        username: '',
        password: ''
    } );

    async function submitHandler(e) {
        e.preventDefault();

        const formData = new FormData();

        for (const key in formdata) {
            formData.append( key, formdata[key] )
        }

        const response = await fetch( `${process.env.REACT_APP_BACKEND_URI}/api/user/login`, {
            method: 'POST',
            body: formData
        })

        const resData = await response.json();
        

        if ( resData.success ) {
            localStorage.setItem( 'jwt', 'AUTHORIZE ' + resData.jwt ); 

            setLoggedIn(true);

            navigate('/challenges');
        } else {
            
            for (const key in resData.errors) {
                setError( resData.errors[key][0]);
            }
        }

    }


    return (
        <>
            <div id="m-login" >
    
                <div className='container start-container'>
                    <div className="start-nav d-flex ">
                        <NavLink to="/start" className="back-icon-div">
                                <BackIcon className="back-icon"></BackIcon>
                        </NavLink>
                        <p className='h1'>Login</p>
                    </div>
                    
                    <form onSubmit={(e)=>submitHandler(e)}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input onChange={(e)=>setFormdata({...formdata, username: e.target.value})} value={formdata.username} type="text" className="form-control" id="username" name="username" aria-describedby="usernameHelp" placeholder="Dein Username"/>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Passwort</label>
                            <input onChange={(e)=>setFormdata({...formdata, password: e.target.value})} value={formdata.password}  type="password" className="form-control" id="password" name="password" placeholder="Passwort"/>
                        </div>

                        <small id="usernameHelp" className="form-text text-warning">{error}</small>
                        
                        <div className="btn-wrapper">
                            <button className="start-btn btn btn-primary my-3">
                                Anmelden
                            </button>
                        </div>
                    </form>
                    
                </div>
                
            </div>
        </>
        );
}

export default Login;