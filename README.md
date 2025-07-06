# Initialization

- Create react app
- Configure Tailwind (tailwindcss@3);
- Routing of login and browse page
- Header
- login from
- Signup/SignUp form
- Form validation
- useRef hook

# Features

- Login/SignUp Page
  - SignIn / SignUp form
  - Redirect to browse page
- Browse (after authentication)
  - Header
  - Main Movie
  - Trailer in BackGround
  - Title and Description
  - Movie Suggestions
  - Movie Links \* N
    -NetflixGPT - Search Bar - Movie Suggestions

# Formik

- Formik is a library used when we have a form in our react application
- without formik -> handling validation, errors and other things related to forms becomes very difficult

# useRef hook

- Its a react hook thats lets us reference a value that's not needed for rendering

- useRef is a hook in React that gives us:

- A mutable object that persists across renders

- A way to access DOM elements (like <input>)

- A place to store any value without triggering re-render

<const refVar = useRef(initialValue);>

- refVar.current will hold your value.

- Can be attached to a DOM element using the ref prop.
