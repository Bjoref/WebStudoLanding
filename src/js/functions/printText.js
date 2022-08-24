export function printText(el, text){  //Функция автоматического написания текста
    let textVariable = text
    console.log(1)
    let letterTimeout = 20
    let i = 1
    
    let print__fn = () =>{
        if(i <= textVariable.length){
            el.innerHTML = textVariable.substr(0, i);
            setTimeout(printText, letterTimeout);
        }
        i++;
    }
    print__fn() // init
};
    