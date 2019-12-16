import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, ImageHeader } from 'react-simple-card';
 
const Cards = () => (
    <Card className="card">
        <ImageHeader imageSrc="../../../uniformes-de-enfermera-indumentaria-para-el-cuidado-de-la-salud.jpg" />
        <CardHeader>Mariel Blanco</CardHeader>
        <CardBody>Otorrinolaringologia</CardBody>
        <CardFooter>Footer</CardFooter>
    </Card>
);
 
export default Cards

