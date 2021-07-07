# Quiz using JavaScript

## Project Description

 This project is a timed codeing quiz with multiple-choice questions.  This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code and the score is stored in local storage.   
 The game rules are
  1. User sholud answer all the questions before the given time.
  2. For each incorrect answer  will penalize your score time by 10 seconds.

  The user is given set of multiple choice questions when clicking on the start quiz button.
  The timer starts ticking immediately.
  Upon user selection the next question is loaded.
  Incorrect answer will reduce time by 10 seconds.
  After answering all the questions user  is asked to enter the  initial. 
  The initial and the score will be stored and when 'highScore' button is clicked the initial and the score will be displayed.
  'Clear Score' will clear the user initial and the store it in the local storage.
  The 'Go Back' button will navigate to the main page where the 'start quiz' will be displayed.
  click on this [link](https://sangeethanr.github.io/Quiz/index.html)

  The landing page looks like below
      ![landing Page image](/Assets/images/Screenshot.png)

 ## Technologies Used
  
1. HTML
2.  CSS
3. JavaScript

## Functionality used to achieve the acceptance criteria

 The questions for the quiz is stored as a array with the choices as well as the correct answer.

 when the user clicks the start button,the first question pops up with the choices.

 When the user clicks an answer there is a function which checks the user selected answer with the correct answer stored in an array.
   If the answer is correct the score will be increased by 10,
   If the user selected incorrect answer the score for that answer is 0 and the time is reduced by 10 seconds.

When the User finished all the quesstions ,final score is displayed and the textarea where the initals should be entered is displayed.

Upon clicking on the 'view highscores' will display the entered value.

Clicking 'Go Back' will will take the user to the beginning of the page. 

Clicking on 'Clear Scores' will delete the user latest scoreand initials.


## Installation
On GitHub, navigate to the main page of the repository.
  To clone the repository using HTTPS, under "Clone with HTTPS", click . To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click clipboard image . To clone a repository using GitHub CLI, click Use GitHub CLI, then click clipboard image .

  open Git Bash
  
  Change the current working directory to the location where you want the cloned directory.
  
  Type git clone, and then paste the SSH  you copied earlier.

$ git clone git@github.com:sangeethaNR/Quiz.git
Press Enter to create your local clone.

$ git clone git@github.com:sangeethaNR/Quiz .git
> Cloning into `Spoon-Knife`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.

 You installed the project to your local!!!
 
  Link to the deployed application https://github.com/sangeethaNR/Quiz
  
  Landing Page  https://sangeethanr.github.io/Quiz/index.html

  
  ## Credits
  github.com
  google.com
  w3Schools.com