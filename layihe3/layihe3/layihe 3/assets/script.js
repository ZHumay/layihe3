
const rub1 = document.querySelector(".Rub");
const usd1 = document.querySelector(".Usd");
const eur1 = document.querySelector(".Eur");
const gpb1 = document.querySelector(".Gbp");
const rub2 = document.querySelector(".Rub2");
const usd2 = document.querySelector(".Usd2");
const eur2 = document.querySelector(".Eur2");
const gpb2 = document.querySelector(".Gbp2");
const fromAmount = document.querySelector(".input1");
const toAmount = document.querySelector(".input2");
const area1 = document.querySelector(".inputarea1");
const area2 = document.querySelector(".inputarea2");

rub1.addEventListener("click",exchange)
usd1.addEventListener("click",exchange2)
eur1.addEventListener("click",exchange3)
gpb1.addEventListener("click",exchange4)
fromAmount.addEventListener('keyup',exchange)
toAmount.addEventListener('keyup',exchange)
fromAmount.addEventListener('keyup',exchange2)
toAmount.addEventListener('keyup',exchange2)
fromAmount.addEventListener('keyup',exchange3)
toAmount.addEventListener('keyup',exchange3)
fromAmount.addEventListener('keyup',exchange4)
toAmount.addEventListener('keyup',exchange4)
function changecolor1(){
    rub1.style.background="#833AE0";
    
}
function changecolor2(){
   
    usd1.style.background="#833AE0"
   
}
function changecolor3(){
   
    eur1.style.background="#833AE0"
  
}
function changecolor4(){
  
    gpb1.style.background="#833AE0"
}
// usd1.addEventListener("click", function(){
    
//     exchange.preventDefault()
//     
// }
// )



    function exchange() {
      rub1.addEventListener("click",changecolor1)
        usd2.addEventListener("click",money)
         function money() {
           usd2.style.background="#833AE0"
            let newArea = fromAmount.value
            
        
            fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=USD`)
            .then(res => res.json())
            .then(data => {toAmount.value = ((newArea*data.rates['USD']).toFixed(3))})
            
             
         }
         eur2.addEventListener("click",money2)
         
         function money2() {
            eur2.style.background="#833AE0"
            let newArea = fromAmount.value
        
            fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=EUR`)
            .then(res => res.json())
            .then(data => {toAmount.value = ((newArea*data.rates['EUR']).toFixed(3))})
            
             
         }

         gpb2.addEventListener("click",money3)
   
         function money3() {
            gpb2.style.background="#833AE0"
            let newArea = fromAmount.value
        
            fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=GBP`)
            .then(res => res.json())
            .then(data => {toAmount.value = ((newArea*data.rates['GBP']).toFixed(3))})
            
             
         }

         rub2.addEventListener("click",money4)
    
         function money4() {
            
            rub2.style.background="#833AE0"
            let newArea = fromAmount.value
        
            fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=RUB`)
            .then(res => res.json())
            .then(data => {toAmount.value = ((newArea*data.rates['RUB']).toFixed(3))})
            
             
         }
                
           
        }




        function exchange2() {
            usd1.addEventListener("click",changecolor2)
            usd2.addEventListener("click",money)
             function money() {
                usd2.style.background="#833AE0"
                let newArea = fromAmount.value
                
            
                fetch(`https://api.exchangerate.host/latest?base=USD&symbols=USD`)
                .then(res => res.json())
                .then(data => {toAmount.value = ((newArea*data.rates['USD']).toFixed(3))})
                
                 
             }
             eur2.addEventListener("click",money2)
             
             function money2() {
                eur2.style.background="#833AE0"
                let newArea = fromAmount.value
            
                fetch(`https://api.exchangerate.host/latest?base=USD&symbols=EUR`)
                .then(res => res.json())
                .then(data => {toAmount.value = ((newArea*data.rates['EUR']).toFixed(3))})
                
                 
             }
    
             gpb2.addEventListener("click",money3)
          
             function money3() {
                gpb2.style.background="#833AE0"
                let newArea = fromAmount.value
            
                fetch(`https://api.exchangerate.host/latest?base=USD&symbols=GBP`)
                .then(res => res.json())
                .then(data => {toAmount.value = ((newArea*data.rates['GBP']).toFixed(3))})
                
                 
             }
    
             rub2.addEventListener("click",money4)
      
             function money4() {
                rub2.style.background="#833AE0"
                 
                let newArea = fromAmount2.value
            
                fetch(`https://api.exchangerate.host/latest?base=USD&symbols=RUB`)
                .then(res => res.json())
                .then(data => {toAmount.value = ((newArea*data.rates['RUB']).toFixed(3))})
                
                 
             }
                    
               
            }





            function exchange3() {
               eur1.addEventListener("click",changecolor3)
                usd2.addEventListener("click",money)
                 function money() {
                    usd2.style.background="#833AE0"
                    let newArea = fromAmount.value
                    
                
                    fetch(`https://api.exchangerate.host/latest?base=EUR&symbols=USD`)
                    .then(res => res.json())
                    .then(data => {toAmount.value = ((newArea*data.rates['USD']).toFixed(3))})
                    
                     
                 }
                 eur2.addEventListener("click",money2)
               
                 function money2() {
                    eur2.style.background="#833AE0"
                    let newArea = fromAmount.value
                
                    fetch(`https://api.exchangerate.host/latest?base=EUR&symbols=EUR`)
                    .then(res => res.json())
                    .then(data => {toAmount.value = ((newArea*data.rates['EUR']).toFixed(3))})
                    
                     
                 }
        
                 gpb2.addEventListener("click",money3)
                
                 function money3() {
                    gpb2.style.background="#833AE0"
                    let newArea = fromAmount.value
                
                    fetch(`https://api.exchangerate.host/latest?base=EUR&symbols=GBP`)
                    .then(res => res.json())
                    .then(data => {toAmount.value = ((newArea*data.rates['GBP']).toFixed(3))})
                    
                     
                 }
        
                 rub2.addEventListener("click",money4)
                
                 function money4() {
                    rub2.style.background="#833AE0"
                     
                    let newArea = fromAmount.value
                
                    fetch(`https://api.exchangerate.host/latest?base=EUR&symbols=RUB`)
                    .then(res => res.json())
                    .then(data => {toAmount.value = ((newArea*data.rates['RUB']).toFixed(3))})
                    
                     
                 }
                        
                   
                }
    


                function exchange4() {
                   gpb1.addEventListener("click",changecolor4)
                    usd2.addEventListener("click",money)
                   
                     function money() {
                        usd2.style.background="#833AE0"
                        let newArea = fromAmount.value
                        
                    
                        fetch(`https://api.exchangerate.host/latest?base=GBP&symbols=USD`)
                        .then(res => res.json())
                        .then(data => {toAmount.value = ((newArea*data.rates['USD']).toFixed(3))})
                        
                         
                     }
                     eur2.addEventListener("click",money2)
                 
                     function money2() {
                        eur2.style.background="#833AE0"
                        let newArea = fromAmount.value
                    
                        fetch(`https://api.exchangerate.host/latest?base=GBP&symbols=EUR`)
                        .then(res => res.json())
                        .then(data => {toAmount.value = ((newArea*data.rates['EUR']).toFixed(3))})
                        
                         
                     }
            
                     gpb2.addEventListener("click",money3)
                  
                     function money3() {
                        gpb2.style.background="#833AE0"
                        let newArea = fromAmount.value
                    
                        fetch(`https://api.exchangerate.host/latest?base=GBP&symbols=GBP`)
                        .then(res => res.json())
                        .then(data => {toAmount.value = ((newArea*data.rates['GBP']).toFixed(3))})
                        
                         
                     }
            
                     rub2.addEventListener("click",money4)
                 
                     function money4() {
                        rub2.style.background="#833AE0"  
                         
                        let newArea = fromAmount.value
                    
                        fetch(`https://api.exchangerate.host/latest?base=GBP&symbols=RUB`)
                        .then(res => res.json())
                        .then(data => {toAmount.value = ((newArea*data.rates['RUB']).toFixed(3))})
                        
                         
                     }
                            
                       
                    }
        




            