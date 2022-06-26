
function saludar(){
    let userName = 'Oscar';
    function displayUsername(){
        return `Hola ${userName}`;
    }
    return displayUsername;
}


const varSaludar = saludar();

console.log(varSaludar);

console.log(varSaludar());