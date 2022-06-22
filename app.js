let output = document.getElementById('output');

function time(){

    let date = new Date();
   	let hour = date.getHours();
   	let min = date.getMinutes();
   	let sec = date.getSeconds();
	let time = date.toLocaleTimeString();

		output.innerHTML = time;
	} 

	setInterval(time,1000);
