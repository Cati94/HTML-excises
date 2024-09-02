var a=1,
    b=2,
    output=document.getElementById('output');

output.innerHTML="<p>Original: "+a+", "+b+"</p>";

b = [a, a = b][0];

output.innerHTML+="<p>Swapped: "+a+", "+b+"</p>";
<div id="output"></div>