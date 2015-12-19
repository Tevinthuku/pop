Patients = new Mongo.Collection('patients');



Template.old.onRendered(function () {

// side nav
$('.button-left').sideNav({
      menuWidth: 350, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
  
 //collapsible
$('.collapsible-Search-patient-revisit').collapsible({
          accordion : false
    });
    
  // the drop down
  $('.collapsible').collapsible();
  
// paper-fab modal
$('.modal-trigger').leanModal();
// tooltips
$('.tooltipped').tooltip({delay: 50});

// the dropdown
$('select').material_select();
     
});

Template.old.helpers({
    patients: function (){
        return Patients.find();
    }

});

// consulation fee
Template.searchConsultation.helpers({
  ConsultationIndex: () => ConsultationIndex  // instanceof EasySearch.Index
});

//patients
Template.searchPatient.helpers({
  PatientsIndex: () => PatientsIndex  // instanceof EasySearch.Index
});


//template events
Template.old.events({
  'click .revisit': function(){
      var patientId = this._id;
      console.log(patientId);
      Session.set('selectedPatient', patientId);
      var selectedPatient = Session.get('selectedPatient');
      Meteor.call('updatePatientRevisit', selectedPatient, 1);
       //$('#patient').closeModal();
  },
  'click .revisit': function(event){
        event.preventDefault();
        var revisitValue = $('[name = "revisit-value"]').val();
        console.log(revisitValue);
        console.log(firstName);
        Meteor.call('revisitPatientConsult', revisitValue);
  }
});
//search indexer for patients

PatientsIndex = new EasySearch.Index({
  collection: Patients,
  fields: ['firstName', 'middleName', 'lastName'],
  engine: new EasySearch.Minimongo()
});

ConsultationIndex = new EasySearch.Index({
  collection: Patients,
  fields: ['firstName', 'middleName', 'lastName', 'revisitValue'],
  engine: new EasySearch.Minimongo()
});

//meteor patients subscribe method
Meteor.subscribe('patients');
