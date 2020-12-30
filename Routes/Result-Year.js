const res_yr = (request, response) => {

    collection6.aggregate([{
        
            '$addFields': {
              'userObjectId': {
                '$toString': '$_id'
              }
            }
          }, 
          {
            '$lookup': {
                'from': 'results', 
                'localField': 'userObjectId', 
                'foreignField': 'result_year_id', 
                'as': 'student_results'
                }
          },
          {
              '$project':{
                  'student_results._id':1,
                  "course":1,
                  "year":1,
                  "batch":1,
                  "exam":1,
                  'student_results.name':1,
                  'student_results.seat_number':1,
                  'student_results.prn':1,
                  'student_results.result':1,
                  'student_results.department':1,
                }
            }
    ]).toArray((error,result)=> {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
};

module.exports = {res_yr};
