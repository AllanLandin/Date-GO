const form = document.querySelector("#form1")
const mainDiv = document.querySelector("#main");
const divResult = document.querySelector("#result");
const buttonReset = document.querySelector("#cleanBtn")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    const formData = {
        dateReference: form[0].value,
        minusOperation: form[1].checked,
        sumOperation: form[2].checked,
        qtDays: parseInt(form[3].value) + 1,
    }
    console.log(formData);
    // verify the type of operation
    let result = ""
    
    if (formData.minusOperation){
        result = calculateDatePrev(formData.dateReference, formData.qtDays);
    } else{
        result = calculateDateAfter(formData.dateReference, formData.qtDays);
    }
    if (result === "Invalid Date"){
        divResult.innerHTML = "Erro! Coloque uma data válida!"
        return;
    }
    console.log(result)
    divResult.innerHTML = result
})

function calculateDatePrev(dateReference, qtDays){
    let date = new Date(dateReference)
    date.setDate(date.getDate() - qtDays)
    return date.toLocaleDateString("pt-BR");
}
function calculateDateAfter(dateReference, qtDays){
    let date = new Date(dateReference)
    date.setDate(date.getDate() + qtDays)
    return date.toLocaleDateString("pt-BR");
}

buttonReset.addEventListener("click", ()=>{
    divResult.innerHTML = ""
})