Diseases = new Mongo.Collection('diseases');



Meteor.methods({
    'createNewDisease': function(diseaseName,diseaseCode,diseaseDescription, diseaseSymptom1,diseaseSymptom2, diseaseSymptom3, diseaseSymptom4, diseaseCure1,diseaseCure2, diseaseCure3, diseaseCure4){
        var currentUser = Meteor.userId();
        var diseaseData = {
            diseaseName: diseaseName,
            diseaseCode: diseaseCode,
            diseaseDescription: diseaseDescription,
            diseaseSymptom1: diseaseSymptom1,
            diseaseSymptom2: diseaseSymptom2,
            diseaseSymptom3: diseaseSymptom3,
            diseaseSymptom4: diseaseSymptom4,
            diseaseCure1: diseaseCure1,
            diseaseCure2: diseaseCure2,
            diseaseCure3: diseaseCure3,
            diseaseCure4: diseaseCure4,
            createdAt:new Date(),
            createdBy: currentUser
        }
        if(!currentUser){
                throw new Meteor.Error("not-logged-in", "You're not logged-in.");
            }
            
            Diseases.insert(diseaseData);
            
    }
});