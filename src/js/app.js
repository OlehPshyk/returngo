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
// import rgWorldMapChart from './rgWorldMapChart';



document.addEventListener('DOMContentLoaded', () => {

  // defoult render dropdown into parent <body>
  // $('.js-select2').select2(
  //   {
  //     minimumResultsForSearch: Infinity,
  //     width: '100%',
  //   },
  // );
  // render dropdown into parent element .js-select2-int-box
  $('.js-select2-int-box .js-select2').each( function () {
    let $parent = $(this).parent();
    $(this).select2({
      minimumResultsForSearch: Infinity,
      width: '100%',
      dropdownParent: $parent,
      // dropdownPosition: 'below',
      // dropdownPosition: 'above',
    });
  });

  // render dropdown into parent element .js-select2-modal-box
  // $('.js-select2-modal-box .js-select2').each( function () {});  // for future select in modal


  rgOverviewChart();
  rgColorPicker();
  rgFileInput();
  rgReturnReasonsChart();
  // rgWorldMapChart();
});


// window.Popper = Popper;
if (module.hot) {
  module.hot.accept();
}
