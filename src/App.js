import axios from 'axios';
import React,{useState,useEffect} from 'react'
import './App.css';
import Cards from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'reactstrap';

function App() {

  const [details, setdetails] = useState({})
  const fetchUserDetails= async()=>{

    const response=await axios.get("https://randomuser.me/api/")
    console.log(response.data)
    setdetails(response.data.results[0])
  }
  
  useEffect(() => {

    fetchUserDetails()
  
  }, [])
  return (
 
 
 <Container fluid className="p-4 bg-primary App">
 
 <Row>
   <Col md={4} className="offset-md-4 mt-4">
   <Cards details={details}/>
   </Col>
 </Row>
 </Container>
        
    
  
  );
}

export default App;
