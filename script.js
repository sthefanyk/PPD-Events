const keyboardLayout = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M',
    '!', '@', '#', '$', '%', '&', '*', '(', ')', '-'
];

const keyboardElement = document.getElementById('keyboard');
const inputElement = document.getElementById('input');
const wordListElement = document.getElementById('wordList');

let savedWords = [];

keyboardLayout.forEach(letter => {
    const button = document.createElement('button');
    button.textContent = letter;
    button.addEventListener('click', () => addToInput(letter));
    keyboardElement.appendChild(button);
});

function addToInput(letter) {
    inputElement.value += letter;
}

function deleteLastLetter() {
    const currentInput = inputElement.value;
    inputElement.value = currentInput.slice(0, -1);
}

function saveWord() {
    const word = inputElement.value;
    if (word.trim() !== '') {
        savedWords.push(word);
        updateWordList();
        inputElement.value = '';
    }
}

function updateWordList() {
    const wordListHTML = savedWords.map((word, index) => `
        <p>
        <span>${word}</span>
        <i class="fas fa-trash-alt" onclick="deleteWord(${index})"></i>
        </p>`
    ).join('');
    wordListElement.innerHTML = '<strong>Salvos:</strong><br>' + wordListHTML;
}

function deleteWord(index) {
    savedWords.splice(index, 1);
    updateWordList();
}
  