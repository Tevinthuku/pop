// new templte on rended
Template.new.onRendered(function () {
                        $('.datepicker').pickadate({
                        selectMonths: true, // Creates a dropdown to control month
                        selectYears: 150 // Creates a dropdown of 15 years to control year
                        });
                        
                        //hte consultation dropdown
                        
                        $('select').material_select();
                        
                                        // paper-fab modal
                                    $('.modal-trigger').leanModal();
                                    // tooltips
                                    $('.tooltipped').tooltip({delay: 50});
                                    


});
    // new template events
Template.new.events({
            // events go here
            'click .submit-new-patient' :function(event){
                   event.preventDefault();
                   var firstName = $('[name = "firstName"]').val();
                   var middleName = $('[name = "middleName"]').val();
                   var lastName = $('[name = "lastName"]').val();
                   var phoneNumber = $('[name = "phoneNumber"]').val();
                // full year date and timee
                    //console.log($('.datepicker').val());
                    // get the year only
                    var dateString = $('.datepicker').val(); 
                    //console.log(dateString.slice(-4));
                    //year selected
                    var yearSelected = dateString.slice(-4);
                    
                    // the dropdown paid or not
                    
                    var e = document.getElementById("consult");
                    var paid = e.options[e.selectedIndex].text;
                    
                    //console.log(strUser);
                    
                    //location
                    var location = $('[name = "location"]').val();
                    
                    // today
                    var d = new Date();
                    
                    // returns the year (four digits)
                    var currentYear = d.getFullYear();
                    
                    //age difference
                    
                    var age = currentYear - yearSelected;
                    
                   // console.log(age);
                   
                   
                    // visit
                    var visit = 1;
                    
                    var s = document.getElementById("gender");
                    var sex = s.options[s.selectedIndex].text;
            Meteor.call('createNewPatient', firstName,middleName,lastName, phoneNumber,dateString, yearSelected, paid, location,currentYear, age, sex, visit, function(error, result){
                if(error){
                    console.log(error.reason);
                } else {
                    $('[name = "firstName"]').val(' ');
                    $('[name = "middleName"]').val(' ');
                    $('[name = "lastName"]').val(' ');
                    $('[name = "phoneNumber"]').val(' ');
                    $('[name = "location"]').val(' ');
                }
        });
                    

                },
                
                'click .logout': function(event){
                        event.preventDefault();
                        Meteor.logout();
                        Router.go('login');
                        logout.play();
                    }
                
});

Template.new.helpers({
    'username': function(){
        var userName = Meteor.user() && Meteor.user().username;
        return  userName
    }
});


        
