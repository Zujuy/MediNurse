import React from 'react';
import { Link } from 'react-router-dom';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ImageHeader
} from 'react-simple-card';

const PatientCards = props => {
  return (
    <Card className="card">
      <ImageHeader imageSrc={props.photo} />
      <CardHeader className="header">{props.name}</CardHeader>
      <CardBody className="body">{props.medical_speciality}</CardBody>
      <CardFooter className="cardButton">
        <Link style={{ textDecoration: 'none' }} to="/nursesheet"><h3>Ver hoja enfermería</h3></Link>
      </CardFooter>
    </Card>
  );
};

export default PatientCards;
