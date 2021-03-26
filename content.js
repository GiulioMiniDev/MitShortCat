//https://www.youtube.com/watch?v=O269ctk5b5k
function copyText(htmlElement){

    if(!htmlElement){
        return;
    }

    let elementText = htmlElement.id;

    let inputElement = document.createElement('input');
    inputElement.setAttribute('value',elementText);
    document.body.appendChild(inputElement);

    inputElement.select();

    document.execCommand('copy');

    document.body.removeChild(inputElement);

}   //storia
    document.querySelector('#stoita_4bin').onclick =
    function (){
        copyText(document.querySelector('#stoita_4bin'));
    }
    //matematica
    document.querySelector('#matematica_4bi').onclick =
    function (){
        copyText(document.querySelector('#matematica_4bi'));
    }
    //informatica
    document.querySelector('#informatica_4bin').onclick =
    function (){
        copyText(document.querySelector('#informatica_4bin'));
    }
    //inglese
    document.querySelector('#inglese_4bin').onclick =
    function (){
        copyText(document.querySelector('#inglese_4bin'));
    }
    //religione
    document.querySelector('#irc_4bi').onclick =
    function (){
        copyText(document.querySelector('#irc_4bi'));
    }
    //Scienze Motorie
    document.querySelector('#scienzemotorie4bin').onclick =
    function (){
        copyText(document.querySelector('#scienzemotorie4bin'));
    }
    //sistemi
    document.querySelector('#Sistemi_4bin').onclick =
    function (){
        copyText(document.querySelector('#Sistemi_4bin'));
    }
    //telecomunicazioni
    document.querySelector('#telecomunicazioni_4bin').onclick =
    function (){
        copyText(document.querySelector('#telecomunicazioni_4bin'));
    }
    //tecnologia
    document.querySelector('#fw7xyostp2').onclick =
    function (){
        copyText(document.querySelector('#fw7xyostp2'));
    }