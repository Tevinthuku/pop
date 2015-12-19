Diseases = new Mongo.Collection('diseases');

Template.doctorcreate.events({
    'click .disease-submit': function(event){
        event.preventDefault();
        var diseaseName = $('[name = "diseaseName"]').val();
        var diseaseCode = $('[name = "diseaseCode"]').val();
        var diseaseDescription = $('[name = "diseaseDescription"]').val();
        var diseaseSymptom1 = $('[name = "diseaseSymptom1"]').val();
        var diseaseSymptom2 = $('[ name = "diseaseSymptom2"]').val();
        var diseaseSymptom3 = $('[name = "diseaseSymptom3"]').val();
        var diseaseSymptom4 = $('[name = "diseaseSymptom4"]').val();
        var diseaseCure1 = $('[name = "diseaseCure1"]').val();
        var diseaseCure2 = $('[name = "diseaseCure2"]').val();
        var diseaseCure3 = $('[name = "diseaseCure3"]').val();
        var diseaseCure4 = $('[name = "diseaseCure4"]').val();
        // diseases method
        Meteor.call('createNewDisease', diseaseName,diseaseCode,diseaseDescription, diseaseSymptom1,diseaseSymptom2, diseaseSymptom3, diseaseSymptom4, diseaseCure1,diseaseCure2, diseaseCure3, diseaseCure4, function(error, result){
                if(error){
                    console.log(error.reason);
                } else {
                    $('[name = "diseaseName"]').val(' ');
                    $('[name = "diseaseCode"]').val(' ');
                    $('[name = "diseaseDescription"]').val(' ');
                    $('[name = "diseaseSymptom1"]').val(' ');
                    $('[name = "diseaseSymptom2"]').val(' ');
                    $('[name = "diseaseSymptom3"]').val(' ');
                    $('[name = "diseaseSymptom4"]').val(' ');
                    $('[name = "diseaseCure1"]').val(' ');
                    $('[name = "diseaseCure2"]').val(' ');
                    $('[name = "diseaseCure3"]').val(' ');
                    $('[name = "diseaseCure4"]').val(' ');
                    $('#textarea1').trigger('autoresize');
                }
        });
    }
});