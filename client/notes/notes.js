Notes = new Mongo.Collection('notes');

Template.notes.onRendered(function () {
    $('.modal-trigger').leanModal();
});

Template.notes.events({
    'click .notes-submit': function(event){
        event.preventDefault();
        var notesHeader = $('[name= "notesHeader"]').val();
        var notesContent = $('[name= "notesContent"]').val();
        // the method call
         Meteor.call('createNewNote', notesHeader, notesContent, function(error, result){
                     if(error){
                            console.log(error.reason);
                        } else {
                            $('[name="notesHeader"]').val(' ');
                            $('[name="notesContent"]').val(' ');  
                            $('#textarea1').trigger('autoresize');
                        }
                        
         });

    },
    'click .notes-delete': function(event){
        event.preventDefault();
        var documentId = this._id;
        Meteor.call('deleteNote', documentId);
    }
});

Template.notes.helpers({
    note: function (){
        return Notes.find({},{sort: {createdAt: -1}});
    }
});

Meteor.subscribe('notes');