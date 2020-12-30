 // http://localhost:8000/Teachers
 const teachers =  (request, response) => {
    collection1.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
};

module.exports = {teachers};

//{"_id":"5fdb1019e541ba1b4046758f","name":"Dr. B.H. Baheti","designation":"Professor and HOD","location":"Department of Anatomy ,B. J. Govt. Medical College Pune","contact":"9850126982","department":"Anatomy"}