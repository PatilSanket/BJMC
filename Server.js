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
const url = require("./DBConfig");

const CONNECTION_URL = url;
const DATABASE_NAME = "hospital_db";

var app = Express();
var cors = require('cors')


app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors())

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
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });


    // http://localhost:8000/Teachers
    app.get("/Teachers", teachers.teachers);

    // http://localhost:8000/Teachers/Anatomy
    app.get("/Teachers/:dept", dept.dept);
    
    // http://localhost:8000/Anti-Ragging
    app.get("/Anti-Ragging", anti_ragging.anti_ragging);

    // http://localhost:8000/Non-Teaching
    app.get("/Non-Teaching", non_teaching.non_teaching);

     // http://localhost:8000/Resources
     app.get("/Resources", resources.resources);
   
    // http://localhost:8000/Results
    app.get("/Results", results.results);

    // http://localhost:8000/Results/course
    app.get("/Results/:course", results.res_course);

   // http://localhost:8000/Resultsbyid/Seat_No
    app.get("/Resultsbyid/:seat_number", res_id.res_id);
    
    // http://localhost:8000/Resultsbycourse/course
    app.get("/Resultsbycourse/:seat_number", res_id.res_course );

    //http://localhost:8000/Results_Year/
    app.get("/Results_Year/", res_yr.res_yr);
    
    //http://localhost:8000/Research_publications/
    app.get("/Research_Publications/", research_publications.Research_Publications);
    
    //http://localhost:8000/Research_publications/
    app.get("/organogram/", organogram.organogram);
});

