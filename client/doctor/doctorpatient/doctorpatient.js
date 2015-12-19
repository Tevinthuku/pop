Template.doctorpatient.onRendered(function () {
    $('ul.tabs').tabs();
    
    $('.modal-trigger').leanModal();
    //collapsible
     $('.collapsible-Search-disease').collapsible({
          accordion : false
    });
    
});


Template.doctorpatient.events({
   /* 'click .disease-view-more': function(event){
      event.preventDefault();
      $('#disease').closeModal();
      Router.go('doctorotesdetails');
    } */
});

// sarch template

Template.searchDisease.helpers({
  DiseaseIndex: () => DiseaseIndex // instanceof EasySearch.Index
});









//search indexer
DiseaseIndex = new EasySearch.Index({
  collection: Diseases,
  fields: ['diseaseName', 'diseaseCode', 'diseaseDescription', 'diseaseSymptom1', 'diseaseSymptom2', 'diseaseSymptom3', 'diseaseSymptom4'],
  engine: new EasySearch.Minimongo()
});