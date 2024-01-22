const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const list = document.querySelector('#list');


myButton.addEventListener('click', (event) => {
    const newItem = document.querySelector('li');
    // element.classList - добавляет или удаляет классы для элемента
    newItem.classList.add('Item');
    newItem.textContent = nameInput.value;
    // добавить кнопку для удаления элемента списка
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'удалить';
    // удаление элемента списка
    deleteButton.addEventListener('click', () => {
        // parent.removeChild(element) - удаляет указанный элемент (element) из родителя
        list.removeChild(newItem);
    })
    // добавить кнопку в элемент списка
    //метод appendChild позволяет вставить в конец элемента (parent)
    // какого-либо другой элемент (element).
    newItem.appendChild('deleteButton');
    list.appendChild(newItem);

    // очистка поля ввода
    nameInput.value = '';
})