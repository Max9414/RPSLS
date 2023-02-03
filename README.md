
# Rock Paper Scissors Lizard Spock

RPSLS is an easy game designed for any type of audience, especially for fans of the serie "The Bigbang Theory", as this version of the game became popular because of it. To make it a bit more exciting, the game presents 3 possible variations:
- classic
- 5vs5
- random

![Responsice Mockup](https://github.com/lucyrush/readme-template/blob/master/media/love_running_mockup.png)

## Features 

Fun, challenges and explanations all within sight and reachable with an easy click!

### Existing Features

- __Navigation Bar__

  - Mutable navigation bar, changing on the different pages to bring the game experience to the next level!
  - On the main page you can access all the 3 different games with each specific button.

![Nav Bar](https://github.com/lucyrush/readme-template/blob/master/media/love_running_nav.png)

  - On the original game you can just go back to the homepage, no different actions needed for the game.

![Nav Bar original]
  - On the 5vs5 game you have the home button and the reset button, to bring back the selected cards to 0.

![Nav Bar 5vs5]
  - On the random game you have the home button and the shuffle button, which will mix again the card to give you new ones!

![Nav Bar random]

- __The landing page__

  - As I focused mainly on the logic with javascript, the landing page is really simple, with a title, a subtitle, buttons to play and a pic to show briefly which card wins against which.

![Landing Page](https://github.com/lucyrush/readme-template/blob/master/media/love_running_landing.png)

- __Game Area section__

  - This section is the only section in the page that changes, mutating its HTML on every different button interaction
  - It has an easy grey colour background to help the user see clearly which one is the game section

![Game Area](https://github.com/lucyrush/readme-template/blob/master/media/love_running_ethos.png)

- __Original game section__

  - This section will allow the user to play the original game or bring them back to the homepage.
  - With every interaction with the card, a popup message will appear asking to confirm or cancel the choice.
  - The page will then change to show who won, update the score and show the played cards.

![Original Game](https://github.com/lucyrush/readme-template/blob/master/media/love_running_times.png)

- __Random game section__

  - This section will allow the user to play the random game, bring them back to the homepage or reshuffle the cards.
  - With every interaction with the card, a popup message will appear asking to confirm or cancel the choice.
  - The page will then change to show who won, update the score and show the played cards.
  - On shuffle, the function for the random game will be called again and it will give you 3 new cards.

![Random Game](https://github.com/lucyrush/readme-template/blob/master/media/love_running_times.png)

- __5vs5 game section__

  - This section will allow the user to play the 5vs5 game, bring them back to the homepage or reset the choice.
  - When all the 5 cards will be selected, a popup message will appear asking to confirm or cancel the choice.
  - Selecting the card again, the card will be deselected.
  - The page will then change to show who won, update the score and show the played cards for all 5 choices in order of choice.
  - On reset, the function for the 5vs5 game will be called again and it will basically deselect all the cards for the user.

![5vs5 Game](https://github.com/lucyrush/readme-template/blob/master/media/love_running_times.png)

- __The Footer__ 

  - The footer section has a counter for both player and PC that increases with every victory.
  - As a choice, I didn't make it reset on different games, I might add later on a button to start a new game, maybe pressing the title.

![Footer](https://github.com/lucyrush/readme-template/blob/master/media/love_running_footer.png)

- __Explanation section__

  - The Explanation section explains the various games to the user, so they can choose whatever they prefer.
  - It presents at the end a "Home" button to go back to the main page.

![Explanation section](https://github.com/lucyrush/readme-template/blob/master/media/love_running_gallery.png)

### Features Left to Implement

- New game function.  

## Testing 

Asked friends to test the game and play around with it to check that everything works smoothly.

I started this process pretty early in the creation as I thought it would have helped me improving the functions and it did!

Many bugs have been found for small mistakes in the code but now, even if still really too long, everything works smoothly.  


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmax9414.github.io%2Fpaper-scissor-spock%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)

### Unfixed Bugs

At the moment there are no bugs I'm aware of.

## Deployment 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://max9414.github.io/paper-scissor-spock/


## Credits 

I got the main picture in the homepage from [Blog]https://www.akshaybahadur.com/post/rock-paper-scissors-lizard-spock .

The single signs have been clipped from a [video]https://www.youtube.com/watch?v=zjoVuV8EeOU on youtube creator Samuel Dozett.

### Content 

- The text for the Home page was taken from Wikipedia Article A
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site


Congratulations on completing your Readme, you have made another big stride in the direction of being a developer! 

## Other General Project Advice

Below you will find a couple of extra tips that may be helpful when completing your project. Remember that each of these projects will become part of your final portfolio so it’s important to allow enough time to showcase your best work! 

- One of the most basic elements of keeping a healthy commit history is with the commit message. When getting started with your project, read through [this article](https://chris.beams.io/posts/git-commit/) by Chris Beams on How to Write  a Git Commit Message 
  - Make sure to keep the messages in the imperative mood 

- When naming the files in your project directory, make sure to consider meaningful naming of files, point to specific names and sections of content.
  - For example, instead of naming an image used ‘image1.png’ consider naming it ‘landing_page_img.png’. This will ensure that there are clear file paths kept. 

- Do some extra research on good and bad coding practices, there are a handful of useful articles to read, consider reviewing the following list when getting started:
  - [Writing Your Best Code](https://learn.shayhowe.com/html-css/writing-your-best-code/)
  - [HTML & CSS Coding Best Practices](https://medium.com/@inceptiondj.info/html-css-coding-best-practice-fadb9870a00f)
  - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#General)

Getting started with your Portfolio Projects can be daunting, planning your project can make it a lot easier to tackle, take small steps to reach the final outcome and enjoy the process! 