# "Random" Seat Assigner

### Steps to be up and randomizing:
1. Clone this repository...
2. Install packages (```npm install```).
3. Replace the names in the file ```src/assets/cadets72.json OR src/assets/cadets74.json``` with the names of your cadets, keep in mind each inner array should correspond to the number of seats in each row from the front row to the rear. The order in "Jerk Mode" will be the same as in this file!
4. To change which file to use, go to ```src/components/Class.js``` and change the import on line 6.
5. Launch the app (```npm start```).
6. Visit ```localhost:3000```.
7. The application starts in "Random Mode", meaning the order of the seats will be assigned randomly. Press ```S``` to enter "Jerk Mode" and assign the seats by the same order as the file.
8. Zoom in / out to adjust.
9. Press ```space``` to assign a new seat, until all seats are complete.
10. Watch your puppets dance!
