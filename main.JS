Canvas = document.getElementById("cnvs");
Caneta = Canvas.getContext("2d");

Caneta.beginPath();
Caneta.strokeStyle = "red";
Caneta.lineWidth = 1;
Caneta.rect(150, 143, 430, 200);
Caneta.stroke();

Caneta.beginPath();
Caneta.strokeStyle = "red";
Caneta.lineWidth = 2;
Caneta.arc(380, 250, 40, 0, 2 * Math.PI);
Caneta.stroke();

Caneta.beginPath();
Caneta.strokeStyle = "green";
Caneta.lineWidth = 2;
Caneta.arc(335, 300, 40, 0, 2 * Math.PI);
Caneta.stroke();

Caneta.beginPath();
Caneta.strokeStyle = "black";
Caneta.lineWidth = 2;
Caneta.arc(295, 250, 40, 0, 2 * Math.PI);
Caneta.stroke();

Caneta.beginPath();
Caneta.strokeStyle = "yellow";
Caneta.lineWidth = 2;
Caneta.arc(250,300 , 40, 0, 2 * Math.PI);
Caneta.stroke();

Caneta.beginPath();
Caneta.strokeStyle = "blue";
Caneta.lineWidth = 2;
Caneta.arc(210,250 , 40, 0, 2 * Math.PI);
Caneta.stroke();