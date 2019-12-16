import React, {Component} from "react";
import {StyledAll, StyledCard} from "../../style/Components";
import Cards from "../../components/organicComponents/Cards";
import {Carousel} from "../../style/Components"

export default function Allusers(){
    return(
        <StyledAll>
        <div className="all">
        <div className="nurses">
        <h2>Enfermeras</h2>
        <Carousel>
        <StyledCard>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        </StyledCard>
        </Carousel>
        </div>
       
        <div className="doctors">
        <h2>Doctores</h2>
        <Carousel>
        <StyledCard>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        </StyledCard>
        </Carousel>
        </div>
        
        </div>

        </StyledAll>
        
    )
}