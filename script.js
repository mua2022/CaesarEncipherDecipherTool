function caesarCipher(text, shift, mode) {
    if (mode === 'decrypt') shift = -shift;
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const start = char >= 'a' ? 97 : 65;
            return String.fromCharCode(((char.charCodeAt(0) - start + shift + 26) % 26) + start);
        }
        return char;
    }).join('');
}

function processText(mode) {
    const text = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('shift').value) || 0;
    const output = caesarCipher(text, shift, mode);
    document.getElementById('output').innerText = `Result: ${output}`;
}
