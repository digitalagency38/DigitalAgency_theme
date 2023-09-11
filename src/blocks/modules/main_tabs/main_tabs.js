const MainTabs = class MainTabs {
  constructor(){}
  openTabs() {
      document.addEventListener('DOMContentLoaded', function () {
          const tabTitles = document.querySelectorAll('.main_tabs__tit');
        
          tabTitles.forEach((title, index) => {
            title.addEventListener('click', () => {
              // Убираем класс .isActive у всех заголовков
              tabTitles.forEach((t) => t.classList.remove('isActive'));
        
              // Скрываем все содержимое вкладок
              const tabContents = document.querySelectorAll('.main_tabs__content');
              tabContents.forEach((content) => (content.style.display = 'none'));
        
              // Добавляем класс .isActive к текущему заголовку
              title.classList.add('isActive');
                
              // Отображаем соответствующее содержимое текущей вкладки
              const content = title.nextElementSibling;
              content.style.display = 'block';
            });
            
            // По умолчанию активируем первый заголовок и его содержимое
            if (index === 0) {
              title.classList.add('isActive');
              const content = title.nextElementSibling;
              content.style.display = 'block';
            }
          });
      });
  }
  init() {
      this.openTabs();
  }
}

export default MainTabs;
