import {useContext} from 'react';
import UserContext from '../Context/UserContext';
import Navbar from './Navbar';
import Container from './Container';
import { useEffect , useState } from 'react';
import Axios from 'axios';
import User from './User';

function Addadmin(){
    
    const {userData} = useContext(UserContext);
    const [list , setList] = useState([]);

    const getAdmins = async () => {
        const response1 = await Axios.get(
            "http://localhost:3001/api/admin/users",
            null
        );
        console.log(response1.data);
        setList(response1.data);
    }

    useEffect(() => {
        getAdmins();
    } ,[]);

    return (
        <div>
            <Navbar />
            
            {
                list.map(user => {
                    return <User key={user._id} name={user.userEmail}/>
                })
            }
        </div>
    )
}

export default Addadmin;