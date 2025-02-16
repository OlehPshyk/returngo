const industryAddon = () => {
  const industryAddBtn = document.querySelector('[data-add="industry"]');  
  if (industryAddBtn) {
    const maxindustryQuantity = 3;
    let industryQuantity = 0;
    const industryInput = document.querySelector('[data-input="industry"]');
    const industryAddedList = document.querySelector('[data-list="industry"]');    
    const industryAddedItems = document.querySelectorAll('li.added-item');
    if (industryAddedItems) industryQuantity = [...industryAddedItems].length;

    const addIndustry = () => {
      const addedItems = [...industryAddedList.querySelectorAll('input[type=hidden]')].map(item => item.value);
      console.log(addedItems);
      if (!addedItems.includes(industryInput.value) && industryInput.value.trim() !== '' && industryQuantity < maxindustryQuantity) {
        const industryLi = document.createElement('li');
        industryLi.className = 'added-item';
        industryLi.innerHTML = `<span class="added-item-t">${industryInput.value}</span>
          <input type="hidden" id="industry-${industryQuantity + 1}" value = ${industryInput.value}>
          <button class="item-close-btn">
            <svg class="close-icon" width="9" height="9" viewBox="0 0 14 14" fill="none">
              <path d="M13.4435 11.7739C13.913 12.2435 13.913 12.9739 13.4435 13.4435C13.2087 13.6783 12.9217 13.7826 12.6087 13.7826C12.2956 13.7826 12.0087 13.6783 11.7739 13.4435L7 8.66956L2.22609 13.4435C1.9913 13.6783 1.70435 13.7826 1.3913 13.7826C1.07826 13.7826 0.791302 13.6783 0.55652 13.4435C0.0869544 12.9739 0.0869544 12.2435 0.55652 11.7739L5.33043 7L0.55652 2.22608C0.0869544 1.75652 0.0869544 1.02608 0.55652 0.55652C1.02608 0.0869544 1.75652 0.0869544 2.22609 0.55652L7 5.33043L11.7739 0.55652C12.2435 0.0869544 12.9739 0.0869544 13.4435 0.55652C13.913 1.02608 13.913 1.75652 13.4435 2.22608L8.66956 7L13.4435 11.7739Z" fill="#FFFFFF"></path>
            </svg>
          </button>`;
        // industryInput.value = '';//uset only for clear input; for select not need clear value
        industryAddedList.append(industryLi);
        industryQuantity += 1;
      }
    };
    const removeIndustry = (e) => {
      const closeitem = e.target.closest('button')
      if (!closeitem) return;
      closeitem.closest('li.added-item').remove();
      industryQuantity -= 1;
    };
    industryAddBtn.addEventListener('click', addIndustry);
    industryAddedList.addEventListener('click', removeIndustry);
  }
};
export default industryAddon;
