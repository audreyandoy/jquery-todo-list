$(document).ready(function() {

	$('#formSubmit').submit(function() {
		if ($('input').val() !== '') {
			var $task = $('input').val();
			$('ol').append('<li>' + $task + '<span > x </span></li>');
		}
		else {
			alert("Please type something");
		};	
		$('input').val('');
		return false;
	}); 

	$('ol').on('click', 'span', function() {
		$(this).parent().remove();
	});

	$("#content").sortable();
	$( "#content" ).disableSelection();
});




