Patients = new Mongo.Collection('patients');

Meteor.publish('patients', function(){
    return Patients.find({});
});

Meteor.methods({
   'createNewPatient': function(firstName,middleName,lastName, phoneNumber,dateString, yearSelected, paid, location,currentYear, age, sex, visit){
       var currentUser = Meteor.userId();
       var newPatient = this._id;
       var newpatientsData = {
           firstName: firstName,
           middleName: middleName,
           lastName: lastName,
           phoneNumber: phoneNumber,
           dateString: dateString,
           yearSelected: yearSelected,
           paid:paid,
           location: location,
           currentYear: currentYear,
           age: age,
           sex: sex,
           visit: visit,
           createdAt: new Date(),
       }
       if(!currentUser){
           throw new Meteor.Error("not-logged-in", "You're not logged-in.");
       }
       
       Patients.insert(newpatientsData);
   },
   
  'updatePatientRevisit': function(selectedPatient, patientRevisitValue){
      Patients.update(selectedPatient, {$inc: {visit: patientRevisitValue} });  
    },
    
    
});

//search indexer for patients
PatientsIndex = new EasySearch.Index({
  collection: Patients,
  fields: ['firstName', 'middleName', 'lastName'],
  engine: new EasySearch.Minimongo()
});