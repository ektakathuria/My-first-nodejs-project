


const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const  msgone=document.querySelector('#msg1')
 const msgtwo=document.querySelector('#msg2')
 msgone.textContent='Loading..'

weatherform.addEventListener('submit',(e)=>
{e.preventDefault()
    const ans=search.value
            
    msgone.textContent='Loading..'
    msgtwo.textContent=''
    if(ans.length==0)
   {
       msgone.textContent="Please provide the location dear"
   }
    else{

    fetch('/weather?address='+ans).then((response)=>{
        response.json().then((data)=>{
            if(data.error)
            {
                msgone.textContent=data.error
            }
            else
   { msgone.textContent=data.location
    msgtwo.textContent="Weather for the day-"+data.forecast.weather+".Currently the trmperature is--"+data.forecast.temperature+".Chances of rain are -"+data.forecast.rain
   }
    
        })
    
    })
}})