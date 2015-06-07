describe("process bumps", function() {

  describe("rows", function() {
    
    it("should return all the rows from the spreadsheet data", function() {
      expect(rows(testSSData).length).toBe(17);
    });
    
    it("should return the first row of data as the first element", function() {
      expect(rows(testSSData)[0]['gsx$trainnumber']['$t']).toBe('314');
    });
    
  });

});
