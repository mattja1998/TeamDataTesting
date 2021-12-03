var express = require("express");
var app = express();
app.set('view engine','pug');
let mySql = require('mysql');
let con = mySql.createConnection({
    host:'45.55.136.114',
    user:'team1_F2021',
    password:'SpecialT!me!',
    database:'test'
})
const bodyParser = require("body-parser");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/insertRow',function(req,res){
    let Date = req.body.date;
    let Time = req.body.time;
    let Name = req.body.name;
    let Location = req.body.location;
    let Treatment = req.body.treatment;
    let how = req.body.how;
    let facility = req.body.fLocal;
    let staffName = req.body.StaffName;

    let sql = `INSERT INTO Minor_Injury_Log(Date,Time,Name,Location,Treatment,how,facility,staffName)  VALUES ('${Date}','${Time}','${Name}','${Location}','${Treatment}','${how}','${facility}','${staffName}')`;
    con.query(sql);
    res.render('MinorInjurys')


})
app.post('/insertForm4',function (req,res){
    let firstname = req.body.firstname;
    let DateIncident = req.body.DateIncident;
    let PersonName = req.body.PersonName;
    let BisPhone = req.body.BisPhone;
    let Today = req.body.Today;
    let Time = req.body.Time;
    let ReportTitle = req.body.ReportTitle;
    let Bis_Email = req.body.Bis_Email;
    let HowOccur = req.body.HowOccur;
    let Location = req.body.Location;
    let address2 = req.body.address2;
    let city2 = req.body.city2;
    let state2 = req.body.state2;
    let zip2 = req.body.zip2;
    let LocationSpecific = req.body.LocationSpecific;

    let PrimaryLoc = req.body.PrimaryLoc;
    let Fein = req.body.Fein;
    let Days3 = req.body.Days3;
    let Accident_Occured = req.body.Accident_Occured;
    let incident_occur1 = req.body.incident_occur1;
    let Emp_last_name = req.body.Emp_last_name;
    let Emp_first_name = req.body.Emp_first_name;
    let Address1 = req.body.Address1;
    let city3 = req.body.city3;
    let State3 = req.body.State3;
    let zip3 = req.body.zip3;
    let HomePhone = req.body.HomePhone;
    let Work_Phone = req.body.Work_Phone;

    let Cell_Phone = req.body.Cell_Phone;
    let Number_to_contact = req.body.Number_to_contact;
    let Email1 = req.body.Email1;
    let ssn = req.body.ssn;
    let DOB = req.body.DOB;
    let gender = req.body.gender;
    let English = req.body.English;
    let Marital_status = req.body.Marital_status;
    let dependents = req.body.dependents;
    let weekly_wage = req.body.weekly_wage;
    let Job_title = req.body.Job_title;
    let employment = req.body.employment;
    let CompanyTime = req.body.CompanyTime;

    let Date_hired = req.body.Date_hired;
    let employee_began_work = req.body.employee_began_work;
    let date_employee_worked = req.body.date_employee_worked;
    let employee_died = req.body.employee_died;
    let OnGrounds = req.body.OnGrounds;
    let InjIll = req.body.InjIll;
    let descIll = req.body.descIll;
    let Substance = req.body.Substance;
    let medAtten = req.body.medAtten;
    let treatment = req.body.treatment;

    let ER = req.body.ER;
    let OverNight = req.body.OverNight;
    let Name_Physician = req.body.Name_Physician;
    let Address3 = req.body.Address3;
    let city4 = req.body.city4;
    let state4 = req.body.state4;
    let zip4 = req.body.zip4;
    let Home_phone2 = req.body.Home_phone2;


let sql=`INSERT INTO Form4(Agency_Name, Today_Date, DateOfIncident, TimeOfIncident, NameReport, Title, BisPhone, BisEmail, HowOccurred, Location, 
Adress, City, State, Zip, LocationType, PrimaryLoc, EmpFEIN, 3WorkDays, DoingWhat, HowIncidentOccurred, EmployeeLName, FName, Adress2, City2, 
State2, Zip2, HomePhone, WorkPhone, CellPhone, BestNumber, Email, Social, DOB, Gender, Language, MaritalStatus, NumberDependents, AvgWage, Job, 
empStatus, Tenure, DateHired, BeganWork, LastWorked, DeathDate, AgencyPremises, InjOrIll, DescribeInj, ObjOrSubstance, SeekMed, TreatmentSite, ERStatus,
 OvernightER, PhysicianName, Adress3, City3, zip3, State3, HomePhone2) VALUES ('${firstname}','${Today}','${DateIncident}','${Time}','${PersonName}','${ReportTitle}','${BisPhone}','${Bis_Email}','${HowOccur}',
 '${Location}','${address2}','${city2}','${state2}','${zip2}','${LocationSpecific}','${PrimaryLoc}','${Fein}','${Days3}','${Accident_Occured}','${incident_occur1}','${Emp_last_name}','${Emp_first_name}',
 '${Address1}','${city3}','${State3}','${zip3}','${HomePhone}',
 '${Work_Phone}','${Cell_Phone}','${Number_to_contact}','${Email1}','${ssn}',${DOB},'${gender}','${English}','${Marital_status}','${dependents}',
 '${weekly_wage}','${Job_title}','${employment}','${CompanyTime}','${Date_hired}','${employee_began_work}','${date_employee_worked}','${employee_died}',
 '${OnGrounds}','${InjIll}','${descIll}','${Substance}','${medAtten}','${treatment}','${ER}','${OverNight}','${Name_Physician}','${Address3}','${city4}','${zip4}','${state4}','${Home_phone2}')`;
con.query(sql);
res.render('index2');
});
app.post('/insertForm3',function(req,res){
    let agencyName = req.body.agencyName;
    let Today = req.body.Today;
    let Person = req.body.Person;
    let BisPhone = req.body.BisPhone;
    let dateOfIncident = req.body.dateOfIncident;
    let TimeIncident = req.body.TimeIncident;
    let Title = req.body.Title;
    let BisEmail = req.body.BisEmail;
    let occured = req.body.occured;
    let location = req.body.location;
    let adress = req.body.adress;
    let state = req.body.state;
    let primaryLocation = req.body.primaryLocation;
    let contactPerson = req.body.contactPerson;
    let loss = req.body.loss;

    let ContactEmail = req.body.ContactEmail;
    let city = req.body.city;
    let zip = req.body.zip;
    let locationType = req.body.locationType;
    let FaultIdentity = req.body.FaultIdentity;
    let ContactPhone = req.body.ContactPhone;
    let damage = req.body.damage;
    let cityIdentidied = req.body.cityIdentidied;
    let StatePersonIdentidied = req.body.StatePersonIdentidied;
    let ZipPersonIdentidied = req.body.ZipPersonIdentidied;
    let police = req.body.police;
    let policeAgency = req.body.policeAgency;
    let theCharges = req.body.theCharges;

    let sql=`INSERT INTO Form3(Agency_Name,Date_Of_Incident, Time_Of_Incident, Name, Title, bis_Phone, Bis_email, Description, Location, adress, city, zip , state, 
    Location2, Prim_Location, Responsible, contact, Estimate, ContactPhone, ContactEmail, Damage, City3, zip3, state3, Police, Police_Agency, Charges,Todays_Date) VALUES 
    ('${agencyName}','${dateOfIncident}','${TimeIncident}','${Person}','${Title}','${BisPhone}','${BisEmail}','${occured}','${location}',
        '${adress}','${city}','${zip}','${state}','${locationType}',
        '${primaryLocation}','${FaultIdentity}','${contactPerson}','${loss}','${ContactPhone}','${ContactEmail}','${damage}','${cityIdentidied}','${ZipPersonIdentidied}','${StatePersonIdentidied}',
        '${police}','${policeAgency}',
        '${theCharges}','${Today}')`;
    con.query(sql);
    res.render('index2')

})
app.post('/insertForm1',function(req,res){
    let AgencyName = req.body.agencyName;
    let TodaysDate = req.body.TodaysDate;
    let DateIncident = req.body.DateOfIncident;
    let TimeIncident = req.body.timeOfIncident;
    let ReporterName = req.body.reporterName;
    let ReporterTitle = req.body.reporterTitle;
    let BisEmail = req.body.BisEmail;
    let BisPhone = req.body.bisPhone;
    let occurred = req.body.occurred;
    let nameLocation = req.body.nameLocation;
    let adressLoc = req.body.adressLoc;
    let IncidentAdress = req.body.IncidentAdress;
    let IncidentLocation = req.body.IncidentLocation;
    let locationZip = req.body.locationZip;
    let LocationCity = req.body.LocationCity;
    let LocationState = req.body.LocationState;
    let PrimaryLocation = req.body.PrimaryLocation;
    let INJ = req.body.INJ;
    let InjLastName = req.body.InjLastName;
    let InjAdress = req.body.InjAdress;
    let InjState = req.body.InjState;
    let InjPhone = req.body.InjPhone;
    let InjCell = req.body.InjCell;
    let InjFirstName = req.body.InjFirstName;
    let InjCity = req.body.InjCity;
    let InjZip = req.body.InjZip;
    let InjWorkPhone = req.body.InjWorkPhone;
    let InjAge = req.body.InjAge;
    let injuredSex = req.body.injuredSex;
    let volunteer = req.body.volunteer;
    let InjDescription = req.body.InjDescription;
    let statement = req.body.statement;
    let StatementSaid = req.body.StatementSaid;
    let firstAid = req.body.firstAid;
    let PositionFirstAid= req.body.PositionFirstAid;
    let FirstAidGiven = req.body.FirstAidGiven;
    let firstAidDetails = req.body.firstAidDetails;
    let paramedicServices = req.body.paramedicServices;
    let PoliceCalled = req.body.PoliceCalled;
    let departmentName= req.body.departmentName;
    let OfficerName = req.body.OfficerName;
    let claim = req.body.claim;

    let propertyDamagePerson = req.body.propertyDamagePerson;
    let PropertyLastName = req.body.PropertyLastName;
    let PropertyFirstName = req.body.PropertyFirstName;
    let PropertyZip= req.body.PropertyZip;
    let PropertyAdress = req.body.PropertyAdress;
    let propertyCity = req.body.propertyCity;
    let PropertyState = req.body.PropertyState;
    let PropertyPhone = req.body.PropertyPhone;
    let DescribeDamage = req.body.DescribeDamage;
    let WitnessLastName = req.body.WitnessLastName;
    let WitnessCity = req.body.WitnessCity;
    let witnessState = req.body.witnessState;
    let WitnessPhone = req.body.WitnessPhone;
    let WitnessFirstName = req.body.WitnessFirstName;
    let WitnessAdress = req.body.WitnessAdress;
    let WitnessZip = req.body.WitnessZip;
    let witnessStatement = req.body.witnessStatement;
    let WitnessSaid = req.body.WitnessSaid;








    let sql = `INSERT INTO Form1(Agency_Name, Date_Of_Incident, Time_Of_Incident,Todays_Date,Name,Bis_Email, Title,Bis_phone,How,Location,Adress,city,location2,state, 
    zip, Primary_Location, Injury,LastName, FirstName,Adress2, City2, State2,Zip2, Home_phone, WorkPhone, CellPhone, Age, Sex, Volunteer, Description, Statement, StatementSaid,FirstAidGiven, FirstAid, Name_Position, 
    AED, ParaMedics,PoliceCalled, OfficerName, PD_Name, Claim,ClaimLastName, ClaimAdress, ClaimFirstName, ClaimCity,ClaimZip,ClaimState,ClaimPhoneNumber, PropertyDamage,PropertyDamagePerson, WitnessLastName, WitnessFirstName, 
    WitnessCity, WitnessAdress, WitnessState, WitnessZip, WitnessPhoneNumber, Statement2, StatementSaid2) VALUES ('${AgencyName}','${DateIncident}','${TimeIncident}','${TodaysDate}',
    '${ReporterName}','${BisEmail}','${ReporterTitle}','${BisPhone}','${occurred}','${nameLocation}','${adressLoc}','${LocationCity}','${IncidentLocation}','${LocationState}','${locationZip}','${PrimaryLocation}',
    '${INJ}','${InjLastName}','${InjFirstName}','${InjAdress}','${InjCity}','${InjState}','${InjZip}','${InjPhone}','${InjWorkPhone}','${InjCell}','${InjAge}','${injuredSex}','${volunteer}','${InjDescription}',
    '${statement}','${StatementSaid}','${FirstAidGiven}','${firstAid}','${PositionFirstAid}','${firstAidDetails}','${paramedicServices}','${PoliceCalled}','${OfficerName}','${departmentName}','${claim}','${PropertyLastName}',
    '${PropertyAdress}','${PropertyFirstName}','${propertyCity}','${PropertyZip}','${PropertyState}','${PropertyPhone}','${DescribeDamage}','${propertyDamagePerson}','${WitnessLastName}','${WitnessFirstName}',
    '${WitnessCity}','${WitnessAdress}','${witnessState}','${WitnessZip}','${WitnessPhone}','${witnessStatement}','${WitnessSaid}')`
    con.query(sql);
    res.render('index2');


})


app.post('/insertNewRow',function(req,res){
    res.render('insertMinor');
})

app.post('/deleteThis',function(req,res){
    let id = req.body.id;
    let sql = `delete from FormV2 where FormId = ${id}`;
    con.query(sql,function(err2,result,fields) {
        res.writeHead(301,{location:'/minorInjDb'});
        console.log("Deleted Form From Db");

    });


})



app.post('/insertRow4e',function(req,res){
    let Date = req.body.date;
    let Time = req.body.time;
    let Name = req.body.name;
    let Location = req.body.loacation;
    let Treatment = req.body.treatment;
    let how = req.body.how;
    let facility = req.body.fLocal;
    let staffName = req.body.StaffName;

    let sql = `INSERT INTO Minor_Injury_Log(Date,Time,Name,Location,Treatment,how,facility,staffName)  VALUES ('${date}', '${time}', '${name}, '${location}', '${treatment}', '${how}', '${fLocal}', '${StaffName}')`;
    con.query(sql);


})

app.get('/form4e', function(req,res) {




            res.render('form4e' );

    });


app.get('/form1', function(req,res) {
    res.render('form1')
});

app.get('/form3', function(req,res) {
    res.render('form3')
});

app.get('/home', function(req,res) {
    res.render('index2')
});
app.get('/form4', function(req,res) {
    res.render('Form4')
});

app.get('/login', function(req,res) {
    res.render('project')
});
app.get('/form2', function(req, res){
    res.render('Form2')
});



app.get('/minorInjDb', function(req,res) {

        let sql = "SELECT `Date`,`Time`,`Name`,`Location`,`Treatment`,`how`,`facility`,`staffName` FROM `Minor_Injury_Log` WHERE 1";
        con.query(sql, function (err2, result, fields) {
            if (err2) throw  err2;


            res.render('MinorInjurys', {
                title: "FormV2",
                Form: result
            });
        });

});
let port = 3333;
app.listen(port);