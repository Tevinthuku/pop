Template.main.onRendered(function () {
        
        
                // Show sideNav
                $('.button-collapse').sideNav('show');
                // Hide sideNav
                $('.button-collapse').sideNav('hide');
                
                
                  $('.button-collapse').sideNav({
                  menuWidth: 300, // Default is 240
                 
                  closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
                    }
                );
                
                $('.collapsible').collapsible();
                

    
});
//logout sound
var logout = new buzz.sound('/sound/ratchet.mp3');



Template.main.helpers({
    'username': function(){
        var userName = Meteor.user() && Meteor.user().username;
        return "Hi " + userName
    }
});


Template.main.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('login');
        logout.play();
    }

    
});