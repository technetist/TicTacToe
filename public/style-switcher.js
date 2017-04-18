$(document).ready(function(){
	
	$('#theme-icons li').click(function(e){
		e.preventDefault();
		
		$elem = $(this);
		
		$('link#theme').attr('href', 'designr-theme-'+$elem.attr('id')+'.css');
		
		$('link#theme').load(function(){
			$('link#main').attr('href', 'designr-theme-'+$elem.attr('id')+'.css');
		});
	});
});