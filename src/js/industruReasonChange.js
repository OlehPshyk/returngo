const industruReasonChange = () => {
  const reasonChangeForm = document.querySelector('[data-form="reason"]');
  if (reasonChangeForm) {    
    const changeReasonBtns = document.querySelectorAll(
      '[data-change="reason"]'
    );

    const changeReason = (e) => {
      const inputElement = e.target
        .closest('.input-group')
        .querySelector('[data-input="reason"]');
      if (inputElement) {
        inputElement.removeAttribute('readonly');
        inputElement.value = `reason ${inputElement.dataset.reason}`;
        inputElement.focus();
      }
    };
    if (changeReasonBtns) {
      [...changeReasonBtns].map(item => item.addEventListener('click', changeReason));
    }
  }
};
export default industruReasonChange;
