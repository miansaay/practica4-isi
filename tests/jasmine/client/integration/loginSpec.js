describe("Prueba de login", function () {
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

  it("El usuario debe loguearse", function(){
    var user = Meteor.user();
    console.log(user);
    expect(user).not.toBe(null);
  });
});
