import React, { Component } from 'react';
import { Line, defaults } from 'react-chartjs-2';

defaults.global.maintainAspectRatio = false

function BreathChart (){

    const data = {
        labels: [
          '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24'
        ],
        datasets: [
          {
            label: 'Frecuencia Respiratoria',
            data: [50, 63.5, 70, 68, 60, 65],
            fill: false,       
            borderColor: '#09D9DC', 
            lineTension: '0',
          }
        ]
      }

        return (
          <div className="DataChart">
            <header className="DataChart-header">
              <h3>Frecuencia Respiratoria</h3>
            </header>
            <article className="canvas-container">
            <Line data={data}/>
            </article>
          </div>
        );
      }
    
    
    export default BreathChart;
