# Leboncoin FrontEnd technical test :

## Running locally

- Download or clone the repository
- Run `npm install` with the terminal inside the project file 
  to install dependencies.
- Run `npm run start-server` in a terminal to start the nextJs app on http://localhost:3000.
- Run `npm run dev` in another terminal to start the server on http://localhost:3005.

### Description
The implemented features of the project were: 

1. Build a responsive messaging application
2. Display all the conversations of the logged user
3. Allow the user to switch conversations
4. Allow the user to send new messages

### Dependencies :
In the making of this project I used: 
- React and NextJs for building the app.
- MaterialUI for ready to use  React  Component. 
- Styled Component to customize Material UI Components
- Redux ToolKit for stateManagement
- SWR and fetch API for API calls

### Making of process:
- I first spent 10 hours to learn about nextJs since it was my first time working with it
- Then I tried to find the most user friendly React UI library to work with since
  I'm used to work with a design system. I choosed material UI and spent 5 hours going through
  the documentation and spotting components that may be useful for me
  
- I went to leboncoin to see how the ui was designed especially for the messaging part 
- I spent an hour designing the component three.

### Steps

- Adding all the dependencies that I needed.
- Coding a desktop navBar and making it responsive
- Coding all the needed components for the messaging app 
- Retrieving data from the API to display the conversations with the messages
- Working on posting messages To the server
- Refactoring state management
- Writing this README.

### Technical choices

- I used getServerSideProps to retrieve existing messages from the server,
  but I'm not sure it's the best choice for a messaging app. I would have used a web socket connection 
  in a live chat.
- I used context API from react at the beginning because I thought that a small app would not need redux but 
  my code was not easily readable so i switched to redux toolkit
- I started by using fetch api for api calls, and i then discovered SWR hook by next and used it too.

### Some Improvements

- Refactoring and unifying the use of Material UI Components
- Adding some loaders
- Better implementation of the way message are posted, 
  by adding an intermediate state that would signal to the user that the message is being sent 
  and signal if it fails because of some server error
  
- Adding some autoRefresh to get the latest messages of a conversation
- Adding an authentication system that would allow us to sign in with different users
and get different conversations
- Fetching data for dynamic routes in a better way. 
  I don't know the best practices of next since it's my first time using it.
- Refactoring all the function that use fetch Api to hooks that use useSWR.
- Adding some tests with cypress or RTL to test the ui.
- Improving accessibility

### Time spent

- 10 hours learning about NextJS
- 5 hours learning about MaterialUI
- 15 hours codding
<details>
  <summary>Click to see the original readme with requirements.</summary>

# Context :

At leboncoin, our users can share messages about a transaction, or ask for informations about any products.

Your job is to create the interface to consult those messages.
The interface needs to work on both desktop & mobile devices.

In addition to your code, a README explaining your thought process and your choices would be appreciated.
# Exercice :

- Display a list of all the conversations
- Allow the user to select a conversation
  - Inside the conversation, there is a list of all the messages between these two users.
  - As a user, you can type and send new messages in this conversation

**As your application can be used by millions of users, make sure to provide some robust safety guards.**

### Sketches :

Obvisouly, it is up to you to make something nice and pretty, you are free to design it the way you like. The sketches are here to give you an idea on how it should look.

<details>
  <summary>Click to see the sketches</summary>
  
Mobile list :

![](./sketches/list-mobile.jpg)

Desktop list :

![](./sketches/list-desktop.jpg)

Mobile conversation :

![](./sketches/conv-mobile.jpg)

Desktop conversation :

![](./sketches/conv-desktop.jpg)

</details>

### API :

You can find the API swagger file in `docs/api-swagger.yaml`.

For a better readibility, you can view it on [https://leboncoin.tech/frontend-technical-test/](https://leboncoin.tech/frontend-technical-test/).

---

## Bonus 1 :

We provide some conversation samples, but can you improve the app so the user can now create new conversations ?

## Bonus 2 :

Our infrastructure is a bit shaky.. Sometimes the servers are crashing. “It’s not you, it’s me”, but maybe you can display something nice to warn the user and handle it gracefully.

## Do you want to make the app even better ?

Feel free to make as many improvements as you like.
We love creativity and technical challenges.

If you are out of ideas, here are some thoughts :

- As we want to reach our users anywhere, we need to make sure the app is performing well. What can you do to make it really fast ?

- Our goal is to support everybody in the country, including people with disabilities. As a good citizen and a good developer, can you make sure the app is accessible for everyone ?

- We all love to relax after a hard day’s work. It would be a shame if we didn’t feel confident enough about the upcoming automatic deployment. Are you sure everything has been tested thoroughly ?
</details>