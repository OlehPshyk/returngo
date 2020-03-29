const select2Init = () => {
  // console.log("APP select2 initialization");
  $('.js-select2-int-box .js-select2').each(function () {
    const $parent = $(this).parent();
    $(this).select2({
      minimumResultsForSearch: Infinity,
      width: '100%',
      dropdownParent: $parent,
      // dropdownPosition: 'below',
      // dropdownPosition: 'above',
    });
  });
}
export default select2Init;



// defoult render dropdown into parent <body>
// $('.js-select2').select2(
//   {
//     minimumResultsForSearch: Infinity,
//     width: '100%',
//   },
// );
// render dropdown into parent element .js-select2-int-box
// $('.js-select2-int-box .js-select2').each(function () {
//   const $parent = $(this).parent();
//   $(this).select2({
//     minimumResultsForSearch: Infinity,
//     width: '100%',
//     dropdownParent: $parent,
//     // dropdownPosition: 'below',
//     // dropdownPosition: 'above',
//   });
// }); 

// render dropdown into parent element .js-select2-modal-box
// $('.js-select2-modal-box .js-select2').each( function () {});  // for future select in modal