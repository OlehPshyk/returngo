const hmbBtn = () => {
  const menuBtn = document.getElementById('menu-btn');
  const sidebar = document.getElementById('sidebar');    
  const togglemenu = () => {
    menuBtn.classList.toggle('active');
    sidebar.classList.toggle('active');
  };
  if (menuBtn) {
    menuBtn.addEventListener('click', togglemenu);
  }
};

export default hmbBtn;
