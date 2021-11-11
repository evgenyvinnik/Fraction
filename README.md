# Fraction Take Home Challenge

Welcome, and congratulations on proceeding to the take-home challenge portion of the interview process! 

For this challenge, you will be setting up a simple web app frontend to show a list of 
users and their loan applications. We've provided a working backend in the `backend` directory.

We realize that this is a coding challenge and time might be limited. 
Please feel free to leave comments explaining
anything that required compromises. 

### What comes in the box
You have been provided the following:

1. A web app built with React. The code for that app can be found in the `/frontend` folder.
2. The backend server built with Express, found in the `backend` folder.

You are free to use this starter template, or you can use your own setup if you'd prefer.
We only ask that:
1. Both parts (frontend and backend) are written in Typescript, 
2. The frontend uses React, and  
3. The backend uses the code found in the `backend/src/db` directory for fetching and modifying the data.

### Goals

You've been assigned to build a simple MVP of the Fraction web app. The web app should have three screens: 

- A list of users
- A list of applications. 
    - Should show all the applications. 
- A single application's screen, where you can change the status of that application. Don't worry about permissions or auth
  for modifying the status, assume anyone can do it.

_NOTE: the changes to the database don't need to be persisted across restarts of the backend._

The design team has handed you the following designs in Figma:
https://www.figma.com/file/QmMg4i4jtbqIAqTcpLEBWe/Fraction-Engineering-Take-Home-Challenge 

Please build the three screens, modifying and adding to the frontend code as necessary. 

Implementation details are up to you to decide. 
You are welcome to use any open source third-party packages you'd like, but you aren't required to use any.

### Suggested Milestones

#### Milestone 1
- Get the backend server running.
- Set up the frontend code to fetch from the list of users endpoint, printing the result with `console.log`

#### Milestone 2
- Create the component needed to render a user card
- Populate the list of user cards on the screen

#### Milestone 3
- Set up the request to call the backend endpoint to fetch code for the application list
- Create the component needed to render an application card
- Populate the list of application cards on the screen

#### Milestone 4
- Set up the layout for the single application screen
- Set up an endpoint to modify an application's status
- Create the component to choose an application's new status

#### Milestone 5
- Hook up touches on each card component to go to the appropriate page
- Create the navigation header component and add it to each screen

### Running the code

Simply run `npm start` or `yarn start` in each the `frontend` and the `backend` directories, 
and then go to http://localhost:3000 in your browser to access the frontend.

### Delivering your work
You can just zip up your source code and email it back. 

Remember to _not_ include the `node_modules` and `dist` directories.

**To avoid other candidates copying the solution, 
please don't publish your project to GitHub or other open repositories.**  
  
