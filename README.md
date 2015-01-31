######254 VEX Scouting
======
For local storage we will be using the HTML5 localStorage (http://diveintohtml5.info/storage.html)
This local storage will be used for the client (iPad) to store ALL match results and which ones have been sent
It will also be used for the "server" (computer) which will used this as a database-ish system, and will save the object to a JSON file periodically (PHP

#####TODO
======
###Serverside:
*~QR codes~
*~Format QR code data~
*Save to JSON periodically
*Div to display extra data instead of alert
*Play sound when scanned
###Client:
*Better Modal for saving data
###Other:
*github.io page?
*__Code Cleanup__

#####Example Data Structure
======
"{"00000":"000!00!00!0!0!0!0!0!0!00","0243g":"000!01!01!1!1!0!0!0!0!15","0254g":"000!02!02!2!1!8!3!7!8!01","0254q":"000!01!02!2!1!0!0!0!0!04","teams":"0243g,00000,0254g,0254q"}"
