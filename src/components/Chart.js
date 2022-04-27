import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { Chart } from 'primereact/chart';
import { useState } from 'react';
import React from 'react';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const buildData = ({ chartData }) => ({
    labels: chartData.labels,
    datasets: [
        {
            label: '',
            data: chartData.data,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(255, 255, 255, 1)',
            pointBackgroundColor: 'rgba(255, 255, 255, 1)',
            fill: 'start',
            tension: 0.4,
        },
    ],
});

const options = {
    plugins: {
        legend: {
            display: false,
        }
    },
    scales: {
        yAxes: {
            ticks: {
                color: 'rgba(255, 255, 255, 1)'
            },
            grid: {
                display: false,
                drawBorder: false,
            },
        },

        xAxes: {
            ticks: {
                color: 'rgba(255, 255, 255, 1)'
            },
            grid: {
                circular: true,
                borderColor: 'rgba(255, 255, 255, .2)',
                color: 'rgba(255, 255, 255, .2)',
                borderDash: [5, 5]
            },
        },
    },
    layout: {
        padding: {
            right: 10,
        },
    },
};

const StockChart = ({ info }) => {
    const data = buildData(info);
    const [chartData] = useState({
        labels: ['Power Bi Dataflows', 'Talend ESB', 'Java'],
        datasets: [
            {
                data: [100, 100, 50],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    });
    
    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#FFFFFF'
                }
            }
        }
    });
    
    return (
        <div className='flex justify-center w-full flex-col content-center items-center'>
            <h1 className="text-3xl mb-1 mt-40 text-white font-mono text-center">Technologies, that I learnt so far</h1>
            <h3>(You can see how my skill level accumulated)</h3>
            <div className="rounded shadow-xl overflow-hidden w-full md:flex mt-1 " style={{ maxWidth: '900px' }}>
                <div className="flex md:w-1/2 px-5 pb-4 pt-8 items-center flex-col justify-center">
                    <p>skill/time</p>
                    <Line type="line" data={data} options={options} />
                    <p className='mt-5 text-center text-sm'>JavaFX, TensorFlow, Firebase, RapidMiner Studio, Microsoft Office, Linux, Windows, Figma</p>
                </div>
                <div className="flex flex-col w-full md:w-1/2 p-10 items-center text-xl text-center">
                    <h3>Used technologies as a Junior Backedn Developer</h3>
                    <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
        </div>
    );
};

export default StockChart;