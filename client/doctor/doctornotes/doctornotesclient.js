Template.doctornotes.helpers({
    disease: function (){
        return Diseases.find({},{sort: {createdAt: -1}});
    }
});


Template.doctornotes.events({
   'click .doctor-delete': function(event){
       event.preventDefault();
       var documentId = this._id;
       Meteor.call('deleteDoctorNote', documentId);
   } 
});


Meteor.subscribe('diseases');