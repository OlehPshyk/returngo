$( document ).ready(function() {
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
});    