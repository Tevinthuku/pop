
Router.configure({
    layoutTemplate: 'main'
});

//login template
Router.route('/login');

// home page
Router.route('/', {
    name: 'home',
    template: 'home'
});

//  old
Router.route('/old');

// register
Router.route('/records');


// nurse meta data
Router.route('/nurse');

//nurse details
Router.route('/nursedetails');

//nurse notes
Router.route('/notes');

//notesdetails
Router.route('/notesdetails/:_id',{
    name: 'notesdetails',
    template: 'notesdetails',
    
    data: function(){
        var currentNote = this.params._id;
        return Notes.findOne({ _id: currentNote})
    }
});

//problems route
Router.route('/problems');

//problems details
Router.route('/problemsDetails/:_id',{
    name: 'problemsDetails',
    template: 'problemsDetails',
    
    data: function(){
        var currentProblem = this.params._id;
        return Problems.findOne({ _id: currentProblem})
    }
});

//create diseases
Router.route('/doctorcreate');

//doctor-notes details
Router.route('/doctorotesdetails/:_id',{
    name: 'doctorotesdetails',
    template: 'doctorotesdetails',
    
    data: function(){
        var currentNote = this.params._id;
        return Diseases.findOne({ _id: currentNote})
    }
});

// doctorlist
Router.route('/doctorlist');

//doctor patient
Router.route('/doctorpatient');

// doctor notes overview

Router.route('/doctornotes');

//new
Router.route('/new');

//pharmacy list
Router.route('/pharmacylist');

//user profile in the pharmacyprofile
Router.route('/pharmacyprofile');

//cashier list
Router.route('/cashierlist');

//cashier profile
Router.route('/cashierprofile');


