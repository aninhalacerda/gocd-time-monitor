var goTimeMonitor = require ('../models/time_history');

describe('Get last scheduled time', function(){
  it ("should get last scheduled time for specific pipeline", function(done){
  	goTimeMonitor.timeHistory("pipe", function (response) {
  		expect(response).toEqual({ "last_scheduled" : "today" });
  		done();
  	});
  });
});