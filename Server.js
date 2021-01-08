const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const teachers = require('./Routes/Teachers');
const dept = require("./Routes/dept")
const anti_ragging = require('./Routes/Anti-Ragging');
const non_teaching = require('./Routes/Non-Teaching');
const resources = require('./Routes/Resources');
const results = require('./Routes/Results');
const res_id = require("./Routes/Result-ID");
const res_yr = require("./Routes/Result-Year");
const research_publications = require('./Routes/Research-Publications');
const organogram = require('./Routes/organogram');
const files = require('./Routes/Files');
const academic_activities = require('./Routes/Academic-activities');
const awards_achievements = require('./Routes/Awards-achievements');
const url = require("./DBConfig");

const CONNECTION_URL = url;
const DATABASE_NAME = "hospital_db";

var app = Express();
var cors = require('cors')


app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

var database;

app.listen(8000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection1 = database.collection("teaching_staff");
        collection2 = database.collection("anti_ragging_comittee");
        collection3 = database.collection("nonteaching_staff");
        collection4 = database.collection("resources");
        collection5 = database.collection("results");
        collection6 = database.collection("result_year");
        collection7 = database.collection("research_publications");
        collection8 = database.collection("organogram");
        collection9 = database.collection("file_links");
        collection10 = database.collection("academic_activities");
        collection11 = database.collection("awards_achievements");
        
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });


    // http://localhost:8000/teachers
    app.get("/teachers", teachers.teachers);

    // http://localhost:8000/teachers/Anatomy
    app.get("/teachers/:dept", dept.dept);
    
    // http://localhost:8000/anti-ragging
    app.get("/anti-ragging", anti_ragging.anti_ragging);

    // http://localhost:8000/non-teaching
    app.get("/non-teaching", non_teaching.non_teaching);

     // http://localhost:8000/Resources
     app.get("/Resources", resources.resources);
   
    // http://localhost:8000/results
    app.get("/results", results.results);

    // http://localhost:8000/results/course
    app.get("/results/:course", results.res_course);

   // http://localhost:8000/resultsbyid/Seat_No
    app.get("/resultsbyid/:seat_number", res_id.res_id);
    
    // http://localhost:8000/resultsbycourse/course
    app.get("/resultsbycourse/:seat_number", res_id.res_course );

    //http://localhost:8000/results_year/
    app.get("/results_year/", res_yr.res_yr);
    
    //http://localhost:8000/research_publications/
    app.get("/research_Publications/", research_publications.Research_Publications);
    
    //http://localhost:8000/organogram/
    app.get("/organogram/", organogram.organogram);

    // http://localhost:8000/files/path
    app.get("/files/:path", files.res_files);
    
    // http://localhost:8000/academic-activities
    app.get("/academic-activities", academic_activities.academic_activities);
    
    // http://localhost:8000/awards-achievements
    app.get("/awards-achievements", awards_achievements.awards_achievements);
});

