
$(document).ready(function()
{
    //javascript gallery generator
    //create the XMLhttprequest object for communicating with the web server
    var xmlHttp = new XMLHttpRequest();
    //stores number of hozizontalcolumns gallery has, if too large it wont fit in browser
    //var numberOfColumns = 2;
    //stores newly generated gallery HTML code
    var htmlCode = "";
    // Temporarily stores server response while code is generated
    var response;
    //insert code
    var send="scripts/php/hook.php";
    xmlHttp.open("GET",send,true);
    xmlHttp.send(null);
    xmlHttp.onreadystatechange=function()
    {
        if(xmlHttp.readyState==4)
        {
            //alert(xmlHttp.responseText);
            //tokenise the response
            response=xmlHttp.responseText.split("~");
            //start to write the HTML code into htmlcoe string
            //htmlCode += '<tr>';
            //loop round the respose array of tokens, which are the image names;
            for(var i=0;i<response.length;i++)
            {
                htmlCode += '<a href="assets/images/gallery_images'+ response[i] +' ">';
				htmlCode += '<img class="card-img-top img-thumbnail" src="assets/images/gallery_images' + response[i] + '"/>';
				htmlCode += '</a>';	
            }
                //write html code into gallery
                //document.getElementById('gallery').innerHTML=htmlCode;
            if(document.getElementById('gallery_coke')!=null)
                {
                    document.getElementById('gallery_coke').innerHTML=htmlCode;
                }
            if(document.getElementById('gallery_pepsi')!=null)
                {
                    document.getElementById('gallery_pepsi').innerHTML=htmlCode;
                }

            if(document.getElementById('gallery_pepper')!=null)
                {
                    document.getElementById('gallery_pepper').innerHTML=htmlCode;
                }
        }
    }
});