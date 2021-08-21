The puesedo code I decided to started with:
///When user opens when page the timer starts. Once the timer starts the user needs to click on one of the four options avaialable. Done
/// Then the user will receive feedback if his answer was correct or not.  
/// If the answer is correct then we will store the true value and update the counter
/// Then the user will have to click next to continue.
// Once the user clicks next then it will load another question and four answers. 
// The user will keep doing this until time runs out
// Then the user will be able to add his score to the high score list at the end and will be able to update his initials.

When I started the project I thought that the users score had to be equal to the number of question they got correct but after reading the readme for the project in disclosed that the score was determined by the time remaining. 

Things I did really well: 

1. intutitvely used 'clicks' to assign a number that corresponded to the button clicked and I stored said value into the variable UserChoice. 
Then I took the value UserChoice and compared it to the array of questions I created and based on the question count it would determine which object to access in the questions variable to compare userChoice to answer. Then based on the answer it would generate the next question or if the user incorrectly inputted an answer then it would decrease the time value by 10 secs.  

2. I was able to capture user score and intiials and place them into an array to store them for future use so if the user were to referesh the page it would break the leaderboard because it was always regenerated once the user decides to either play the game or to immediately to the leaderboard from the start screen. 

3. I figured out how to log correct and incorrect answers although that wasnt a requirement.

What I want to work on:
1. I want to intutitvely create elements upon a function being called because it would reduce the amount of redudent code I had to run to be able to display and or hide certain elements whenever x function was ran. 

2. I want to work on storing data storage information more efficiently on future projects because that was the part of the project I struggled the most on. 

3. Styling. I didnt use bootstrap because I started the project before we were introducted to it. So in the future I plan to work on formatting but for this project I was really just focused on the functionality over anything else. 