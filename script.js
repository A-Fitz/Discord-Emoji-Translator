/**
 * Forked from https://github.com/joshuaprince/jtprince.com/tree/master/discord
 */

var numStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function convert(input) {
    return input.toLowerCase()
		/* Replace spaces with 3 spaces for formatting */
        .replace(/\s/g, "   ")
		/* Replace letters with proper regional indicator using function below */
        .replace(/([a-z])/g, ":regional_indicator_$1: ")
		/* Replace a match of '?!' or '!?' with the double indicator */
		.replace(/(\!\?)|(\?\!)/g, ":interrobang: ")
		/* Replace '!' with proper indicator */
		.replace(/\!/g, ":exclamation: ")
		/* Replace '?' with proper indicator */
		.replace(/\?/g, ":question: ")
		/* Replace numbers with proper regional indicator using function below */
        .replace(/([0-9])/g, function ($1) {
            return ":" + numStr[$1] + ": ";
        });
}


$(document).ready(function(){
	/* Runs the convert function whenever input is typed(keyup), backspaced(change), or pasted */
    $('#in').on('change keyup paste', function (e) {
        $('#out').val(convert($("#in").val()));
    });

	/* Selects all of the output text whenever clicked inside */
    $('#out').focus(function() {
		this.select();
	});

});