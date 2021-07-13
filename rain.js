window.onload = onPageLoaded

var x = Math.random()* 500; //起點x
var y = Math.random()* 25;  //起點y
var width = Math.random()* 0.5 + 1;   // 雨的寬度
var height = Math.random() * 20 + 30 ; // 雨的長度 50
var windowWidth = 1000;   // 雨能下的寬度
var windowHeight = 630;   // 雨能下的高度
var count = 50  //雨的數量

var arr = new Array();
var arrY = new Array();
	

// 每xx秒畫一次圖 (draw)
var IntervalOne = setInterval(draw, 200); 



// 網頁載入時
function onPageLoaded(){
	draw();
	createArray();
}

// 創造x的陣列
function createArray(){
	for(var i = 0; i < count; i++){
		arr[i] = Math.random() * windowWidth;
	}
	for(var i = 0; i < count; i++){
		arrY[i] = Math.random()* 25;
	}
}

// 改變起始位置  這邊指改變 x y
function changePosition(){
	for(var i = 0; i < count; i++){	
		if(arrY[i] <= windowHeight){
			arrY[i] += 10;	
		}else{
			arrY[i] = Math.random() * 10;
			arr[i] = Math.random() * 1000;
		}
	}
}


// 畫出來
function draw(){
	var canvas = document.getElementById("cvs");
	var context = canvas.getContext("2d");

	context.fillStyle = "#000000";
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	for(var i=0; i < count; i++){
		context.fillStyle = "white";
		changePosition();

		x = arr[i];
		y = arrY[i];
		context.fillRect(x, y, width, height);
	}
	
	
	// 下其他顏色雨
	
	/*
	for(var i=0; i < count; i++){
		context.fillStyle = "#77ffee";
		changey();
		changex();
		// console.log(x);
		// x = Math.random()* 500;
		// x = arr[i];
		context.fillRect(x, y, width, height);
	}
	*/
	
}
