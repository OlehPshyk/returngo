const toggleVisibility = () => {
  const toggleVisIcon = document.querySelectorAll('[data-togglevisibility]');
  

  const changeVisibility = (e) => {    
    const visibilityGroup = e.target.closest('.input-visibility-group');
    const visibilityGroupInput = e.target.closest('.input-visibility-group').querySelector('input');    
    visibilityGroup.classList.toggle('visibility');    
    visibilityGroupInput.type = `${visibilityGroupInput.type==="password" ? "text" : "password"}`;
  };

  if(toggleVisIcon){
    [...toggleVisIcon].map(item => item.addEventListener('click', changeVisibility));
  }
};

export default toggleVisibility;
