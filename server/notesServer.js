Notes = new Mongo.Collection('notes');
Meteor.publish('notes', function(){
    var currentUser = this.userId;
    return Notes.find({ createdBy: currentUser });
});

// notes method

Meteor.methods({
    'createNewNote': function(notesHeader, notesContent){
        var currentUser = Meteor.userId();
            var notesData = {
            notesHeader: notesHeader,
            notesContent: notesContent,
            createdAt: new Date(),
            createdBy: currentUser
            }
            if(!currentUser){
                throw new Meteor.Error("not-logged-in", "You're not logged-in.");
            }
            
            Notes.insert(notesData);
    },
    'deleteNote': function(documentId){
                var currentUser = Meteor.userId();
                    var data = {
                        _id: documentId,
                        createdBy: currentUser
                    }
                    if(!currentUser){
                        throw new Meteor.Error("not-logged-in", "You're not logged-in.");
                    }
                    Notes.remove(data);
                }
});