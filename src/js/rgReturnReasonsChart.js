import ApexCharts from 'apexcharts';

const rgReturnReasonsChart = () => {
  const returnReasons = document.getElementById('return-reasons-chart');
  if (returnReasons) {
    // console.log("chart returnReasons present");
    const optionsReturnReasonsChart = {
      chart: {
        type: 'donut',
      },
      plotOptions: {
        pie: {
          customScale: 1,
          offsetX: 0,
          offsetY: 0,
          expandOnClick: true,
          dataLabels: {
            enabled: false,
            minAngleToShowLabel: 360,
          },
          donut: {
            size: '90%',
            background: 'transparent',
            // labels: {
            //   show: true,
            //   name: {
            //     show: true,
            //     fontSize: '14px',
            //     fontFamily: 'Poppins, Arial, sans-serif',
            //     fontWeight: 400,
            //     color: undefined,
            //     offsetY: -10,
            //   },
            //   value: {
            //     show: true,
            //     fontSize: '14px',
            //     fontFamily: 'Poppins, Arial, sans-serif',
            //     fontWeight: 400,
            //     color: undefined,
            //     offsetY: 16,
            //     formatter: function (val) { return val },
            //   },
            //   // total: {
            //   //   show: false,
            //   //   showAlways: false,
            //   //   label: 'Total',
            //   //   fontSize: '14px',
            //   //   fontFamily: 'Poppins, Arial, sans-serif',
            //   //   fontWeight: 400,
            //   //   color: '#373d3f',
            //   //   formatter: function (w) {
            //   //     return w.globals.seriesTotals.reduce((a, b) => {
            //   //       return a + b
            //   //     }, 0)
            //   //   },
            //   // },
            // },
          },
        },
      },
      series: [21, 36, 4, 4, 7, 11, 17],
      labels: ['Did not fit: 21%', 'Changed mind: 36%', 'Not what I expected: 4%', 'Wrong size: 4%', 'Item is damaged: 7%', 'Received wrong item: 11%', 'Other: 17%'],
      colors: ['#6EC5E8', '#557BEE', '#E16D70', '#EDC863', '#6EC5E8', '#67DF9C', '#E1E7FB'],      
    };
    const chart = new ApexCharts(returnReasons, optionsReturnReasonsChart);    
    chart.render();
  }
};
export default rgReturnReasonsChart;
