

const res_files = (request, response) => {
    collection9.find({"path":request.params.path}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
};

module.exports  = {res_files};