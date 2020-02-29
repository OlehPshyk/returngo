import bsCustomFileInput from 'bs-custom-file-input';


const rgFileInput = () => {
  bsCustomFileInput.init();
  // bsCustomFileInput.destroy();
  // init
  // Finds your Bootstrap custom file input and will make them dynamic.
  // Parameters
  // inputSelector
  // default value: .custom-file input[type="file"]
  // type: string
  // You can pass a custom input selector, but be sure to pass a file input selector
  // formSelector
  // default value: form
  // type: string
  // Allows you to pass a custom form selector, but be sure to pass a form selector
  // destroy
  // Removes this plugin from your Bootstrap custom file input and restore them at their first initial state
};
export default rgFileInput;
