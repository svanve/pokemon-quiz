
export function logout() {
    localStorage.removeItem( 'jwt' ); 

    fetch( `${process.env.REACT_APP_BACKEND_URI}/api/user/logout`, {
        method: 'PUT'
    })
        .then( dt => {
            return true;
        })
        .catch( (err) => console.log(err) )
}


