$(function () {
    if (document.getElementById('aboutme') !== null) {
	    $('#aboutme').load("__shared/aboutme.html");
    }

    if (document.getElementById('contacts') !== null) {
	    $('#contacts').load('__shared/contacts.html');
    }

    if (document.getElementById('copyrights') !== null) {
	    $('#copyrights').load('__shared/copyrights.html');
    }
});