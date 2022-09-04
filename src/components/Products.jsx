import Navbar from './Navbar';
import Axios from 'axios';
import {useEffect , useState} from 'react';
import Product from './Product';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import TextField from '@mui/material/TextField';

function Products() {

    const [products , setProducts] = useState([]);
    const [searchTerm , setSearchTerm] = useState('');

    const getPosts = async () => {
        const response = await Axios.get(
            "http://localhost:3001/api/posts",
            null
        );
        console.log(response.data);
        setProducts(response.data);
    }

    useEffect(() => {
        getPosts();
    } , [])

    return (
        <div>
            <Navbar />
            <React.Fragment>
            <CssBaseline />
            <div style={{width : "100%" , display : 'flex' , justifyContent : 'right' , padding : 40}}>
            {/* <TextField id="standard-basic" label="Search By Name" variant="standard" /> */}
            <h3 style={{marginRight : 15}}>Search By Name</h3>
            <TextField id="outlined-basic" label="Search" variant="outlined" onChange={event => setSearchTerm(event.target.value)}/>
            </div>
            <Container maxWidth="mx" style={{display: 'flex' , flexWrap : 'wrap' , justifyContent : 'center'}}>
                {products.filter((val) => {
                    if(searchTerm == ""){
                        return val;
                    } else if(val.author.firstname.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                        return val;
                    }
                }).map(product =>{
                    return <Product key={product._id} product={product} products={products} setProducts={setProducts} image={product.image}/>
                })}
            </Container>
            </React.Fragment>
        </div>
    )
}


export default Products;