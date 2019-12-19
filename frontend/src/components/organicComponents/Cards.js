import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, ImageHeader } from 'react-simple-card';
import { Link } from 'react-router-dom';

const Cards = () => (
    <Card className="card">
        <ImageHeader imageSrc="../../../uniformes-de-enfermera-indumentaria-para-el-cuidado-de-la-salud.jpg" />
        <CardHeader className="header">Mariel Blanco</CardHeader>
        <CardBody className="body">Otorrinolaringologia</CardBody> 
    </Card>
);
 
export default Cards

