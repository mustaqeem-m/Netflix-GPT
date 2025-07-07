# Initialization

- Create react app
- Configure Tailwind (tailwindcss@3);
- Routing of login and browse page
- Header
- login from
- Signup/SignUp form
- Form validation
- useRef hook
- Firebase configuration
- Deployed our app to production and hosted it
- SetUp signIn/signUp Create account and authentication using firebase
- SetUp redux store created UserSlice

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

# Authentication

- here we using google fireBase for our backend
- `Authentication ensures users are who they claim to be`. Here we used `Firebase Auth` to handle secure user login/signup with session management,
  avoiding the need to manage `password storage` or `server-side identity checks`

- npm i firebase
- npm i -g firebase-tools
- firebase login
- firebase init -> select `hosting` ,after initialize this it ll create 2 file of firebase config
- firebase deploy - for normal app hosting , for github action hosting follow belo steps
- firebase open hosting:site -> this ll open the hosted site

## Setup gitHub action

- .gitHub/workflows/firebase-hosting.yml

create this file in root and put necessary content in it

- then add github secret

  - repo -> settings -> Secret and variables -> Actions -> new repo secret
    name -> FIREBASE_SERVICE_ACCOUNT
    value -> paste the content from downloaded firebase-admisdk-xxx.json file

- firebase-admisdk-xxx.json => firebase console -> ProjectSettings -> serviceAccounts -> Generate new private key

# onAuthStateChange()

- when a action like signIn , SignUp or SignOut this onAuthStateChange is called this is provided by fireBase
- so when we dispatch a action we dont need to use the `dispatch()` method here and there in our code wherever the signIn\SignUp logic occurs
- It eliminates the need of using that in multiple places , we can use our dispatch() action method in one place ,
- it ll trigger the dispatch() when the user signIn/signOut/signUp , just like a event Listenerk

Note: <const dispatch = UseDispatch()> always use this at top of the component when using dispatch();
