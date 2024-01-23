// Módulo de criptografia
const Criptografia = (function () {
    const criptoMap = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    function processText(text, operation) {
        try {
            const result = (operation === 'encrypt') ? encryptText(text) : decryptText(text);
            return result;
        } catch (error) {
            console.error(error.message);
            return 'Erro ao processar o texto.';
        }
    }

    function encryptText(text) {
        return text.replace(/[eioua]/g, char => criptoMap[char]);
    }

    function decryptText(text) {
        const regex = new RegExp(Object.values(criptoMap).join('|'), 'g');
        return text.replace(regex, match => Object.keys(criptoMap).find(key => criptoMap[key] === match));
    }

    return {
        processText
    };
})();

// Interface do usuário
const UI = (function () {
    function init() {
        const encryptButton = document.getElementById('encryptButton');
        encryptButton.addEventListener('click', () => processText('encrypt'));

        const decryptButton = document.getElementById('decryptButton');
        decryptButton.addEventListener('click', () => processText('decrypt'));

        const copyButton = document.getElementById('copyButton');
        copyButton.addEventListener('click', copyToClipboard);
    }

    function processText(operation) {
        const inputText = (operation === 'encrypt') ? document.getElementById('inputTextEncrypt').value : document.getElementById('inputTextDecrypt').value;
        const result = Criptografia.processText(inputText, operation);

        if (operation === 'encrypt') {
            document.getElementById('outputTextEncrypt').value = result;
        } else {
            document.getElementById('outputTextDecrypt').value = result;
        }
    }

    function copyToClipboard() {
        const outputText = (document.getElementById('inputTextEncrypt').value) ? document.getElementById('outputTextEncrypt') : document.getElementById('outputTextDecrypt');
        outputText.select();
        document.execCommand('copy');
        alert('Texto copiado para a área de transferência!');
    }

    return {
        init
    };
})();

document.addEventListener('DOMContentLoaded', function () {
    UI.init();
});
