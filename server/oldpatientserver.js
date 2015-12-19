
//search
Meteor.methods({
    'revisitPatientConsult': function(revisitValue){
        var currentUser = Meteor.userId();
        var oldPatient = this._id;
        var revisitValueTableData = {
            revisitValue:revisitValue,
            createdTime:new Date()
        }
        if(!currentUser){
            throw new Meteor.Error("not-logged-in", "You're not logged-in.");
        }
        Patients.insert(revisitValueTableData);
    },
});


Meteor.publish('accounts', function(){
    return Patients.find({});
})

// search the consultation for patients

ConsultationIndex = new EasySearch.Index({
  collection: Patients,
  fields: ['firstName', 'middleName', 'lastName', 'revisitValue'],
  engine: new EasySearch.Minimongo()
});