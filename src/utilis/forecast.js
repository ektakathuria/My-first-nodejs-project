const request=require('request')
const forecast=(latitude,longitude,callback)=>{
const url ="https://api.darksky.net/forecast/18304f6058c66476b486482021fa9605/"+latitude+","+longitude+"?exclude=hourly&units=si"
request({
    url,json:true
},(error,{body})=>{
    if(error){
        callback("Cant conect to the location sevices",undefined)
    }else if(body.error){
        callback("please try with another coordinates",undefined)
    }else{
        callback(undefined,{
            'weather' : body.currently.summary,
            'temperature':body.currently.temperature,
           'rain': body.currently.precipProbability
        })
    }
})

}
module.exports=forecast