const MainTabs = class MainTabs {
    constructor(){}
    openTabs() {
        document.addEventListener('DOMContentLoaded', function () {
            const tabTitles = document.querySelectorAll('.main_tabs__tit');
          
            tabTitles.forEach((title) => {
              title.addEventListener('click', () => {
                // Проверяем, есть ли у текущего заголовка класс .isActive
                const isActive = title.classList.contains('isActive');
          
                // Убираем класс .isActive у всех заголовков
                tabTitles.forEach((t) => t.classList.remove('isActive'));
          
                // Скрываем все содержимое вкладок
                const tabContents = document.querySelectorAll('.main_tabs__content');
                tabContents.forEach((content) => (content.style.display = 'none'));
          
                // Если у текущего заголовка не было класса .isActive, добавляем его
                if (!isActive) {
                  title.classList.add('isActive');
                  
                  // Отображаем соответствующее содержимое текущей вкладки
                  const content = title.nextElementSibling;
                  content.style.display = 'block';
                }
              });
            });
        });
    }
    init() {
        this.openTabs();
    }
}

export default MainTabs;