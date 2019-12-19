import React, { Component } from 'react';
import { Line, defaults } from 'react-chartjs-2';

defaults.global.maintainAspectRatio = false

function CardiacChart (){

    const data = {
        labels: [
          '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24'
        ],
        datasets: [
          {
            label: 'Frecuencia Cardiaca',
            data: [160, 165, 170, 165, 170],
            fill: false,          
            borderColor: 'red',
            lineTension: '0',
          }
        ]
      }
      
        return (
          <div className="DataChart">
            <header className="DataChart-header">
              <h3>Frecuencia Cardiaca</h3>
            </header>
            <article className="canvas-container">
            <Line data={data}/>
            </article>
          </div>
        );
      }
    
    
    export default CardiacChart;
