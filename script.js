/**
 * Forked from https://github.com/joshuaprince/jtprince.com/tree/master/discord
 */

var numStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function convert(input) {
    return input.toLowerCase()
		/* Replace spaces with 3 spaces for formatting */
        .replace(/\s/g, "   ")
		/* Replace letters with proper regional indicator string*/
        .replace(/([a-z])/g, ":regional_indicator_$1: ")
		/* Replace a match of '?!' or '!?' with the interrobang regional indicator string */
		.replace(/(\!\?)|(\?\!)/g, ":interrobang: ")
		/* Replace '!' with the exclamation-mark regional indicator string */
		.replace(/\!/g, ":exclamation: ")
		/* Replace '?' with the question-mark regional indicator string */
		.replace(/\?/g, ":question: ")
		/* Replace numbers with proper regional indicator using function below to get number string */
        .replace(/([0-9])/g, function ($1) {
            return ":" + numStr[$1] + ": ";
        });
}

function previewConvert(input) {
    return input.toLowerCase()
		/* Replace spaces with '<>' in order to change later, or else it'll mess up */
        .replace(/\s/g, "<>")
		/* Replace letters with twemojis*/
        .replace(/([a-z])/g, "<i class=\"twa twa-$1\"></i> ")
		/* Replace a match of '?!' or '!?' with the interrobang twemoji*/
		.replace(/(\!\?)|(\?\!)/g, "<i class=\"twa twa-interrobang\"></i> ")
		/* Replace '!' with the exclamation-mark twemoji */
		.replace(/\!/g, "<i class=\"twa twa-exclamation\"></i> ")
		/* Replace '?' with the question-mark twemoji */
		.replace(/\?/g, "<i class=\"twa twa-question\"></i> ")
		/* This is really dumb, but now replace the '<>' with a blank svg */
		.replace(/(\<\>)/g, "<i class=\"twa twa-blank\"></i> ")
		/* Replace numbers with proper twemojis using function below to get number string*/
        .replace(/([0-9])/g, function ($1) {
            return "<i class=\"twa twa-" + numStr[$1] + "\"></i> ";
        });
}


$(document).ready(function(){
	/* Runs the convert and preview functions whenever input is typed(keyup), backspaced(change), or pasted */
    $('#in').on('change keyup paste', function (e) {
        $('#out').val(convert($("#in").val()));
		$('#preview').html(previewConvert($("#in").val()));
    });

	/* Selects all of the output text whenever clicked inside */
    $('#out').focus(function() {
		this.select();
	});

});