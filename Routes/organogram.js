const organogram =  (request, response) => {
    collection8.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
}; 


module.exports = {organogram};