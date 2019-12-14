import React from "react";
import {StyledHome} from "../style/Components";
import Carousel from "../components/homeComponents/Carousel";


export default function Home (){
    return(
            <StyledHome>
            <div className="container">
            <Carousel/>
            <h2></h2>
            </div>
            
            </StyledHome>
        )
    }

