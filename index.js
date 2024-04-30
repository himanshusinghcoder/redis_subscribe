const express = require('express');
const redisClient = require('./redis_config');

const app = express()

const subscriber = redisClient.duplicate()

subscriber.connect();
const data =  subscriber.subscribe('test', (message) => {
    console.log(message); // 'message'
})



app.listen(9090, () => {
    console.log("app listening on port 9090");
})