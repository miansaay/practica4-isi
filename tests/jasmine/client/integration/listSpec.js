describe("prueba de anadir listas", function () {

  beforeEach(function(done){
        
    Meteor.loginWithPassword('pepe@gmail.com', 'mipassword', function(err){
        Tracker.afterFlush(done);
    });
    
  });

  afterEach(function(done){
    
    Meteor.logout(function() {
      Tracker.afterFlush(done);
    });
    
  });


  it("deberiamos poder incluir nuevas listas despues de logearnos", function () {
    
    
    $("input[name='listName']" ).val('Hogar');
    $('form').submit(); 
    
    currentUser = String(Meteor.userId());
        
    setTimeout(function () {
      expect(Lists.findOne({createdBy: currentUser}).name).not.toBe(null);
    }, 5);
    
    
  });
});

