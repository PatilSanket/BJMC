// http://localhost:8000/academic-activities
const academic_activities =  (request, response) => {
    collection10.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
}; 


module.exports = {academic_activities};