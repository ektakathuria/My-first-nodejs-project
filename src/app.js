const express=require('express')
const forecast=require('./utilis/forecast.js')
const geocode=require('./utilis/geocode.js')
const port=process.env.PORT
const app=express()
const path=require('path')
const hbs=require('hbs')
const partialpath=path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialpath)
const viewpath=path.join(__dirname,'../templates/views')
app.set('views',viewpath)
app.set('view engine','hbs')
const publicpath=path.join(__dirname,'../public')
app.get('',(req,res)=>{
res.render('index',{
    'title':"Weather",
    'name':"Ekta Kathuria"
})
})
app.get('/about',(req,res)=>
{
res.render('about',{title:"About Page",
name  : "Sarika Khatri"

})
})
app.get('/help',(req,res)=>{
res.render('help',{
    title:'Help Page',
    name: "Megha Chawla"
})
})
app.get('/weather',(req,res)=>{
    if(!req.query.address)
    {
      return   res.render('helpextra',{
            title:"Address Error",
            error: "Please Provide the loaction Dear"
        })
    }geocode(req.query.address,(error,{location,latitude,longitude}={})=>{
        
        if(error)
        {
           return  res.send({error
        })}
        forecast(latitude,longitude,(error,forecastdata)=>{
            if(error)
            {
           return    res.send(error)
            }res.send({
                location,
                forecast:forecastdata,
                Address:req.query.address
            })
        })
    })
   
})
app.get('/help/*',(req,res)=>{
    res.render('helpextra',{
        title:'404 Help',
        error:"help Page not found",
        name:"Latika Sardana"
    })
})
app.get('*',(req,res)=>{
    res.render('helpextra',{
        title:'404',
        error:"404 error",
        name:"Latika Sardana"
    })
})
app.listen(3300,()=>{
    

})
