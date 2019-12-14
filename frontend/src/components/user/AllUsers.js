import React, {Component} from "react";
import {StyledAll} from "../../style/Components";

export default function Allusers(){
    return(
        <StyledAll>
        <div className="all">
        <row>
        <div className="nurses">
        <h2>Enfermeras</h2>
        </div>
        </row>

        <row>
        <div className="doctors">
        <h2>Doctores</h2>
        </div>
        </row>

        </div>

        </StyledAll>
        
    )
}