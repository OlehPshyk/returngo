import ApexCharts from 'apexcharts';

const rgOverviewChart = () => {
  const returnsOverview = document.getElementById('returns-overview-chart');
  if (returnsOverview) {
    console.log("chart present");
    const optionsOverviewChart = {
      series: [
        {
          name: 'Returns rescued',
          type: 'column',
          data: [70, 45, 45, 55, 62, 60, 45, 65, 70, 75, 45, 60],
        },
        {
          name: 'Total returns requests',
          type: 'column',
          data: [50, 50, 90, 95, 85, 90, 110, 90, 85, 105, 100, 80],
        },
      ],
      chart: {
        height: 380,
        width: '100%',
        type: 'bar',
        redrawOnParentResize: true,
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
        toolbar: {
          show: false,
          // tools: {
          //   download: true,
          //   selection: true,
          //   zoom: true,
          //   zoomin: true,
          //   zoomout: true,
          //   pan: true,
          //   reset: true,
          // },
          autoSelected: 'zoom',
        },
      },
      colors: ['#557BEE', '#E1E7FB'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: 15,
          // endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 3,
        colors: ['transparent'],
      },
      // title: {
      //   text: 'Returns Overview',
      //   align: 'left',
      //   margin: 5,
      //   offsetX: 0,
      //   offsetY: 0,
      //   floating: false,
      //   style: {
      //     fontSize: '15px',
      //     fontWeight: 500,
      //     fontFamily: 'Poppins',
      //     color: '#50649C',
      //   },
      // },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        floating: false,
        fontSize: '12px',
        fontFamily: 'Poppins',
        fontWeight: 500,
        labels: {
          colors: '#A5ABC3',
        },
        markers: {
          width: 10,
          height: 10,
          radius: 3,
        },
        itemMargin: {
          horizontal: 20,
          vertical: 12,
        },
        onItemClick: {
          toggleDataSeries: true,
        },
        onItemHover: {
          highlightDataSeries: true,
        },
      },
      xaxis: {
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          trim: true,
          style: {
            colors: '#A5ABC3',
            fontSize: '13px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-xaxis-label',
          },
        },
      },
    };
    const chart = new ApexCharts(returnsOverview, optionsOverviewChart);    
    chart.render();    
  }
};
export default rgOverviewChart;
