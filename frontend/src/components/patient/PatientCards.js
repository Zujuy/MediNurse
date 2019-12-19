import React from 'react';
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
        <button>Ver hoja enfermería</button>
      </CardFooter>
      {/*este boton lleva a los pacientes de ese usuario */}
    </Card>
  );
};

export default PatientCards;
