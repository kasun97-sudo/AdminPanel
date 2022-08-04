import * as React from 'react';
import Axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Carrot from '../Images/carrot.jpg';

function Product(props){

    const removePost = async () => {
        props.setProducts(props.products.filter(product => product._id !== props.product._id));
        const response = await Axios.post(
            `http://localhost:3001/api/posts/deletepost/${props.product._id}`,
            null
        );
        console.log(response.data);
    }

    return (
        <div style={{margin : 20}}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={Carrot}
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Name : {props.product.author.firstname}&nbsp;{props.product.author.lastname} <br/>
                        Wholeseller Price : {props.product.price.wholeseller}<br/>
                        Localseller Price : {props.product.price.localseller}<br />
                        Customer Price : {props.product.price.customer}<br/>
                        Quantity : {props.product.quantity}&nbsp;&nbsp;Type : {props.product.type}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="medium" color="primary" onClick={removePost}>
                    Remove Post
                    </Button>
                </CardActions>
                </Card>
        </div>
    )
}

export default Product;