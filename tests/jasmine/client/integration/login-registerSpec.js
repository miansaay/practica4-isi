//Tests de Login
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

//Tests de Register
describe("Nuevo usuario registrado" , function() {

	it ("El usuario debe haberse registrado y logueado" , function() {
		$("a.register").click();

		setTimeout(function () {
			$("form.register input.email").val("honor@edx.com");
			$("form.register input.password").val("edx");

			spyOn(Accounts, "createUser").and.callThrough() ;

			$("form.register").submit();

			setTimeout(function () {
				  expect(Accounts.createUser).toHaveBeenCalled();
				  done() ;
			}, 500);
			done() ;
		}, 500);
	});
});
