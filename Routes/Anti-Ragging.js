// http://localhost:8000/Anti-Ragging
const anti_ragging =  (request, response) => {
    collection2.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
}; 


module.exports = {anti_ragging};