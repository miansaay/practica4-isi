describe("prueba ", function () {

  beforeEach(function(done){
    Meteor.loginWithPassword("pepe@gmail.com", "mipassword", function(err){
        Tracker.afterFlush(done);
    });
  });

  afterEach(function(done){
    Meteor.logout(function() {
      Tracker.afterFlush(done);
    });
  });


  it("prueba", function () {
    

  });
});
