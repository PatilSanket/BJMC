// http://localhost:8000/awards-achievements
const awards_achievements =  (request, response) => {
    collection11.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
}; 


module.exports = {awards_achievements};