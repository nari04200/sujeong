// スマホ用メニュー　クラス追加
		$(function(){
		$(".menubtn").on("click", function(){
			$(this).toggleClass('is-active');

			if($(this).hasClass('is-active')){
				$('.globalnav').addClass('is-active');
			}else{
				$('.globalnav').removeClass('is-active');
			}
		});
	});

// スムーススクロール
      $(function(){
      var width =  $(window).width();
      $('a[href*="#"]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
      });
      });
