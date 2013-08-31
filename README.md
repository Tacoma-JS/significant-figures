# sig-figs.js
sig-figs.js introduces the `SigFloat` object, which manages the number of significant figures associated with a value. Negative numbers and scientific notation are both well supported. Create a new SigFloat using either a number or string argument like so.

	var sf = new SigFloat('123.4567');

Convert to other types using the `toString()`, `toFixed()`, and `toFloat()` functions.

Get the number of significant figures as an integer using `sigFigures()`.

Return a new SigFloat with *n* significant figures using `withSigFigures(n)`.