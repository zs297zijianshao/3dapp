<!DOCTYPE html>
<head>
<meta http-equiv="content-Type" content="text/html; charset=UTF-8"/>
<title>JavaScript SWAP PAGE Contents Function</title>

<script type="text/javascript">

var counter=0;

function swap(selected)
{
    <!--First do not display all div id contents-->
    document.getElementById('home').style.display='none';
    document.getElementById('coke').style.display='none';
    document.getElementById('sprite').style.display='none';
    document.getElementById('pepper').style.display='none';
    document.getElementById('selected').style.display='block';
}

function changeLook()
{
    document.getElementById('theme').style.backgroundColor='#770000';
    document.getElementById('theme').style.fontFamily='arial.sans-serif';
    document.getElementById('theme').style.color='white';

}

function countUp()
{
    counter+=1;
    document.getElementById('result').innerHTML=counter;
}

function changeColor(newColor)
{
    var elem = document.getElementById('paral');
    elem.style.color=newColor;
}

</script>

</head>

<body>
    <p> <a href="javascript:swap('home')">Home</a>
    <a href="javascript:swap('coke')">Coca Cola</a>
    <a href="javascript:swap('sprite')">Sprite</a>
    <a href="javascript:swap('pepper')">Dr pepper</a>
</p>

<div id="home"><b>Home:</b>Welcome to my basic 3D APP</div>
<div id="coke" style="display:none;"><b>Coca Cola</b>Check out my 3D model</div>
<div id="sprite" style="display:none;"><b>Sprite</b>Check out my 3D model</div>
<div id="pepper"style="display:none;"><b>Dr pepper</b>Check out my 3D model</div>

<p>Click <a href='javascript:countUp()'>here</a>to count;
<div id="result"></div>
</p>

<p><input type="button" value="Click me!" onClick="changeLook()"/>to restyle the page</p>
<p id="paral">Some text here</p>
<button onclick="changeColor('green');">green</button>
<button onclick="changeColor('red')">red</button>

</body>
</html>
