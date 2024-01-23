// Conteúdo do arquivo JavaScript
function processText() {
    const inputText = document.getElementById('inputText').value;
    const operation = document.getElementById('encryptOrDecrypt').value;
    let result = '';

    if (operation === 'encrypt') {
        result = encryptText(inputText);
    } else if (operation === 'decrypt') {
        result = decryptText(inputText);
    }

    document.getElementById('outputText').value = result;
}

function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}
