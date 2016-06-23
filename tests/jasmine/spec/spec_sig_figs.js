describe("WHERE: var sf = new SigFloat('123.4567');", function() {
  it("sf.sigFigures() returns 7 as the number of significant figures", function() {
    var sf = new SigFloat('123.4567');
    expect(sf.sigFigures()).toBe(7);
  });  
});

describe("WHERE: var sf = new SigFloat('123.');", function() {
	  it("sf.toFixed() returns the numbers before the decimal if no sig figs behind decimal", function() {
    var sf = new SigFloat('123.');
    console.log("sf.toFixed: " + sf.toFixed());
    expect(sf.toFixed()).toBe('123');
  });

});