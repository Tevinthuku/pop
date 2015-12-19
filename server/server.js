

Meteor.startup(function () {
     
   if (Meteor.users.find().count() === 0) {
     Accounts.createUser({
        username: 'tevin',
        email: 'tevinthuku@gmail.com',
        password: 'tevinrocks',
     });
     
    Accounts.createUser({
        username: 'tevo',
        email: 'tevothuku@gmail.com',
        password: 'tevinrocks',
     });
     
    Accounts.createUser({
        username: 'grace',
        email: 'gachagua288@yahoo.com',
        password: 'tevinrocks',
     }); 
    
}
   


 });
 
/*Meteor.startup(function () {
       if (Meteor.users.find().count() >= 3)
          Accounts.config({
              forbidClientAccountCreation : true
          });
  });*/

 Accounts.onCreateUser(function (options, user) {
     var numberOfUsers = Meteor.users.find().count();
     if (numberOfUsers >= 3) {
         Accounts.config({
             forbidClientAccountCreation : true
         });
     };
     if (numberOfUsers >= 3) 
       throw new Meteor.Error(403, "Signup forbidden");
     return user;
});

//roles

let doctor = "D9mWZERvPeHuZk6dq";
let nurse = "D9mWZERvPeHuZk6dq";

Roles.addUsersToRoles(doctor , 'customers' );