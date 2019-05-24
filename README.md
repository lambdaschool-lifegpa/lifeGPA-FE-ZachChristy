#App    LifeGPA
LifeGPA is a way for you to track your habits on a daily baises, keeping you accountable to the things that mean most you. Wether that be your health, your studies, or even relationships.

##Getting started
You can view a live demo over at https://wizardly-swirles-432569.netlify.com

To get the frontend running locally:

##Clone this repo
yarn  add to install all req'd dependencies
yarn start to start the local server (this project uses create-react-app)
Local web server will use port 4444 instead of standard React's port 3000 to prevent conflicts with some backends like Node or Rails.

Alternatively, you can add .env file in the root folder of project to set environment variables (use PORT to change webserver's port). This file will be ignored by git, so it is suitable for API keys and other sensitive stuff. Refer to dotenv and React documentation for more details. Also, please remove setting variable via script section of package.json - dotenv never override variables if they are already set.

##Making requests to the backend API
For convenience, we have a live API server running at https://newlifegpa.herokuapp.com for the application to make requests against. You can view the API spec here which contains all routes & responses for the server.

The source code for the backend server (available for Node, Rails and Django) can be found in the main lambdaschool-lifegpa repo.


##Functionality overview
The current state of the app has the functionality of Logging in, loging out, registering, showing user habits, and editing user habits.

##General functionality:

Authenticate users via JWT (login/signup pages + logout button on settings page)
Private Routes to the following functionality:
CRUD users (sign up & settings page - no deleting required)
CRUD Account
CRUD Habits
GET and display UserData, Habits, Categories
Post Profile, Habits,
PUT UserData, user Profile info, Categories, Habits
Delete Habits, user Profile,

#Follow other users
The general page breakdown looks like this:

Home page(URL: / ): Landing Page By UI
Sign in/Sign up pages (URL: /login, /register )
Use JWT (store the token in localStorage)
logout pages (URL: /logout )
Use JWT (remove the token in localStorage)
Dashboard page (URL: /#dashboard/:userid )
Article page (URL: /profile/:userid )
Editor Profile (URL: /update-profile )
Daily Approval page (URL: /daily-approvals/ )
List of user Habits page (URL: /habits-list)
Single User Habit page (URL: /habit/:id)
This is habit is selected by clicking on a habit in habit list
Post a Habit page (URL: /create-habit )
Post Category page (URL: /create-category)
Update Habit page (URL: /update-habit )
