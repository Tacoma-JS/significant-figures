describe("Test suite for the sig-figs.js functions", function() {
    it("Calculating significant figures ...", function(){
        expect(1).toBe(1);	
    });
});

// - - - - - - - - - - - - - - - - - - - - - - - - 
describe("sf.sigFigures() returns the number of significant figures as a number.", function() {
    it("sf='0' should return 0", function(){
        var sf = new SigFloat('0');
        expect(sf.sigFigures()).toBe(0);	
    });
    it("sf='0.0' should return 0", function(){
        var sf = new SigFloat('0.0');
        expect(sf.sigFigures()).toBe(0);	
    });
    it("sf='0.0123' should return 3", function(){
        var sf = new SigFloat('0.0123');
        expect(sf.sigFigures()).toBe(3);	
    });
    it("sf='0.1230' should return 4", function(){
        var sf = new SigFloat('0.1230');
        expect(sf.sigFigures()).toBe(4);	
    });
    it("sf='0.123' should return 3", function(){
        var sf = new SigFloat('0.123');
        expect(sf.sigFigures()).toBe(3);	
    });
    it("sf='1.23' should return 3", function(){
        var sf = new SigFloat('1.23');
        expect(sf.sigFigures()).toBe(3);	
    });
    it("sf='123.0' should return 4", function(){
        var sf = new SigFloat('123.0');
        expect(sf.sigFigures()).toBe(4);	
    });
    it("sf='123.' should return 3", function(){
        var sf = new SigFloat('123.');
        expect(sf.sigFigures()).toBe(3);	
    });
    it("sf='123' should return 3", function(){
        var sf = new SigFloat('123');
        expect(sf.sigFigures()).toBe(3);	
    });
    it("sf='1230.' should return 4", function(){
        var sf = new SigFloat('1230.');
        expect(sf.sigFigures()).toBe(4);	
    });
    it("sf='1230' should return 3", function(){
        var sf = new SigFloat('1230');
        expect(sf.sigFigures()).toBe(3);	
    });
    it("sf='01230' should return 3", function(){
        var sf = new SigFloat('01230');
        expect(sf.sigFigures()).toBe(3);	
    });
    it("sf=Number.MAX_VALUE.toString() should return 17", function(){
        var sf = new SigFloat(Number.MAX_VALUE.toString());
        expect(sf.sigFigures()).toBe(17);	
    });
});

// - - - - - - - - - - - - - - - - - - - - - - - - 
describe("sf.toFixed() manage lack of leading zeros in front of decimal point", function() {
    it("sf='.1' should return '0.1'", function(){
        var sf = new SigFloat('.1');
        expect(sf.toFixed()).toBe('0.1');	
    });
    it("sf='-.1' should return '-0.1'", function(){
        var sf = new SigFloat('-.1');
        expect(sf.toFixed()).toBe('-0.1');	
    });
    it("sf='0.0' should return '0'", function(){
        var sf = new SigFloat('0.0');
        expect(sf.toFixed()).toBe('0');	
    });
    it("sf='1.0' should return '1.0'", function(){
        var sf = new SigFloat('1.0');
        expect(sf.toFixed()).toBe('1.0');	
    });
    it("sf='0.1' should return '0.1'", function(){
        var sf = new SigFloat('0.1');
        expect(sf.toFixed()).toBe('0.1');	
    });
    it("sf='0' should return '0'", function(){
        var sf = new SigFloat('0');
        expect(sf.toFixed()).toBe('0');	
    });
    it("sf='1' should return '1'", function(){
        var sf = new SigFloat('1');
        expect(sf.toFixed()).toBe('1');	
    });
    it("sf=Number.MAX_VALUE.toString() should return '1.7976931348623157e+308'", function(){
        var sf = new SigFloat(Number.MAX_VALUE.toString());
        expect(sf.toFixed()).toBe('1.7976931348623157e+308');	
    });
});


// - - - - - - - - - - - - - - - - - - - - - - - - 
describe("sf.toFloat() converts string to a number", function() {
    it("sf = '1' should return 1", function(){
        var sf = new SigFloat('1');//a string
        expect(sf.toFloat()).toBe(1);//a number	
    });
    it("sf = '.1' should return 0.1", function(){
        var sf = new SigFloat('.1');//a string
        expect(sf.toFloat()).toBe(0.1);//a number	
    });
    it("sf = '-.1' should return -0.1", function(){
        var sf = new SigFloat('-.1');//a string
        expect(sf.toFloat()).toBe(-0.1);//a number	
    });
    it("sf = '1.0' should return 1", function(){
        var sf = new SigFloat('1.0');//a string
        expect(sf.toFloat()).toBe(1);//a number	
    });
    it("sf=Number.MAX_VALUE.toString() should return 1.7976931348623157e+308", function(){
        var sf = new SigFloat(Number.MAX_VALUE.toString());
        expect(sf.toFloat()).toBe(1.7976931348623157e+308);	
    });
});

// - - - - - - - - - - - - - - - - - - - - - - - - 
describe("sf.toString()", function() {
    it("sf = '1.0' should return '1.0'", function(){
        var sf = new SigFloat('1.0');//a string
        expect(sf.toString()).toBe('1.0');//a number	
    });
    it("sf = '0' should return '0'", function(){
        var sf = new SigFloat('0');//a string
        expect(sf.toString()).toBe('0');//a number	
    });
    it("sf = 'a text string' returns 0", function(){
        var sf = new SigFloat('a text string');//a string
        expect(sf.toString()).toBe('0');//a number	
    });
});


// - - - - - - - - - - - - - - - - - - - - - - - - 
describe("sf.trailingZeros() counts the number of trailing zero", function() {

    it("sf = '.010' should return 1", function(){
        var sf = new SigFloat('.010');//a string
        expect(sf.trailingZeros()).toBe(1);//a number	
    });
    it("sf = '1.' should return 0", function(){
        var sf = new SigFloat('1.');//a string
        expect(sf.trailingZeros()).toBe(0);//a number	
    });
    it("sf = '1' should return 0", function(){
        var sf = new SigFloat('1');//a string
        expect(sf.trailingZeros()).toBe(0);//a number	
    });
    it("sf = '1.0' should return 1", function(){
        var sf = new SigFloat('1.0');//a string
        expect(sf.trailingZeros()).toBe(1);//a number	
    });
    it("sf = '1.00' should return 2", function(){
        var sf = new SigFloat('1.00');//a string
        expect(sf.trailingZeros()).toBe(2);//a number	
    });
    it("sf=Number.MAX_VALUE.toString() should return 0", function(){
        var sf = new SigFloat(Number.MAX_VALUE.toString());
        expect(sf.trailingZeros()).toBe(0);	
    });
});

//sf.isSignificantAt()
describe("sf.isSignificantAt(index) determines significance of the character at index offset into character string", function() {
    it("sf = '0.010' with index of 0, leading zero is not significant", function(){
        var sf = new SigFloat('0.010');//a string with a leading zero
        expect(sf.isSignificantAt(0)).toBe(false);//leading zero is not significant
    });
    it("sf = '0.010' with index of 1, decimal point is not significant", function(){
        var sf = new SigFloat('0.010');//a string with a decimal point
        expect(sf.isSignificantAt(1)).toBe(false);//decimal point is not significant
    });
    it("sf = '1.0e10' with index of 4, argument of an exponent is not significant", function(){
        var sf = new SigFloat('1.0e10');//a string with a exponent
        expect(sf.isSignificantAt(4)).toBe(false);//exponent is not significant
    });
    it("sf = '1.0e10' with index of 5, argument of an exponent is not significant", function(){
        var sf = new SigFloat('1.0e10');//a string with a exponent
        expect(sf.isSignificantAt(5)).toBe(false);//exponent is not significant
    });
    it("sf = '100' with index of 1, trailing zero not significant ", function(){
        var sf = new SigFloat('100');//a string with trailing zeroes
        expect(sf.isSignificantAt(1)).toBe(false);//trailing zero not significant, a logical value
    });
    it("sf = '100.0' with index of 1, trailing zero not significant (this seems to violate sig-fig rules)", function(){
        var sf = new SigFloat('100.0');//a string with trailing zeroes
        expect(sf.isSignificantAt(1)).toBe(false);//trailing zero not significant, a logical value
    });
    it("sf = '101' with index of 1, middle zero is significant ", function(){
        var sf = new SigFloat('101');//a string with middle zeroes
        expect(sf.isSignificantAt(1)).toBe(true);//middle zero is significant, a logical value
    });
    it("sf = '1.00' with index of 2, trailing zeros are significant ", function(){
        var sf = new SigFloat('1.00');//a string
        expect(sf.isSignificantAt(2)).toBe(true);//a logical value
    });
    it("sf = '1.00' with index of 3, trailing zeros are significant ", function(){
        var sf = new SigFloat('1.00');//a string
        expect(sf.isSignificantAt(3)).toBe(true);//a logical value
    });
    it("sf = '1.00' with index of 4, incorrect index is not significant ", function(){
        var sf = new SigFloat('1.00');//a string with characters 0..3
        expect(sf.isSignificantAt(4)).toBe(false);//there is no fourth character, a logical value
    });
});


//sf.withSigFigures(n)
/*
describe("sf.withSigFigures(n) comparison ... ?", function() {
    it("sf = '1' with n = 3, three significant figures", function(){
        var sf = new SigFloat('1');//a string
        console.dir(sf.withSigFigures(3));
        expect(sf.withSigFigures(3)).toBe(1.00);
    });
});
*/

//copy me
// - - - - - - - - - - - - - - - - - - - - - - - - 
describe("specs template following", function() {
    it("1 should be 1", function(){
        expect(1).toBe(1);	
    });
});
