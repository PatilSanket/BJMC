// http://localhost:8000/Resources
const resources = (request, response) => {
    collection4.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
}; 

module.exports = {resources};

//{"_id":"5fdb1465e541ba1b4046778b","title":"archive 1","description":"This is the first archive","link":"link to img","type":"archive"},{"_id":"5fdb1465e541ba1b4046778c","title":"archive 2","description":"This is the second archive","link":"link to img","type":"archive"}