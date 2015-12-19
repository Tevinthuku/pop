Problems = new Mongo.Collection('problems');
Meteor.publish('problems', function(){
   var currentUser = this.userId;
   return Problems.find({ createdBy: currentUser });
});

// method problems
Meteor.methods({
   'createNewProblem' : function(problemsHeader, problemsContent, problemsTag1,problemsTag2,problemsTag3){
       var currentUser = Meteor.userId();
       var problemsData = {
           problemsHeader: problemsHeader,
           problemsContent: problemsContent,
           problemsTag1: problemsTag1,
           problemsTag2: problemsTag2,
           problemsTag3: problemsTag3,
           createdAt: new Date(),
           createdBy: currentUser
       }
       if(!currentUser){
           throw new Meteor.Error("not-logged-in", "You're not logged-in.");
       }
       Problems.insert(problemsData);
   },
   'deleteProblem': function(documentId){
            var currentUser = Meteor.userId();
            //remove the problem in var problemo
                var problemo = {
                    _id: documentId,
                    createdBy: currentUser
                }
                if(!currentUser){
                    throw new Meteor.Error("not-logged-in", "You are not loggd-in");
                }
                Problems.remove(problemo);
            }
    
});