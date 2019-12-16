import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, ImageHeader } from 'react-simple-card';
 
const PatientCards = () => (
    <Card className="card">
        <ImageHeader imageSrc="../../../patiente.jpg" />
        <CardHeader className="header">Jorge Rodríguez</CardHeader>
        <CardBody className="body">Cardiología</CardBody>
        <CardFooter className="cardButton"><button>Ver hoja enfermería</button></CardFooter>  {/*este boton lleva a los pacientes de ese usuario */}
    </Card>
);
 
export default PatientCards