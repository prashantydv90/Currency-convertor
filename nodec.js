
const URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";


let input=document.querySelector("#in_put");

let dropdowns=document.querySelectorAll(".dd");

const updateExchangeRate = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data["eur"].aave);
    console.log(Object.keys(data["eur"]).length);

    for(let select of dropdowns){

    for(let key in data["eur"]){
        newoption=document.createElement("option");
        newoption.innerHTML=key.toUpperCase();
        select.append(newoption);

    }
    }

    getOutput();

    function getOutput(){
        let from_val=document.querySelector("#from").value.toLowerCase();
        
        let to_val=document.querySelector("#to").value.toLowerCase();
        
        
        let in_value=input.value;
        
        let from=data["eur"][from_val];
        let to=data["eur"][to_val];
        console.log(data["eur"][from_val]);
        console.log(data["eur"][to_val]);
        console.log(from_val);
        console.log(to_val);
        console.log(in_value);
        console.log(from);
        console.log(to);
        let result=(to/from)*in_value;
        let out_put=document.querySelector(".output");
        out_put.innerHTML=`${in_value} ${from_val.toUpperCase()} = ${result} ${to_val.toUpperCase()} `;
        console.log(`${in_value} ${from_val} = ${result} ${to_val} `);
    }
    document.querySelector(".convert").addEventListener("click",getOutput);
    
}

updateExchangeRate();



