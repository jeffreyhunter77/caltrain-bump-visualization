describe("updateTimeTable", function() {
  
  beforeEach(function() {
    stations = ['SF','Milbrae'];
    $('.northbound').html('');
  });

  it("should produce a row per station", function() {

    updateTimeTable(".northbound", ['100'], [['8:00','8:10']]);

    expect($('.northbound li').length).toBe(2);
    expect($('.northbound li .station:first').text()).toBe("SF");
    expect($('.northbound li .station:last').text()).toBe("Milbrae");

  });
  
  it("should show the train number", function() {

    updateTimeTable(".northbound", ['100'], [['8:00','8:10']]);

    expect($('.times.northbound .stop').text()).toBe("100");

  });

  it("should show the stop times", function() {

    updateTimeTable(".northbound", ['100'], [['8:00','8:10']]);

    expect($('.schedule.northbound .stop').length).toBe(2);
    expect($('.schedule.northbound .stop:first').text()).toBe("8:00");
    expect($('.schedule.northbound .stop:last').text()).toBe("8:10");

  });

});
