const request=require('request')
const geocode=(address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiZWt0YTkwIiwiYSI6ImNqeHB0Z3dpNTBqbGYzY3A3NTBiMGlhdW0ifQ.-18L2_Bl64kmG3JdrceCIw"
request({url,json : true},(error,{body}={})=>{
    if(error)
    {
       return callback('Cant connect to location services',undefined)
    }else if(body.features.length==0){
       return  callback('Sorry,Cant search the given location Try another research',undefined)
    }else{
        
        callback(undefined,{
            'location' : body.features[0].place_name,
            'latitude' : body.features[0].center[1],
            'longitude': body.features[0].center[0]


        })
    }
})
}


module.exports=geocode
