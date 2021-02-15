const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
    apiKey: process.env.ApiKey,
    apiSecret: process.env.ApiSecret
})

module.exports = function sendSms(from, to, code){
    let message = `le code identifiant du nouveau né(e) est ${code}. Conservez-le en toute securité.`
    vonage.message.message(from, to, message, (err, responseData)=>{
        if(err) throw err;
        else console.log(responseData); 
    })
}