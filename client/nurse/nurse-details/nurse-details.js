    Template.nursedetails.onRendered(function () { 

    });
    
    Template.nursedetails.events({
            'click .submit-nurse' :function(){
                    var temp = $('input[name=temp]').val();
                    var weight = $('input[name=weight]').val();
                    
                    console.log(temp);
                    console.log(weight);
            }
    });