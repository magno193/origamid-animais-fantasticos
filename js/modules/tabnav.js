export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabMenu.length) {
    tabContent[0].classList.add('ativo');

    const activeTab = (index) => {
      tabContent.forEach(item => item.classList.remove('ativo'));
      tabContent[index].classList.add('ativo');
    };

    tabMenu.forEach(
      (item, index) => item.addEventListener('click', () => activeTab(index))
    );
  };
};