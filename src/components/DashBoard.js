import React,{ useEffect, useState } from 'react';
import Chart from "react-google-charts";

import styles from '../styles/Dashboard.module.scss';

export default function DashBoard() {

  const TITULO = 'Quantidade de Cadastros no 1° Semestre';
  const ANIMATION = { duration: 1000, easing: 'out', startup: true };

  const [dados, setDados] = useState([
    ['Mês', 'Quantidade'],
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 20],
    ['Maio', 80],
    ['Junho', 27]
  ])


  useEffect(() => {
      function alterarDados() {

        const dadosGrafico = dados.map(linha => {
          if (Number.isInteger(linha[1])) {
            linha[1] = Math.floor(Math.random() * 101);
          }
          return linha;
        });
        setDados(dadosGrafico);
      }

      const intervalId = setInterval(() => alterarDados(), 5000);

      return () => {
        clearInterval(intervalId);
      }

  },[dados])


    return(
      <>
       <h1>DashBoards</h1>
        <div className={styles.container}>

        <Chart
          width={'400px'}
          height={'300px'}
          chartType={'PieChart'}
          data={dados}
          options={{
            title: TITULO,

          }} />

          <Chart
          width={'400px'}
          height={'300px'}
          chartType={'PieChart'}
          data={dados}
          options={{
            title: TITULO,
            is3D: true
          }} />

          <Chart
          width={'400px'}
          height={'300px'}
          chartType={'PieChart'}
          data={dados}
          options={{
            title: TITULO,
            pieHole: 0.3
          }} />

          <Chart
          width={'400px'}
          height={'300px'}
          chartType={'BarChart'}
          data={dados}
          options={{
            title: TITULO,
            ChartArea: { width: '50%'},
            hAxis: { title: 'Quantidade' },
            vAxis: { title: 'Mês' },
            animation: ANIMATION,
          }} />

          <Chart
            width={'400px'}
            height={'400px'}
            chartType="LineChart"
            data={dados}
            options={{
                title: TITULO,
                hAxis: { title: 'Mês' },
                vAxis: { title: 'Quantidade' },
                animation: ANIMATION,
            }}/>

             <Chart
            width={'400px'}
            height={'400px'}
            chartType="AreaChart"
            data={dados}
            option={{
              title: TITULO,
              hAxis: { title: 'Mês' },
              vAxis: { title: 'Quantidade' },
              animation: ANIMATION,
            }}
            />
        </div>
        </>
    );
}