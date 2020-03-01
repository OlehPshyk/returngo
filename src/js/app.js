/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import * as $ from 'jquery';
import Popper from 'popper.js/dist/umd/popper';
// import 'bootstrap';
import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/popover';
import 'bootstrap/js/dist/scrollspy';
import 'bootstrap/js/dist/tab';
import 'bootstrap/js/dist/toast';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/js/dist/util';


import 'select2';
import rgColorPicker from './rgColorPicker';
import rgOverviewChart from './rgOverviewChart';
import rgFileInput from './rgFileInput';
import rgReturnReasonsChart from './rgReturnReasonsChart';


document.addEventListener('DOMContentLoaded', () => {
  $('.js-select2').select2(
    {
      minimumResultsForSearch: Infinity,
    },
  );
  rgOverviewChart();
  rgColorPicker();
  rgFileInput();
  rgReturnReasonsChart();
});


// window.Popper = Popper;
if (module.hot) {
  module.hot.accept();
}
