import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, ImageHeader } from 'react-simple-card';
import { Link } from 'react-router-dom';
 
const Cards = () => (
    <Card className="card">
        <ImageHeader imageSrc="../../../uniformes-de-enfermera-indumentaria-para-el-cuidado-de-la-salud.jpg" />
        <CardHeader className="header">Mariel Blanco</CardHeader>
        <CardBody className="body">Otorrinolaringologia</CardBody>
        <CardFooter className="cardFooter"><Link style={{ textDecoration: 'none'}} to="/patientsasigned"><h3>Ver pacientes</h3></Link></CardFooter>  {/*este boton lleva a los pacientes de ese usuario */}
    </Card>
);
 
export default Cards

