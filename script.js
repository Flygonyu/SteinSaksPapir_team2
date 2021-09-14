const app = document.getElementById('app');

//model
const options = ['stein','saks','papir'];
let playerChoice='';
let randomCC ='';
let tekst ='';
let result ='';
let skjult = 'skjult';
const bilder = ['alex-gruber-KVsFiYXy0BE-unsplash.jpg', 'andrej-lisakov-fGZ2x8wFxC0-unsplash.jpg', 'jerome-Ru-id6AmO6A-unsplash.jpg']
let disabled = '';

//view
show();
function show(){
    if (result == 2 ){
        tekst = "Uavgjort! ಠ_ಠ";
    }
    if (result == 3 ){
        tekst = "Du vant! ( ͡° ͜ʖ ͡°)";
    }
    if (result == 1 ){
        tekst = "Du tapte (ง'̀-'́)ง";
    }
    
    let html =`
    <h1>Hva velger du?</h1>
    <br>
    <main>
    <button ${disabled} class='stein' onclick='velg("stein")'>Stein</button>
    <button ${disabled} class='saks' onclick='velg("saks")'>Saks</button>
    <button ${disabled} class='papir' onclick='velg("papir")'>Papir</button> 
    </main>
    <br> <button id="reset" class="${skjult}" onclick="reset()"> Prøv igjen? </button>
<div class='vs ${skjult}'>
    <div class='bilde ${playerChoice}'>Du valgte ${playerChoice}</div> 
    VS
    <div class="bilde ${randomCC}">Datamaskinen valgte ${randomCC}</div>
    </div>

    <br><div id="result">${tekst}</div>
    

    `;
    
    app.innerHTML = html;
    
}



//controller

    
function velg(x){
    playerChoice = x;
    skjult = '';
    
    randomCC = options[Math.floor(Math.random() * options.length)];
    
    
    if (playerChoice == randomCC) {
        result = 2;
    } 
    if (playerChoice == 'stein' && randomCC == 'saks') {
        result = 3;
    }
    if (playerChoice == 'saks' && randomCC == 'papir') {
        result = 3;
    }
    if (playerChoice == 'papir' && randomCC == 'stein') {
        result = 3;
    }
    if (playerChoice == 'stein' && randomCC == 'papir') {
        result = 1;
    }
    if (playerChoice == 'saks' && randomCC == 'stein') {
        result = 1;
    }
    if (playerChoice == 'papir' && randomCC == 'saks') {
        result = 1;
    }
    disabled = 'disabled';
    show();
    // 1=win 2=tie 3=tape
}

function reset(){
    skjult = 'skjult';
    result = '';
    tekst = '';
    disabled = '';

    show();
}
//stein =1, saks =2 papir =3 


