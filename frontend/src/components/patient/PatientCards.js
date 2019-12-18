import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, ImageHeader } from 'react-simple-card';
import { Link } from 'react-router-dom';
 
const PatientCards = () => (
    <Card className="card">
        <ImageHeader imageSrc="../../../patiente.jpg" />
        <CardHeader className="header">Jorge Rodríguez</CardHeader>
        <CardBody className="body">Cardiología</CardBody>
        <CardFooter className="cardButton"><Link style={{ textDecoration: 'none'}} to="/nursesheet"><p>Ver hoja enfermería</p></Link></CardFooter>  {/*este boton lleva a los pacientes de ese usuario */}
    </Card>
);

export default PatientCards


