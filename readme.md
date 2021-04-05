- 1 Tailwing utility
  > - [2] Context with firebase that permit us to wrap our App and we need to sign in or sign out or liking we'll call firebase directly through context (global state like redux)

[3] _Add suspense (permits to react to wait until the data is disponible) and lazy load to App.js
[4] _ Adding pages folder .
[5] \* Adding React Router ;
Login Page :
[6] Add login page with tailwind
[7] # Challenge
// Add a document title of 'Login - Instagram'
// Hint: Think about what React hook you'd use to apply the title -
// make sure that the hook chosen only runs on first render
[8] \* Challenge

- Manage input state validation before submitting

- Acceptance Criteria
- - Store emailAddress, password, error in state
- - Create a variable that can hold validate against input elements
- Use this variable as a source of truth to disable/enable the form button
- - If the variable is not valid, use an opacity of 50 on the button; if the variable is valid, don't apply the opacity

- Hints
- You can use conditional template rendering tags for the opacity state
- useState

- References
- https://tailwindcss.com/docs/opacity
- https://reactjs.org/docs/hooks-state.html
  [9] * user actions
  *happy & sad scenarios
  _ what happens when a user clicks login? -> firebase
  _ a async function that can handle login
  _ handle a succesful login with
  _ await firebase.auth().signInWithEmailAndPassword(emailAddress, password);

          * wrap the await function call to firebase in a try/catch
          * error: catch(error)
          * setError(error.message)

  [9] \* // # Challenge Sign UP :

            * All inputs must be stored in state; state values on input elements; onChange handlers

            // --

            // - Create state for the following:
            // 	- username
            // 	- fullName
            // 	- emailAddress
            // 	- password
            // 	- error

            // - Make sure that username & email address are both lowercase before being submitted

            // - Extra: what happens if a user enters spaces in the username? Validation against the username would be great!

            // --

            // Hints
            // 	- useState
            // 	- onChange
            // 	- destructuring

            // --

            // References
            // 	- The login form page!

  [10] \* Dashboard Component
  _ using ternary if user exist or not for login
  _ User context to wrap App component \* Create a custom Hooks for user  
   \*\*
  \*\* Challenge: Consume the UserContext in the Header

** Acceptance Criteria
** - We must now use the UserContext from that is set in the App.js file in the src/components/Header.js file

\*\* Hints

- Destructure the user from the context we just setup in the previous cast
