#VEX Scouting
This is a scouting web app built for the VEX Robotics Competition. It is made to allow scouts to review individual robots during matches, and then use qr codes to save information to a main computer. From the main computer it can be viewed or download as a csv. Feel free to contribute to the code, learn from it, or even use it for your own team. If you do use it, please add the .csv to the pastTournaments folder.

###TODO
#####Serverside:
- [X] QR codes
- [X] Format QR code data
- [ ] Save to JSON periodically
- [ ] Div to display extra data instead of alert
- [ ] Play sound when scanned
- [ ] Table Sorting

#####Client:
- [ ] Better Modal for saving data

#####Other:
- [ ] github.io page?
- [ ] __Code Cleanup__

###Example Data Structure
```”
{“00000":"000!00!00!0!0!0!0!0!0!00","0243g":"000!01!01!1!1!0!0!0!0!15","0254g":"000!02!02!2!1!8!3!7!8!01","0254q":"000!01!02!2!1!0!0!0!0!04","teams":"0243g,00000,0254g,0254q"}"
```

###Past Tournaments
- [4th Annual Central Valley Skyrise Tournament - RE-VRC-15-1423](https://github.com/trvrsalom/254_VEX-Scouting/blob/master/pastTournaments/RE-VRC-15-1423.csv)
***
Made by Team 254

