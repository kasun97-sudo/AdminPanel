import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from './Card';
import Sales from '../Images/sales.jpg';
import Users from '../Images/users.png';
import Reports from '../Images/reports.png';
import Auction from '../Images/auctions.jpg';
import Chart from './Chart';
import Donut from './Donut';
import Axios from 'axios';
import {useState} from 'react';

export default function SimpleContainer() {

  const [details , setDetails] = useState({});
  const [sales , setSales] = useState([]);

  const getDetails = async () => {
    const response1 = await Axios.get(
      "http://localhost:3001/api/auth/getdetails",
      null
    );
    setDetails(response1.data);
    const response2 = await Axios.get(
      "http://localhost:3001/api/sales/",
      null
    );
    console.log(response2.data.sales);
    setSales(response2.data.sales);
    const reponse3 = await Axios.get(
      ""
    )
  }

  React.useEffect(() => {
    getDetails();

  },[]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="mx" style={{display: 'flex' , flexWrap : 'wrap' , justifyContent : 'center'}}>
        <Card 
        title="SALES" 
        image={Sales}
        number={details.sales}
        />
        <Card 
        title="USERS"
        image={Users}
        number={details.users}
        />
        <Card 
        title='REPORTS'
        image={Reports}
        number={details.reports}
        />
        <Card 
        title='AUCTIONS'
        image={Auction}
        number='15'
        />
      </Container>
      <Container maxWidth="mx" style={{display: 'flex' , flexWrap : 'wrap' , justifyContent : 'center' , marginTop : 50}}>
        <div style={{margin : 20 , border : '1px solid' , alignItems : 'center' , justifyContent : 'center' , display : 'flex' , flexDirection : 'column' , borderRadius : 10}}>
          <h2>Sales Againts Month</h2>
          {
            sales ? <Chart sales={sales}/> : <div></div>
          }
        </div>
        <div style={{margin : 20 ,border : '1px solid' , alignItems : 'center' , justifyContent : 'center' , display : 'flex' , flexDirection : 'column'  , borderRadius : 10}}>
        <h2>User Types</h2>
        <Donut />
        </div>
      </Container>
    </React.Fragment>
  );
}
