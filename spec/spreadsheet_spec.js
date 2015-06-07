describe("process bumps", function() {
  
  var sheet;
  
  beforeEach(function() {
    sheet = new BumpSpreadSheet(testSSData);
  });

  describe("rows", function() {
    
    it("should return all the rows from the spreadsheet data", function() {
      expect(sheet.rows().length).toBe(18);
    });
    
  });
  
  describe("cell", function() {
    
    it("should return undefined for a row not in the sheet", function() {
      expect(sheet.cell(200, 'Train number')).toBe(undefined);
    });

    it("should return undefined for a column not in the sheet", function() {
      expect(sheet.cell(0, 'Nrain tumber')).toBe(undefined);
    });

    it("should return the data of the requested row and column", function() {
      expect(sheet.cell(0, 'Train number')).toBe('314');
    });
    
  });
  
  describe("bumpData", function() {
    
    it("should provide the total number of bumped bikes for a time and location", function() {
      expect(sheet.bumpData()['22nd Street']['314']['05/04/2015']).toBe(3);
    });
    
    it("should use the maximum number of bumps specified", function() {
      expect(sheet.bumpData()['22nd Street']['314']['05/05/2015']).toBe(4);
    });

    it("should sum tweeted bumps for the same time and location", function() {
      expect(sheet.bumpData()['22nd Street']['314']['05/06/2015']).toBe(3);
    });

    it("should the maximum of non-tweeted and tweeted bumps", function() {
      expect(sheet.bumpData()['22nd Street']['314']['05/07/2015']).toBe(3);
      expect(sheet.bumpData()['22nd Street']['314']['05/11/2015']).toBe(4);
    });

    it("should have separate information for each station and train", function() {
      expect(sheet.bumpData()['22nd Street']['314']['05/13/2015']).toBe(2);
      expect(sheet.bumpData()['22nd Street']['324']['05/13/2015']).toBe(3);
      expect(sheet.bumpData()['Millbrae']['324']['05/13/2015']).toBe(4);
    });

    it("should ignore entries without a train number", function() {
      expect(sheet.bumpData()['Redwood City']).toBe(undefined);
    });

  });

});
