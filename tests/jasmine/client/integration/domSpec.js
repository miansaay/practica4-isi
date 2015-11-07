describe("Elementos del DOM con un usuario no logueado", function () {

  beforeEach(function (done) {
    Meteor.logout(function() {
      Tracker.afterFlush(done);
    });
  });

  it("No debe se capaz de crear una lista nueva", function(){
    var Listlogout = $("[name='listName']");
    expect(Listlogout.length).toBe(0);
  });

  it("No debe ser capaz de hacer logout", function(){
    var logout = $("[class='logout']");
    expect(logout.length).toBe(0);
  });

  it("No debe ser capaz de loguearse ni registrase", function(){
    var length = $("a.login").length + $("a.register").length;
    console.log(length);
    expect(length).toBe(0);
  });
});

describe("Elementos del DOM con un usuario logueado", function () {

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

  it("Debe se capaz de crear una lista nueva", function(){
    var Listlogin = $("[name='listName']");
    expect(Listlogin.length).toBe(1);
  });

  it("Debe ser capaz de hacer logout", function(){
    var logout = $("[class='logout']");
    expect(logout.length).toBe(1);
  });

  it("No debe ser capaz de loguearse ni registrase", function(){
    var length = $("a.login").length + $("a.register").length;
    console.log(length);
    expect(length).toBe(0);
  });
});
