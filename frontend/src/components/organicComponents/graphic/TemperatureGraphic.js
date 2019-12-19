import React, { Component } from 'react';
import { Line, defaults } from 'react-chartjs-2';

defaults.global.maintainAspectRatio = false

function TemperatureChart (){

    const data = {
        labels: [
          '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24'
        ],
        datasets: [
          {
            label: 'Temperatura',
            data: [36, 36.5, 37, 37.5, 38, 39],
            fill: false,       
            borderColor: '#0F75BC', 
            lineTension: '0',
          }
        ]
      }

        return (
          <div className="DataChart">
            <header className="DataChart-header">
              <h3>Temperatura</h3>
            </header>
            <article className="canvas-container">
            <Line data={data}/>
            </article>
          </div>
        );
      }
    
    
    export default TemperatureChart;
