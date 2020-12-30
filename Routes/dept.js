

const dept = (request, response) => {
    collection1.find({"department":request.params.dept}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
};

module.exports  = {dept};