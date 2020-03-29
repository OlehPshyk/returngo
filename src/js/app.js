/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
// import 'jquery';
// import * as $ from 'jquery';

// import 'Popper';
// import Popper from 'popper.js/dist/umd/popper';

// // import 'bootstrap';
// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
// import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';
// import 'bootstrap/js/dist/util';

// import 'select2';

import hmbBtn from './hmbBtn';
import select2Init from './select2Init';
import rgColorPicker from './rgColorPicker';
import rgFileInput from './rgFileInput';
import industryAddon from './industryAddon';
import industruReasonChange from './industruReasonChange';



// //  translated to <script> into html for one page only
// import rgOverviewChart from './rgOverviewChart';

// //  translated to <script> into html for one page only
// import rgReturnReasonsChart from './rgReturnReasonsChart';

// //  translated to <script> into html for one page only
// import rgWorldMapChart from './rgWorldMapChart';

document.addEventListener('DOMContentLoaded', () => { 
  hmbBtn();
  select2Init();  
  rgColorPicker();
  rgFileInput();
  industryAddon();
  industruReasonChange(); 
  // rgOverviewChart(); 
  // rgReturnReasonsChart();
  // rgWorldMapChart();
  

  // console.log('APP Selected change: TEST')
  // $('.js-select2').on('change', function(e) { 
  //   console.log('APP Selected change:', e.target )
  // }); 
});


// window.Popper = Popper;
if (module.hot) {
  module.hot.accept();
}
