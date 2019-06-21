# :seedling: RE4.W: Recycling Heroes 

[![Netlify Status](https://api.netlify.com/api/v1/badges/0a4736b3-c0be-4efe-9b3f-4810feb0b204/deploy-status)](https://app.netlify.com/sites/recycling-heroes/deploys)


https://recycling-heroes.netlify.com/

![Recycling Heroes homepage](https://i.imgur.com/7Fw07Pzl.png)

## About

**The Problem:** Lots of potential recyclables are thrown in the wrong bin - people just aren't educated enough about this. It would be good to educate children from a young age in what can and can't be recycled. 

**The Solution:** Recycling Heroes is an interactive, educational game for primary school students and their teachers that will better student understanding of recycling and environmental concerns.

![image alt](https://media.giphy.com/media/1YctWh7oIsZPkTXMw2/giphy.gif)


## Tech Stack

* Built with React & Styled Components
* Deployed on Netlify using Netlify Functions for a serverless application
* Tested with Jest, ESLint and Prettier 
* Our database is Airtable
* We used ReactDnD for our game functionality

## The App

Currently the app is a Minimum Viable Product (MVP) primarily focussing on the drag and drop game and educating kids with tips and facts of what they can and how they can recycle certain items.

The app loads data from an external database to populate a game. The game requires the user to drag and drop rubbish items into the correct bin. At the end of the game, the user can see their score, and click on items to see facts about the rubbish they just sorted.


## User Journeys

* As a student, I want to learn about the environment.
* As a teacher, I want my students to be able to teach themselves about the environment.

## User Stories
<details>
<summary> Student </summary>

 - [ ] I want to be able to search for different products in order to understand if they are recyclable

- [x] I want to know if a product is recyclable through playing a game

- [x] I want to be able to find out additional information about the product through playing a game

- [x] I want to see a fact that I can understand & visualise

- [x] I would like to have visual aids to help me understand the information

- [x] I want to get scores for answering questions correctly

- [ ] I would like to be able to contribute my score to our overall class score

- [ ] I want to be able to have the same categories shown to me multiple times in order to help me remember them (frequency of 8)

- [ ] I would like to have an introduction to what recycling is, and what happens to waste when things are not recycled

#### Stretch Goals 

- [ ] I would like learn about how much water goes into making different types of food

- [ ] I would like to learn about wider environmental issues outside of recycling


</details>

<details>
<summary> Teacher </summary>

- [x] I want my students to be able to play the game by themselves

- [ ] I want my students to login to the app with their name / pin / password

- [ ] I want to be able to register my class in order to keep track of our score

- [ ] I want my students to be able to use the app at different times and results tracked

- [x] I want the students to be able to easily follow the app / story line without supervision

- [ ] I want to be able to have an overview of all the questions and answers 

#### Stretch Goals

- [ ] I would like to be able to see the scores / time of use the students have on the app


</details>


## Prototyping

Prototype built in [Figma](https://www.figma.com/file/IV6lJc5K9AlAhFYehxRk11c0/RE4.W?node-id=5%3A116)

Showcases idea of the completed app, including stretch goals such as leaderboards, character creation, a comic-based story mode and a 'recycling cave' where you can look up what you can and can't recycle.


### Leaderboards
![](https://i.imgur.com/g2g9Sm0.png)

### Character Creation
![](https://i.imgur.com/vwaewGi.png)

### Adventure Mode
![](https://i.imgur.com/9lSmevO.png)

### Recycling Cave
![](https://i.imgur.com/JiNKrl4.png)

## How to install a local version of *Recycling Heroes*:

<details>
<summary> Instructions </summary>
1. Clone this repo onto your local machine  

```git clone https://github.com/FAC-Sixteen/RE4.W.git```

2. Install dependencies 

```npm i```

3. Start local server

``` netlify dev ```

4. Open your browser to: 

*https://localhost:8888*

:heavy_plus_sign: See our test results

``` npm devTest ```

The app does require environment variables to run using the Airtable API key.

</details>

## ToDo

If we had more time, we would...
* Add user authentication
* Build a 'choose your avatar' feature
* School leaderboards
* Separate login for teachers with extra features
* Add our beautiful storyboard!
* Add a 'recycling cave' where users can search for items that can\can't be recycled
