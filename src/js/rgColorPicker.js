const rgColorPicker = () => {
  const defColorElement = document.getElementById('defTextColorPicker');
  const defColorTextElement = document.getElementById('defTextColor');
  if (defColorElement && defColorTextElement) {
    const defTextColorPickerChange = (e) => {
      defColorTextElement.value = e.target.value;
    };
    const defColorPickerChange = (e) => {
      console.log(e.target.value);
      defColorElement.value = e.target.value;
    };
    defColorElement.addEventListener('input', defTextColorPickerChange);
    defColorTextElement.addEventListener('input', defColorPickerChange);
    // defColorElement.addEventListener('change', defTextColorPickerChange);
    // defColorTextElement.addEventListener('change', defColorPickerChange);
  }
};
export default rgColorPicker;
