import React, { Component } from 'react';
import { StyledJustNurses, StyledCard, Carousel } from '../../style/Components';
import Cards from '../../components/organicComponents/Cards';

export default function AllNurses() {
  return (
    <StyledJustNurses>
      <h2>Enfermeras</h2>
      <div className="allnurses">
        <StyledCard>
          <Carousel>
            {/* solo cards de enfermeras relacionadas a esa jefa de enfermera */}
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
          </Carousel>
        </StyledCard>
      </div>
    </StyledJustNurses>
  );
}
