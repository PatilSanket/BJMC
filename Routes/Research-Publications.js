const Research_Publications =  (request, response) => {
    collection7.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
};

module.exports = { Research_Publications };