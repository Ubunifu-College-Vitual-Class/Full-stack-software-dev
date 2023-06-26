


var htmlContent = "";
$.get('https://mocki.io/v1/75162db7-d5f8-4ebc-a6d9-748a13e1326f',function(data){

		data.forEach(function(item){

			htmlContent += '<div class="col-xs-6 col-lg-4">';
			htmlContent +='<h2>'+item.productname+'</h2>';
			htmlContent +='<p>'+item.description+'</p>';
			htmlContent +='<img src='+item.image+' style="width:auto;height:200px"></img>';
			htmlContent +='<p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>';
			htmlContent += '</div>';
			$('#htmlcontent').html(htmlContent);
			console.log(item.productname);
		});
},"json");


/*$.ajax('https://mocki.io/v1/df87e224-709d-4f90-928d-c5366410c44e', // request url 
{ 
	success: function (data, status, xhr)
  	{	
      $('#model').html(data.firstname); 
	  $("#test").val(data.firstname);
	  
	  $("#model").append("Some appended text.");

	  
	  
	  $('p').append(data); 
	} 
}); */

/*
postvariableObjects ={
	id:2,
	name:'my random name'
}
$.post('https://mocki.io/v1/df87e224-709d-4f90-928d-c5366410c44e',postvariableObjects,function(data){
	console.log(data);
});

$(document).ready(function(){


});

function doSomethingHere(){
	//alert("am clicked!!!");
	$("#msgDiv").addClass("design"); 

}

$("#click_me").click(function(){
	doSomethingHere();
});

$('#msgDiv').load('index.html', { name: 'bill' },function(data, status, jqXGR) { 	
  alert('data loaded')
});
*/
