

export function logout() {
    localStorage.removeItem( 'jwt' ); 

    //logout
    fetch( `${process.env.REACT_APP_BACKEND_URI}/api/user/logout`, {
        method: 'PUT'
    })
        .then( dt => {
            console.log('SUCCESS');
            return true;
        })
        .catch( (err) => console.log(err) )
}


