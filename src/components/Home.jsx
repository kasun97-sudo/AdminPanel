import {useContext} from 'react';
import UserContext from '../Context/UserContext';
import Navbar from './Navbar';
import Container from './Container';

function Home(){

    const {userData} = useContext(UserContext);

    return (
        <div>
            <Navbar />
            <Container />
        </div>
    )
}

export default Home;