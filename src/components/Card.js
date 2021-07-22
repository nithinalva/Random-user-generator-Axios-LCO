import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardBody, CardText, CardTitle, Col,Row} from 'reactstrap'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {CgGenderMale,CgGenderFemale} from 'react-icons/cg'
import {FaPhoneSquareAlt} from 'react-icons/fa'

const Cards = ({details}) => {
    return (
       <Card>
           <CardBody className="text-center">
        <img height="150" width="150" src={details.picture?.large} alt="" className="rounded-circle img-thumbnail border-danger" />
        

        <CardTitle>
           <h5><span>{details.name?.title} {details.name?.first} {details.name?.last}</span></h5>
           
        </CardTitle>
            <CardText>
                <Row className="mt-2">

                    <Col>
                 
                    <p><span>{details.gender==="male"?<CgGenderMale/>:<CgGenderFemale/>}{details.gender}</span></p>
                    </Col>
                   
           
                    <Col>
                    <p><span><HiOutlineLocationMarker/>{details.location?.city},{details.location?.country}</span></p>
                    </Col>

                    <Col>
                    <p><span>{details.dob?.age} years old</span></p>
                    </Col>
                 
                </Row>
                <p><strong>{details.email}
                    </strong></p>
                    <p ><span className="p-2"><FaPhoneSquareAlt/></span>{details.phone}</p>
            </CardText>
           </CardBody>
       </Card>
    )
}

export default Cards
