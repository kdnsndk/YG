
const request=require('request-promise')
const cheerio=require('cheerio')
let listval=[]
let listsg=[]
let n=0
let n2=4
let ts=document.getElementById("data").value;
const URL=`https://www.loteriasbr.com/site/home/?search=${ts}`
//?search=${ts}
async function acesso(){
  const response=await request(URL)
  let valor=cheerio.load(response) 
  let dados=valor('span[class=pull-right]').text()
  let liv=listval.push(dados)
  let s=listval[0]
  let format=s.replace(/[Gr.]/g, '')
  let con=format.split(" ").filter(value => value != "").join("")
  
  for(var i=0; i<105; i++){
  
    
    let sg=con.substring(n,n2)
    
    n=n+4
    n2=n2+4

    //console.log(sg);
  }
  
  
  
  
  


   /*for(i=0; i<format.length; i++){
     let ind=format.[i]
     
     console.log(ind)
   }*/


   //console.log(format);
   

   




}
//acesso()