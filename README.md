# Curriculum Vitae

Status: Work in progress

NOTE: Some of my commits say updated README.js. by this i mean README.md.

08-09-2021:

I started out by using my paper Curriculum Vitae as an example point. I wrote down every RGB from the colors and de fonts that was used in de paper CV.

- main color: rgb:124,218,253
- secondary color: rgb:222,224,228
- text color: rgb:150,150,150
- font-family: Heebo, sans-serief

In the HTML i added a few links for the font and icons:

https://fonts.googleapis.com/css2?family=Heebo:wght@300&display=swap

https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css

I want to make the CV mobile-First. After a small example i did, i decided to use flexbox instead of CSS Gridd. I also decided to do this project the Block.Element.Modifier way, and use SASS.

I started with the header with my profile picture and name. for the navigation i used a hamburger icon that i call with vanilla Javascript.
I also want to do this with the items in the navigation instead of using A tags. If i would do that the only thing i do with javascript is the navigation toggle. By using Javascript to change the main page i want to show that i know how to manipulate the DOM.

I got the hamburger to work. It is showing me the menu i want. it needs a little tweeking to make it look like its coming from the left. For now it looks like it just appears and disappears. I come back to this when i am almost at the end.

I made a container for the main. this is the container i want to use to manipulate the DOM. For this it has the following names:

- id="mainContainer"
- Class="main\_\_container"

Each name i can call with a querySelector. I want to try to use Vanilla javascript as much as i can.

first i gave the main some input, so it has something to see when u start te App. it contains a profile with my motivation. A Contact with my address, phone and e-mail. At the bottom i made a span like a footer. there are three Icons that are links to my Github, my linkedIn and my Facebook account. And last thing for today is to style the main and the footer for the mobile.

09-09-2021

I started the day with making a 'click' event on the home button. Because it only contains two lines of code, i did not think it would be necessary to make a separate JS file for it. So i installed this in the navigation.js

Next thing on the list. i make a experience.js file for the experience (werkervaring) link. First i test if the navigationToggle function works while clicking on the 'home' and 'werkervaring' words. Then i build the page in javascript. and see if this wil change the DOM.

After i created the experience page, i test it and i immediately see a flaw in the code. the experience.js changed the DOM. but when i click home, it does not return back. this is a new experience for me. the only thing i can think of is to make a home.js file with code to refresh the page. only then u see the text i made in the HTML.

I found a way to refresh the page to the home page by recoding the home click event in the navigation. Do it stutters when u click the page instead of changing the page when u click werkervaring.

const home = document
.querySelector("#home")
.addEventListener("click", () => {
window.location.reload(true);
});

But for now, it does wat i want it to do. I put it on my list of 'thingsThatNeedToBeLookedAt'.

I forgot to make a container for the experiance text like i did with the home page. and gave it a class name for the style:

- experienceContainer.className = "main\_\_container--experience";

For the education page i want to make a array list that contains information. with this information i dont have to make a long function like i did with the experience page. I can use Array methods like forEach() to make every list item the same. maybe i do this later on with the experience page.

Now that is done i made a education.js and made a function that i give the education information as argument. this repeats a h3 as title of the education. then a h4 witch is a title for the where and when. and a P for a definition about the education. I am happy with the results.

Made training.js and did the same thing as the education function. Styling wil be done later.

13-09-2021

I made the naxt page of my skillset. I downsised the skilss to six important skills:

- MS Office
- HTML
- CSS
- Javascript
- Visual Studio Code
- Corel Paintshop Pro

i found a CSS method on Youtube to make wheels that turn like the ones on my paper CV. it took a while to make them mobile first but i got this.

14-09-2021

Today i do the page with some codes i made the last months. i give the reader a choice by tapping on a link to Netlify and a link to GitHub. Not all my codes are made mobile first so there is a chance i have to make some of them mobile first. first i want to see what codes i want to show. Maybe a game or my first website i made out of HTML and CSS.

i have added the following codes:

- my first webpage
- B.E.M. & SASS assignments
- Movieseeker
- Guess the game

Other codes will follow.

15-11-2021

Its been a while sinds my last code. I want to finish the Curriculum Vitae.
First i have read what i already have done in the README.

I add my new work experiance and made a SCSS change to the nav bar. When hovering ove you now see a pointer.
