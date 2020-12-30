 // http://localhost:8000/Non-Teaching
const non_teaching =  (request, response) => {
    collection3.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
};

module.exports = { non_teaching };

//{"_id":"5fdb1145e541ba1b40467698","name":"Narendra Kashinath Wagh","post":"Office Suprintendent"},{"_id":"5fdb1145e541ba1b40467699","name":"Mrunalini Sunil Baviskar","post":"Office Suprintendent"}