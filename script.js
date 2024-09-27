/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const input = document.querySelector('#input');
const items = document.querySelector('.items');

input.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const itemText = input.value;
        const newItem = document.createElement('div');
        newItem.addEventListener('click', function() {
            newItem.classList.toggle('done');
        })
        newItem.textContent = itemText;
        if (itemText != '') {
            items.append(newItem);
        }
        input.value = '';

    }
})