const result = document.getElementById("bmiFinal");
const stat = document.getElementById("overweight");

function calculate(){
    const kg = (document.getElementById("kilogram").value);
    var cm = (document.getElementById("centimeter").value);

    if((kg === "" )|| (cm === "")){ alert("Enter Both Weight and Height"); return; }
    console.log(kg,cm);
    cm = cm/100;

    let r = kg/(cm*cm);
    r = r.toFixed(1);
    result.innerHTML = r;
    if(r>25.0){
        stat.innerHTML = "Overweight";
    }
    else if(r>18.5){
        stat.innerHTML = "Normal";
    }
    else{
        stat.innerHTML = "Underweight";
    }
}