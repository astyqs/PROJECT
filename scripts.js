// Генерация случайного персонажа
function generateCharacter() {
    const name = document.getElementById('name').value || 'Случайное имя';
    const gender = document.getElementById('gender').value;
    const hair = document.getElementById('hair').value || 'Случайный цвет волос';
    const eyes = document.getElementById('eyes').value || 'Случайный цвет глаз';
    const height = document.getElementById('height').value || 'Средний рост';
    const personality = document.getElementById('personality').value;
    const profession = document.getElementById('profession').value || 'Авантюрист';
    const backstory = document.getElementById('backstory').value || 'Без предыстории';

    const characterHTML = `
        <div class="character-card">
            <h3>${name}</h3>
            <p><strong>Пол:</strong> ${gender}</p>
            <p><strong>Цвет волос:</strong> ${hair}</p>
            <p><strong>Цвет глаз:</strong> ${eyes}</p>
            <p><strong>Рост:</strong> ${height}</p>
            <p><strong>Личность:</strong> ${personality}</p>
            <p><strong>Профессия:</strong> ${profession}</p>
            <p><strong>Предыстория:</strong> ${backstory}</p>
        </div>
    `;

    document.getElementById('generatedCharacter').innerHTML = characterHTML;
}

// Сохранение персонажа (добавление в галерею)
function saveCharacter() {
    const character = document.getElementById('generatedCharacter').innerHTML;
    if (character) {
        const gallery = document.getElementById('characterGallery');
        gallery.innerHTML += character;
    } else {
        alert('Сначала создайте персонажа!');
    }
}
