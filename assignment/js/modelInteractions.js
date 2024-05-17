//adapted from example code 'benskitchen.com'

function cokeScene(){
    nSwitch = 0;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}

function spriteScene(){
    nSwitch = 1;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}

function pepperScene(){
    nSwitch = 2;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}


var spinning = false;

function spinX()
{
	spinning = !spinning;
	document.getElementById('model__RotationTimerX').setAttribute('enabled', spinning.toString());
}

function stopRotation()
{
	spinning = false;
	document.getElementById('model__RotationTimerX').setAttribute('enabled', spinning.toString());
	document.getElementById('model__RotationTimerY').setAttribute('enabled', spinning.toString());
	document.getElementById('model__RotationTimerZ').setAttribute('enabled', spinning.toString());
}

function animateModel()
{
    if(document.getElementById('model__RotationTimerX').getAttribute('enabled')!= 'true')
        document.getElementById('model__RotationTimerX').setAttribute('enabled', 'true');
    else
        document.getElementById('model__RotationTimerX').setAttribute('enabled', 'false');
}

function spinY()
{
	spinning = !spinning;
	document.getElementById('model__RotationTimerY').setAttribute('enabled', spinning.toString());
}

function stopRotation()
{
	spinning = false;
	document.getElementById('model__RotationTimerX').setAttribute('enabled', spinning.toString());
	document.getElementById('model__RotationTimerY').setAttribute('enabled', spinning.toString());
	document.getElementById('model__RotationTimerZ').setAttribute('enabled', spinning.toString());
}

function animateModel()
{
    if(document.getElementById('model__RotationTimerY').getAttribute('enabled')!= 'true')
        document.getElementById('model__RotationTimerY').setAttribute('enabled', 'true');
    else
        document.getElementById('model__RotationTimerY').setAttribute('enabled', 'false');
}

function spinZ()
{
	spinning = !spinning;
	document.getElementById('model__RotationTimerZ').setAttribute('enabled', spinning.toString());
}

function stopRotation()
{
	spinning = false;
	document.getElementById('model__RotationTimerX').setAttribute('enabled', spinning.toString());
	document.getElementById('model__RotationTimerY').setAttribute('enabled', spinning.toString());
	document.getElementById('model__RotationTimerZ').setAttribute('enabled', spinning.toString());
}

function animateModel()
{
    if(document.getElementById('model__RotationTimerZ').getAttribute('enabled')!= 'true')
        document.getElementById('model__RotationTimerZ').setAttribute('enabled', 'true');
    else
        document.getElementById('model__RotationTimerZ').setAttribute('enabled', 'false');
}

function wireframe()
{
	var e = document.getElementById('model');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}

var lightOn = true;
function headLight()
{
	lightOn = !lightOn;
	document.getElementById('model__LA_Point').setAttribute('headLight', lightOn.toString());
	console.log(lightOn);
}

function omniLight()
{
	lightOn = !lightOn;
	document.getElementById('model__LA_Point_002').setAttribute('omnilight', lightOn.toString());
	console.log(lightOn);
}

function targetLight()
{
	lightOn = !lightOn;
	document.getElementById('model__LA_Point_001').setAttribute('targetlight', lightOn.toString());
	console.log(lightOn);
}


function cameraFront()
{
	document.getElementById('model__CA_Camera').setAttribute('bind', 'true');
}

function cameraBack()
{
	document.getElementById('model__CA_Camera_001').setAttribute('bind', 'true');
}

function cameraLeft()
{
	document.getElementById('model__CA_Camera_002').setAttribute('bind', 'true');
}

function cameraRight()
{
	document.getElementById('model__CA_Camera_004').setAttribute('bind', 'true');
}
