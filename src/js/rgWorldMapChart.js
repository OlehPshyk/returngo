//  // translated to <script into html for one page only>
// require('./jquery-jvectormap.min')($);
// require('./jquery-jvectormap-world-mill.js');

// const rgWorldMapChart = () => { 
//   const returnRequestLocations = document.getElementById('world-map-chart'); 
//   if (returnRequestLocations) {
//     const gdpData = {
//       GL: 1,
//       US: 2,
//       AU: 3,
//     };
//     $('#world-map-chart').vectorMap({
//       map: 'world_mill',
//       backgroundColor: '#FFFFFF',
//       zoomOnScroll: false,
//       regionsSelectable: true,
//       regionsSelectableOne: true,
//       regionStyle: {
//         initial: {
//           fill: '#E1E7FB',
//           'fill-opacity': 1,
//           stroke: 'none',
//           'stroke-width': 0,
//           'stroke-opacity': 1,
//         },
//         hover: {
//           'fill-opacity': 0.8,
//           stroke: '#6F8EF0',
//           'stroke-width': 0.5,
//           cursor: 'pointer',
//         },
//         selected: {
//           fill: 'yellow',
//         },
//         selectedHover: {},
//       },
//       regionLabelStyle: {
//         initial: {
//           'font-family': 'Poppins',
//           'font-size': '14',
//           'font-weight': '400',
//           cursor: 'default',
//           fill: '#50649C',
//         },
//         hover: {
//           cursor: 'pointer',
//         },
//       },
//       markerStyle: {
//         initial: {
//           fill: '#4d79f6',
//           stroke: '#FFFFFF',
//           'fill-opacity': 0.9,
//           'stroke-width': 7,
//           'stroke-opacity': 0.4,
//           r: 9,
//         },
//         hover: {
//           stroke: '#FFFFFF',
//           'stroke-width': 1.5,
//           cursor: 'pointer',
//         },
//         selected: {
//           fill: 'blue',
//         },
//         selectedHover: {},
//       },
//       markerLabelStyle: {
//         initial: {
//           'font-family': 'Poppins',
//           'font-size': '14',
//           'font-weight': 'bold',
//           cursor: 'default',
//           fill: 'black',
//         },
//         hover: {
//           cursor: 'pointer',
//         },
//       },
//       markers: [
//         { latLng: [41.9, 12.45], name: 'Vatican City' },
//         { latLng: [43.73, 7.41], name: 'Monaco' },
//         { latLng: [-0.52, 166.93], name: 'Nauru' },
//         { latLng: [-8.51, 179.21], name: 'Tuvalu' },
//         { latLng: [43.93, 12.46], name: 'San Marino' },
//         { latLng: [47.14, 9.52], name: 'Liechtenstein' },
//         { latLng: [7.11, 171.06], name: 'Marshall Islands' },
//         { latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
//         { latLng: [3.2, 73.22], name: 'Maldives' },
//         { latLng: [35.88, 14.5], name: 'Malta' },
//         { latLng: [12.05, -61.75], name: 'Grenada' },
//         { latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines' },
//         { latLng: [13.16, -59.55], name: 'Barbados' },
//         { latLng: [17.11, -61.85], name: 'Antigua and Barbuda' },
//         { latLng: [-4.61, 55.45], name: 'Seychelles' },
//         { latLng: [7.35, 134.46], name: 'Palau' },
//         { latLng: [42.5, 1.51], name: 'Andorra' },
//         { latLng: [14.01, -60.98], name: 'Saint Lucia' },
//         { latLng: [6.91, 158.18], name: 'Federated States of Micronesia' },
//         { latLng: [1.3, 103.8], name: 'Singapore' },
//         { latLng: [1.46, 173.03], name: 'Kiribati' },
//         { latLng: [-21.13, -175.2], name: 'Tonga' },
//         { latLng: [15.3, -61.38], name: 'Dominica' },
//         { latLng: [-20.2, 57.5], name: 'Mauritius' },
//         { latLng: [26.02, 50.55], name: 'Bahrain' },
//         { latLng: [0.33, 6.73], name: 'São Tomé and Príncipe' },
//       ],
//       series: {
//         regions: [
//           {
//             values: gdpData,
//             regionsSelectable: true,
//             scale: ['#6F8EF0', '#A6BBF8', '#C2D0FB'],
//             normalizeFunction: 'polynomial',
//           },
//         ],
//       },
//       onRegionTipShow(e, el, code) {
//         el.html(`${el.html()} (Some info - ${gdpData[code]})`);
//       },
//     });
//   }
// };


// export default rgWorldMapChart;
