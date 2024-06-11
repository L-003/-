//变量定义，定义5个变量
var bannerimg = $(".head .banner>div");  //轮播图所在容器
var lrbutton = $(".head .lrbutton>li");  //左右按钮所在容器
var smallbutton = $(".head .smallbutton>li");  //小圆点所在容器
var index = 0;  //当前轮播索引
var dingshiqi ;  //定时器
zidong();
lrclick();
zhiding();
//图片切换函数
function imgqie(index){
	$.each(bannerimg,function(i,val){
		$(this).removeClass("show");
		$(this).addClass("hide");
		$(smallbutton[i]).addClass("btnstylehide");
	})
	$(bannerimg[index]).addClass("show");
	$(smallbutton[index]).removeClass("btnstylehide");
	$(smallbutton[index]).addClass("btnstyleshow");
}
//自动轮播函数 zidong实现自动轮播效果 setInterval定时触发轮播 index设置为0，并调用imgqie
function zidong(){
	dingshiqi=setInterval(function(){
		if(index==bannerimg.length-1){
			index=0;
			imgqie(index);
		}else{
			index++;
			imgqie(index);
		}
	},4000)
}
//左右点击函数 lrclick用于实现左右按钮点击事件  清除定时器dingshiqi
function lrclick(){
	let leftbutton=lrbutton[0];
	let rightbutton=lrbutton[1];
	$(leftbutton).click(function(){
		clearInterval(dingshiqi);
		if(index==0){
			index=bannerimg.length-1;
			imgqie(index);
		}else{
			index--;
			imgqie(index);
		}
		zidong();
	})
	$(rightbutton).click(function(){
		clearInterval(dingshiqi);
		if(index==bannerimg.length-1){
			index=0;
			imgqie(index);
		}else{
			index++;
			imgqie(index);
		}
		zidong();
	})
}
//小圆点点击函数 zhiding用于实现小圆点点击事件
function zhiding(){
	$.each(smallbutton,function(i,val){
		$(val).click(function(){
			clearInterval(dingshiqi);
			index=i;
			imgqie(index);
			zidong();
		})
	})
}