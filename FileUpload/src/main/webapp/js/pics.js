

function pics(){
	$(".img-box").append($("<input style='display: none' type='file'  class='file'  />"));
	
	
	var imgContainer = $(".z_photo"); //存放图片的父亲元素
	function delpic(jq){
		jq.parent().remove();
	}
	function addpic(url){
		
		 var $section = $("<section class='up-section fl loading'>");
			     imgContainer.prepend($section);
			 var $span = $("<span class='up-span'>");
			     $span.appendTo($section);
			
		     var $img0 = $("<img class='close-upimg'>").on("click",function(event){
				   delpic($(this));
				   event.preventDefault();
					event.stopPropagation();
					
				});   
				$img0.attr("src","img/a7.png").appendTo($section);
		     var $img = $("<img class='up-img up-opcity'>");
		         $img.attr("src",url);
		         $img.appendTo($section);
		         var $input = $("<input name='files'  value='"+url+"'>").css("display","none");
		         $input.appendTo($section);
		       setTimeout(function(){
		             $(".up-section").removeClass("loading");
				 	 $(".up-img").removeClass("up-opcity");
				 },450);
	}
	
	$(".add-img").on("click","",function(){
		$(".file")[0].click();
	});
	
	$(".file").on("change","",function(){
		var formData = new FormData();
    		formData.append("file",$(".file")[0].files[0]);
    	$.ajax({
        url:'sss.do',
        type:'post',
        data: formData,
        contentType: false,
        processData: false,
        success:function(res){
           addpic(res);
        }
    });
	});
	
	this.init = function(urls){
		for(var i=0;i<urls.length;i++){
			addpic(urls[i]);
		}
	}
	
	this.initpics = function(urls){
		$("item").each(function(){
			addpic($(this).attr("url"));
		});
		$("item").remove();
	}
	
}

var picsobject=new pics();

function pics_init(urls){
	picsobject.init(urls);
}

$(function(){
	picsobject.initpics();
	
})






