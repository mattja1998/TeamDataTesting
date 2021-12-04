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
    res.render('index2')


})
app.post('/insertForm2',function (req,res){
    let agencyName = req.body.agencyName;
    let todaysDate = req.body.todaysDate;
    let dateOfIncident = req.body.dateOfIncident;
    let timeOfIncident = req.body.timeOfIncident;
    let reporterName= req.body.reporterName

    let reporterTitle = req.body.reporterTitle;
    let businessNumber = req.body.businessNumber;
    let businessEmail = req.body.businessEmail;
    let howOccured = req.body.howOccured;

    let incidentLocation = req.body.incidentLocation;
    let incidentLocationAddress = req.body.incidentLocationAddress;
    let incidentAddress = req.body.incidentAddress;
    let city1 = req.body.city1;
    let state = req.body.state;
    let zip = req.body.zip;
    let locationType = req.body.locationType;
    let primaryLocation = req.body.primaryLocation;

    let agencyVehicleOccupied = req.body.agencyVehicleOccupied;
    let driverLastName = req.body.driverLastName;
    let driverFirstName = req.body.driverFirstName;
    let driverAddress = req.body.driverAddress;
    let driverCity = req.body.driverCity;
    let driverState = req.body.driverState;
    let driverZip = req.body.driverZip;
    let driverHomePhone = req.body.driverHomePhone;
    let driverWorkPhone = req.body.driverWorkPhone;
    let driverCellPhone = req.body.driverCellPhone;
    let driverEmail = req.body.driverEmail;

    let employeeDriver = req.body.employeeDriver;
    let employeeJobTitle = req.body.employeeJobTitle;
    let typeOfDriver = req.body.typeOfDriver;
    let vehicleVIN = req.body.vehicleVIN;
    let vehicleMake = req.body.vehicleMake;
    let vehicleModel = req.body.vehicleModel;
    let vehicleLicenceNum = req.body.vehicleLicenceNum;
    let vehicleDrivable = req.body.vehicleDrivable;
    let vehicleLocation = req.body.vehicleLocation;
    let damageArea = req.body.damageArea;
    let repairCost = req.body.repairCost;

    let trailerInvolved = req.body.trailerInvolved;
    let trailerYear = req.body.trailerYear;
    let trailerModel = req.body.trailerModel;
    let trailerRepairCost = req.body.trailerRepairCost;
    let trailerLicenseNum = req.body.trailerLicenseNum;
    let trailerDamageArea = req.body.trailerDamageArea;
    let trailerLocation = req.body.trailerLocation;

    let policeInvestigation = req.body.policeInvestigation;
    let policeAgency = req.body.policeAgency;
    let policeReportNum = req.body.policeReportNum;
    let ticket = req.body.ticket;
    let Desticket = req.body.Desticket;

    let isDriverInjured = req.body.isDriverInjured;

    let peopleInvolved = req.body.peopleInvolved;
    let claimantLastName = req.body.claimantLastName;
    let claimantAddress = req.body.claimantAddress;
    let claimantState = req.body.claimantState;
    let claimantWorkPhone = req.body.claimantWorkPhone;
    let claimantVehicleMake = req.body.claimantVehicleMake;
    let claimantVehicleYear = req.body.claimantVehicleYear;
    let claimantFirstName = req.body.claimantFirstName;
    let claimantCity = req.body.claimantCity;
    let claimantZip = req.body.claimantZip;
    let claimantHomePhone = req.body.claimantHomePhone;
    let claimantCellPhone = req.body.claimantCellPhone;
    let claimantVehicleModel = req.body.claimantVehicleModel;

    let isVehicleDrivable = req.body.isVehicleDrivable;
    let drivableVehicleLocation = req.body.drivableVehicleLocation;
    let vehicleDamageExtent = req.body.vehicleDamageExtent;
    let propDamageDescription = req.body.propDamageDescription;
    let propertyDamageExtent = req.body.propertyDamageExtent;

    let injuredAge = req.body.injuredAge;
    let injuredSex = req.body.injuredSex;
    let paramedicsTransfer = req.body.paramedicsTransfer;
    let injuredLocation = req.body.injuredLocation;
    let injuredClaim = req.body.injuredClaim;
    let injuryDescription = req.body.injuryDescription;

    let peopleInvolved2 = req.body.peopleInvolved2;
    let claimantLastName2 = req.body.claimantLastName2;
    let claimantAddress2 = req.body.claimantAddress2;
    let claimantState2 = req.body.claimantState2;
    let claimantWorkPhone2 = req.body.claimantWorkPhone2;
    let claimantVehicleMake2 = req.body.claimantVehicleMake2;
    let claimantVehicleYear2 = req.body.claimantVehicleYear2;
    let claimantFirstName2 = req.body.claimantFirstName2;
    let claimantCity2 = req.body.claimantCity2;
    let claimantZip2 = req.body.claimantZip2;
    let claimantHomePhone2 = req.body.claimantHomePhone2;
    let claimantCellPhone2 = req.body.claimantCellPhone2;
    let claimantVehicleModel2 = req.body.claimantVehicleModel2;

    let isVehicleDrivable2 = req.body.isVehicleDrivable2;
    let drivableVehicleLocation2 = req.body.drivableVehicleLocation2;
    let vehicleDamageExtent2 = req.body.vehicleDamageExtent2;
    let propDamageDescription2 = req.body.propDamageDescription2;
    let propertyDamageExtent2 = req.body.propertyDamageExtent2;

    let injuredAge2 = req.body.injuredAge2;
    let injuredSex2 = req.body.injuredSex2;
    let paramedicsTransfer2 = req.body.paramedicsTransfer2;
    let injuredLocation2 = req.body.injuredLocation2;
    let injuredClaim2 = req.body.injuredClaim2;
    let injuryDescription2 = req.body.injuryDescription2;

    let witnessLastName = req.body.witnessLastName;
    let witnessAddress = req.body.witnessAddress;
    let witnessState = req.body.witnessState;
    let witnessWorkPhone = req.body.witnessWorkPhone;
    let witnessFirstName = req.body.witnessFirstName;
    let witnessCity = req.body.witnessCity;
    let witnessZip = req.body.witnessZip;
    let witnessHomePhone = req.body.witnessHomePhone;
    let witnessCellPhone = req.body.witnessCellPhone;

    let relation = req.body.relation
    let isThereAWitnessStatement = req.body.isThereAWitnessStatement;
    let witnessStatement = req.body.witnessStatement;
    let agencyDriverBusiness = req.body.agencyDriverBusiness;
    let witnessLocation = req.body.witnessLocation;
    let agencyDriverLocation = req.body.agencyDriverLocation;
    let otherDriverLocation = req.body.otherDriverLocation;
    let agencyDriverDirection = req.body.agencyDriverDirection;
    let otherDriverDirection = req.body.otherDriverDirection;
    let weatherCondition = req.body.weatherCondition;

   let sql= `INSERT INTO Form2(AgencyName, ReporterName, TodaysDate, ReporterTitle, DateIncident, BisPhone, TimeIncident,BisEmail, HowOccur, Location, IsAdress, Adress,
        City, State, Zip, SpecificLocation, PrimaryLocation, VOccupied, VLastName, VFName, VAddress, VCity, VState, VZip, VHome, VWork, VCell, VEmail, Emp, 
        EMPTitle, DriverType, VVin, vModel, vMake, vLicense, vDrivable, vLocation, vRepair, vAreaDamage, Trailet, tYear, tLicense, tModel, tAreaDMG, tRepairCost, 
        tCurrentLocation, PoliceInvestigation, PoliceAgency, PoliceReportNum, Ticket, describeTicket, Claimant, cLName, cFName, cAdress, cCity, cState, cZip, cWOrk, cHome, 
        cMake, cCell, cYear, cModel, cDrivable, cLocation, cExtent, cPropertyDMG, cPersonExtent, cAge, cSex, cTransported, cTaken, cClaim, cDescribe, additional, addLName, 
        addFname, addAdress, addCity, addZip, addWork, addHome, addCell, addMake, addmodel, addDriveable, addLoc, addExtent, addProp, addAge, addSex, addTransport, addTaken, 
        addClaim, addDescribe, addPropDamage, witName, witFname, witAddress, witCIty, witState, witZip, witWork, witHome, witCell, withRelation, witStatment, witSaid, witLoc, ABis, 
        aStreet, OStreet, ADirection, ODirection, weather) VALUES ('${agencyName}','${reporterName}','${todaysDate}','${reporterTitle}','${dateOfIncident}','${businessNumber}','${timeOfIncident}',
        '${businessEmail}','${howOccured}','${incidentLocation}','${incidentLocationAddress}','${incidentAddress}','${city1}','${state}',
        '${zip}','${locationType}','${primaryLocation}','${agencyVehicleOccupied}','${driverLastName}','${driverFirstName}','${driverAddress}','${driverCity}','${driverState}',
        '${driverZip}','${driverHomePhone}','${driverWorkPhone}','${driverCellPhone}','${driverEmail}','${employeeDriver}','${employeeJobTitle}','${typeOfDriver}','${vehicleVIN}',
        '${vehicleModel}','${vehicleMake}','${vehicleLicenceNum}','${vehicleDrivable}','${vehicleLocation}','${repairCost}','${damageArea}','${trailerInvolved}','${trailerYear}',
        '${trailerLicenseNum}','${trailerModel}','${trailerDamageArea}','${trailerRepairCost}','${trailerLocation}','${policeInvestigation}','${policeAgency}','${policeReportNum}','${ticket}',
        '${Desticket}','${isDriverInjured}','${claimantLastName}','${claimantFirstName}','${claimantAddress}','${claimantCity}','${claimantState}','${claimantZip}','${claimantWorkPhone}',
        '${claimantHomePhone}','${claimantVehicleMake}','${claimantCellPhone}','${claimantVehicleYear}','${claimantVehicleModel}','${isVehicleDrivable}','${drivableVehicleLocation}','${vehicleDamageExtent}',
        '${propDamageDescription}',
        '${propertyDamageExtent}','${injuredAge}','${injuredSex}','${paramedicsTransfer}','${injuredLocation}','${injuredClaim}','${injuryDescription}','${peopleInvolved2}','${claimantLastName2}',
        '${claimantFirstName2}','${claimantAddress2}','${claimantCity2}','${claimantZip2}','${claimantWorkPhone2}','${claimantHomePhone2}','${claimantCellPhone2}','${claimantVehicleMake2}','${claimantVehicleModel2}',
        '${isVehicleDrivable2}','${drivableVehicleLocation2}','${vehicleDamageExtent2}','${propDamageDescription2}','${injuredAge2}','${injuredSex2}','${paramedicsTransfer2}','${injuredLocation2}','${injuredClaim2}',
        '${injuryDescription2}','${propertyDamageExtent2}','${witnessLastName}','${witnessFirstName}','${witnessAddress}','${witnessCity}','${witnessState}','${witnessZip}','${witnessWorkPhone}',
        '${witnessHomePhone}','${witnessCellPhone}','${relation}','${isThereAWitnessStatement}','${witnessStatement}','${witnessLocation}','${agencyDriverBusiness}','${agencyDriverLocation}',
        '${otherDriverLocation}','${agencyDriverDirection}','${otherDriverDirection}','${weatherCondition}')`;


   con.query(sql);
   res.render('index2');
});

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
    res.render('index2');
});
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
    let FirstName = req.body.FirstName;
    let time = req.body.time;
    let LastName = req.body.LastName;
    let Date = req.body.Date;
    let location = req.body.location;
    let report = req.body.report;
    let repdate = req.body.repdate;
    let reptime = req.body.reptime;
    let repTo = req.body.repTo
    let describe = req.body.describe;
    let witness = req.body.witness;
    let medAtten = req.body.medAtten;
    let bodyInj = req.body.bodyInj;

    let PrevInj = req.body.PrevInj;
    let prevInjDescribe = req.body.prevInjDescribe;
    let preDate = req.body.preDate;
    let prevTreatment = req.body.prevTreatment;
    let sig = req.body.sig;
    let TDay = req.body.TDay;


    let sql = `INSERT INTO Form4e(Employee_Name,lastName, Date_Occurred, Time_Occurred, Location, first_Report,Time_FRepo, Date_FRepo, Repo_To, How_Occurred, People_Pres, Body_injur, Med_attention, Where_medAtten, 
    Signiture, Sig_Date, Prev_Injury, Prior_inj, Prior_treat) VALUES ('${FirstName}','${LastName}','${Date}','${time}','${location}','${report}',
    '${reptime}','${repdate}','${repTo}','${describe}','${witness}','${bodyInj}','${medAtten}','${prevTreatment}','${sig}','${TDay}','${PrevInj}','${prevInjDescribe}','${preDate}')`;
    con.query(sql);
    res.render('index2')

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