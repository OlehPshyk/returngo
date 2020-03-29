// import ApexCharts from 'apexcharts';

// const rgReturnReasonsChart = () => {
//   const returnReasons = document.getElementById('return-reasons-chart');
//   if (returnReasons) {
//     const optionsReturnReasonsChart = {
//       chart: {
//         type: 'donut',
//       },
//       plotOptions: {
//         pie: {
//           customScale: 1,          
//           offsetX: 0,
//           offsetY: 0,
//           expandOnClick: true,
//           dataLabels: {
//             enabled: false,
//             minAngleToShowLabel: 360,
//           },
//           donut: {
//             size: '90%',
//             background: 'transparent',
//           },
//         },
//       },
//       series: [21, 36, 4, 4, 7, 11, 17],
//       labels: ['Did not fit: 21%', 'Changed mind: 36%', 'Not what I expected: 4%', 'Wrong size: 4%', 'Item is damaged: 7%', 'Received wrong item: 11%', 'Other: 17%'],
//       colors: ['#6EC5E8', '#557BEE', '#E16D70', '#EDC863', '#6EC5E8', '#67DF9C', '#E1E7FB'],
//       legend: {
//         show: true,
//         showForSingleSeries: false,
//         showForNullSeries: true,
//         showForZeroSeries: true,
//         position: 'right',
//         horizontalAlign: 'left',
//         floating: false,
//         fontSize: '14px',
//         fontFamily: 'Poppins',
//         fontWeight: 400,
//         formatter: undefined,
//         inverseOrder: false,
//         width: undefined,
//         height: undefined,
//         tooltipHoverFormatter: undefined,
//         offsetX: 0,
//         offsetY: 0,
//         labels: {
//           colors: '#50649C',
//           useSeriesColors: false,
//         },
//         markers: {
//           width: 12,
//           height: 12,
//           strokeWidth: 0,
//           strokeColor: '#fff',
//           fillColors: undefined,
//           radius: 12,
//           customHTML: undefined,
//           onClick: undefined,
//           offsetX: 0,
//           offsetY: 0,
//         },
//         itemMargin: {
//           horizontal: 3,
//           vertical: 1,
//         },
//         onItemClick: {
//           toggleDataSeries: true,
//         },
//         onItemHover: {
//           highlightDataSeries: true,
//         },
//       },
//       responsive: [
//         {
//           breakpoint: 575,
//           options: {
//             plotOptions: {
//               pie: {
//                 donut: {
//                   size: '60%',
//                 },
//               },
//             },
//             legend: {
//               itemMargin: {
//                 horizontal: 2,
//                 vertical: 0,
//               },
//               position: 'bottom',
//               horizontalAlign: 'center',
//               fontSize: '10px',
//             },
//           },
//         },
//         {
//           breakpoint: 1199,
//           options: {
//             legend: {
//               itemMargin: {
//                 horizontal: 8,
//                 vertical: 3,
//               },
//               position: 'right',
//               horizontalAlign: 'left',
//             },
//           },
//         },
//         {
//           breakpoint: 1359,
//           options: {
//             plotOptions: {
//               pie: {
//                 donut: {
//                   size: '80%',
//                 },
//               },
//             },
//             legend: {
//               position: 'bottom',
//               horizontalAlign: 'center',
//               itemMargin: {
//                 horizontal: 2,
//                 vertical: 0,
//               },
//             },
//           },
//         },
//       ],
//     };
//     const chart = new ApexCharts(returnReasons, optionsReturnReasonsChart);
//     chart.render();
//   }
// };
// export default rgReturnReasonsChart;
