Problems = new Mongo.Collection('problems');

Template.problems.onRendered(function () {
    
    $('.modal-trigger').leanModal();
});
Template.problems.events({
    
   'click .problems-submit': function(event){
       event.preventDefault();
       var problemsHeader = $('[name = "problemsHeader"]').val();
       var problemsContent = $('[name = "problemsContent"]').val();
       var problemsTag1 = $('[name = "problemsTag1"]').val();
       var problemsTag2 = $('[name = "problemsTag2"]').val();
       var problemsTag3 = $('[name = "problemsTag3"]').val();
       //method call
       Meteor.call('createNewProblem', problemsHeader, problemsContent, problemsTag1,problemsTag2,problemsTag3, function(error, results){
           if(error){
               console.log(error.reason);
           } else {
               
               $('[name = "problemsHeader"]').val(' ');
               $('[name = "problemsContent"]').val(' ');
               $('[name = "problemsTag1"]').val(' ');
               $('[name = "problemsTag2"]').val(' ');
               $('[name = "problemsTag3"]').val(' ');
               $('#textarea1').trigger('autoresize');
           }
           
       });
   },
   'click .problem-delete': function(event){
       event.preventDefault();
       var documentId = this._id;
       Meteor.call('deleteProblem', documentId);
   }
    
});

Template.problems.helpers({
    problem: function (){
        return Problems.find({},{sort: {createdAt: -1}});
    }
});

Template.problemsDetails.onRendered(function () {
    
    $('.modal-trigger').leanModal();
});

Meteor.subscribe('problems');