var request =new XMLHttpRequest();
request.open("GET","http://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();

request.onload=function(){
    var data= JSON.parse(request.response);
    console.log(data);

   

   //a. Get all the countries from Asia continent /region using Filter function
let res=data.filter((ele)=>ele.region==='Asia').map((ele)=>ele.name);
console.log(res);
//b. Get all the countries with a population of less than 2 lakhs using Filter function
let resu=data.filter((ele)=>ele.population<200000);
console.log(resu);
//c. Print the following details name, capital, flag using forEach function
data.forEach(element => {console.log(`${element.name},${element.capital},${element.flag}`);
    
});
//d. Print the total population of countries using reduce function
let pop=data.reduce((acc,cv)=>acc+cv.population,0);
console.log(pop);


//e.Print the country which uses US Dollars as currency
for(i=0;i<data.length;i++){
    if(data[i].currencies[0].code==="USD")
    {
        console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
    }
}
};