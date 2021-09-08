# Curriculum Vitae

Status: Work in progress

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
