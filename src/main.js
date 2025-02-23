const url = 'https://api.kanye.rest';
const div = document.querySelector('#quote');
const share = document.querySelector('#share');
const errorDiv = document.querySelector('#go')
async function chamarApi(){
    try{

        const resp = await fetch(url);
        if(resp.status === 200){// resp = 200 significa ok
            const obj = await resp.json() // converte o resultado da operacao para um json
            div.innerHTML = '';
            let quote = obj.quote;

            div.innerHTML = quote;
            share.setAttribute("frase", quote);
            errorDiv.innerHTML = '';
        }
    }catch(error){
        errorDiv.innerHTML = '';
        let errorSpan = document.createElement('span');
        let errorSpanText = document.createTextNode('An error occurred while using the API.');
        errorSpan.appendChild(errorSpanText);
        errorDiv.appendChild(errorSpan);
    }
}

share.onclick = () =>{
    let shareQuote = share.getAttribute("frase");
    if(shareQuote){
        const urlWpp = `https://wa.me/?text=${encodeURIComponent(shareQuote + " - Kanye West")}`;
        window.open(urlWpp, "_blank");
    }else{
        
        errorDiv.innerHTML = '';
        let errorSpan = document.createElement('span');
        let errorSpanText = document.createTextNode('The phrase needs to be generated before sharing.');
        errorSpan.appendChild(errorSpanText);
        errorDiv.appendChild(errorSpan);
    }
   
}

