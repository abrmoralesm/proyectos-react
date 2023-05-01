import React from 'react';
function Home() {
    const {user} = useAuth()
    console.log(user);
    return( <div>Homekkk</div>)
}

export default Home;