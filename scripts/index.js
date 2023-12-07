const form = document.querySelector("#form1")
const mainDiv = document.querySelector("#main");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    const formData = {
        dateReference: form[0].value,
        minusOperation: form[1].checked,
        sumOperation: form[2].checked,
        months: form[3].value,
        considerUtilsDays: form[4].value
    }

    // verify the type of operation
    if (minusOperation){
        calculateDatePrev(dateReference, months, considerUtilsDays);
    }
    calculateDateAfter(dateReference, months, considerUtilsDays);
})

function calculateDatePrev(dateReference, months, considerUtilsDays){
    if (considerUtilsDays == "on"){
        //    
    }
    
}
function calculateDateAfter(dateReference, months, considerUtilsDays){
}
