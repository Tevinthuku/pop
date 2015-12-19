Meteor.publish('diseases', function(){
   var currentUser = this.userId;
   return Diseases.find({ createdBy: currentUser });
});

Meteor.methods({

   'deleteDoctorNote': function(documentId){
            var currentUser = Meteor.userId();
            // remove the doctor-note
            var deletenoteDoctor = {
                  _id: documentId,
                  createdBy: currentUser
            }
            // the current_User.
            if(!currentUser){
               throw new Meteor.Error("not logged-in", "You're not logged-in");
            }
            Diseases.remove(deletenoteDoctor);
      }   
});

//disease search indexer
DiseaseIndex = new EasySearch.Index({
  collection: Diseases,
  fields: ['diseaseName', 'diseaseCode', 'diseaseDescription', 'diseaseSymptom1', 'diseaseSymptom2', 'diseaseSymptom3', 'diseaseSymptom4'],
  engine: new EasySearch.Minimongo()
});