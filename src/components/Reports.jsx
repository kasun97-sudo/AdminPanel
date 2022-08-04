import Report from './Report';
import Navbar from './Navbar';
import {useState , useEffect} from 'react';
import Axios from 'axios';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';

function Reports () {

    const [reports , setReports] = useState([]);

    const getReports = async () => {
        const response = await Axios.get(
            "http://localhost:3001/api/reports",
            null
        );
        console.log(response.data);
        setReports(response.data);
    }

    useEffect(() => {
        getReports();
    }, []);


    return (
        <div>
            <Navbar /> 
            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="mx" style={{display: 'flex' , flexWrap : 'wrap' , justifyContent : 'center'}}>
            {
                reports.map(report => {
                    return <Report 
                    key={report._id} 
                    reportId={report._id}
                    title={report.title}
                    reporterId={report.reporterId}
                    reporteeId={report.reporteeId}
                    description={report.description}
                    reports={reports}
                    setReports={setReports}
                    />
                })
            }
            </Container>
            </React.Fragment> 
        </div>
    )
}

export default Reports;