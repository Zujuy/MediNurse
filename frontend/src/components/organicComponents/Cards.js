import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, ImageHeader } from 'react-simple-card';
 
const Cards = () => (
    <Card className="card">
        <ImageHeader imageSrc="../../../uniformes-de-enfermera-indumentaria-para-el-cuidado-de-la-salud.jpg" />
        <CardHeader className="header">Mariel Blanco</CardHeader>
        <CardBody className="body">Otorrinolaringologia</CardBody>
        <CardFooter className="cardButton"><button>Ver pacientes</button></CardFooter>
    </Card>
);
 
export default Cards

