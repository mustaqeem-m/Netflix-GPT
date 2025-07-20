📺 Netflix‑GPT
A cutting-edge Netflix-inspired movie explorer integrated with OpenAI GPT for AI-powered movie suggestions. Built with React, styled with Tailwind CSS, authenticated using Firebase, and enriched by TMDB API for dynamic movie content.

🔰 Initialization Workflow
✅ Project Bootstrapping
Created React App: Initialized using create-react-app for a modular structure.

Tailwind CSS v3 Configuration: Installed and configured Tailwind for modern utility-first styling.

Routing Setup: Implemented with react-router-dom for:

/login route

/browse route

🧱 Core Components & Layout
Header Component: Responsive and fixed at the top.

Login & Signup Pages:

Designed separate forms for user login and registration.

Unified UX with shared components.

Form Validation:

Integrated Formik for robust, scalable form validation.

useRef Hook:

Used to access input fields without re-rendering.

Prevents unnecessary state updates during form input.

🔐 Firebase Authentication
Firebase Configuration:

Setup Firebase project and added SDKs.

Created .env file to store sensitive Firebase keys securely.

Auth Features:

Email/password-based sign in/sign up.

Session persistence via onAuthStateChanged.

Bug Fixes:

Fixed displayName update post-registration.

Updated Firebase user profile correctly.

Redirect logic: If the user is not logged in → redirect to /login, and vice versa.

Unsubscribing Auth Listener:

Used the unsubscribe method on component unmount to prevent memory leaks.

🧠 State Management with Redux
Redux Toolkit Store Setup:

Created a global store.

Defined userSlice for auth state.

Movie State:

Defined movieSlice to hold:

Now playing movies

Popular/upcoming/top-rated movies

Trailer video

GPT-recommended movies

🎥 Movie Data Fetching
🧪 Hardcoded Constants
Added TMDB endpoint URLs and keys in a centralized constants file.

📽️ Fetching from TMDB
Now Playing Movies:

Created a custom hook useGetNowPlayingMovies().

Dispatched movie data to Redux store.

Trailer Video Fetching:

Built another hook useGetMovieTrailer(movieId) using useCallback.

Fetched video via TMDB's /videos endpoint.

Embedded trailer using YouTube iframe with autoplay and muted settings.

Other Movie Categories:

Created hooks for Popular, Upcoming, Top Rated, and TV Series using:

useGetPopularMovies()

useGetUpcomingMovies()

useGetTopRatedMovies()

useGetTvSeries()

🧩 Component Architecture
Main Container:

Displays featured movie with title, overview, and trailer.

Secondary Container:

Renders multiple MovieList rows:

Each with a title and horizontal scrollable MovieCard list.

MovieCard Component:

Dynamically renders posters from TMDB image CDN.

Styled for responsiveness with Tailwind.

Reusability:

MovieList used both in Browse and GPT Search results.

🤖 GPT Integration
GPT Search Feature:

Created dedicated GPT search page with multilingual support.

Users can input genre, mood, or movie ideas.

OpenAI API:

Prompt: Fetch 5 movie names using GPT.

GPT results are converted into TMDB searches for display.

Redux Store:

Created gptSlice to store GPT-based suggestions.

MovieList Reuse:

Used MovieList to show GPT-suggested movie titles with thumbnails.

🛡️ Environment & Security
.env Setup:

Stored Firebase and OpenAI keys securely.

Key naming: REACT_APP_* to ensure React recognizes environment vars.

.gitignore:

Prevents accidental commit of sensitive data like .env.

⚠️ OpenAI API Key Warning
🚨 IMPORTANT: The app initially used OpenAI API calls from the frontend — this is insecure.

✅ Best Practice (Recommended):
Create a backend (Node.js, Firebase Functions, or Vercel Serverless).

Store OpenAI key as an environment variable on the server.

Frontend → Backend → OpenAI API (never expose keys directly).

This prevents:

Unauthorized API usage

Key theft

Unexpected billing/suspension

🧠 useEffect Optimization
All variables inside useEffect() are listed in the dependency array.

Avoided infinite loops by memoizing functions using useCallback.

js
Copy
Edit
const getMovieTrailer = useCallback(() => { ... }, [movieId, dispatch]);
💡 Performance Improvements
Memoization:

Prevents duplicate API calls when data already exists in Redux store.

Strict Mode Behavior:

React's StrictMode triggers renders twice in development for warnings.

Not an issue in production.

🧾 Features Summary
👤 Authentication
Sign Up / Login forms

Auto redirect based on auth state

Session persistence with Firebase

🎬 Browse Page
Header

Hero Banner with Trailer Video

Movie Lists by category (Now Playing, Popular, etc.)

MovieCards with poster and hover effect

🧠 GPT Integration
GPT Search Bar

Multi-language support

Movie suggestions by AI

Results fetched from TMDB

Seamless experience via Redux state

🔧 Firebase Hosting & GitHub Actions
🔥 Firebase CLI Steps
bash
Copy
Edit
npm i -g firebase-tools
firebase login
firebase init  # Select Hosting
firebase deploy
⚙️ GitHub Action CI/CD Setup
Create .github/workflows/firebase-hosting.yml

Add repo secret:

FIREBASE_SERVICE_ACCOUNT

Value from Firebase Admin SDK JSON

Push to trigger auto-deploy

🚧 Tasks & Future Enhancements
 ✅ Show popup with trailer and movie info on MovieCard click

 ✅ Ask users to enter their own OpenAI API key

 ✅ Implement backend to handle GPT securely

 ✅ Add loading states for data fetch

 ✅ Add dark/light theme toggle

 ✅ Mobile-first polish

🔍 Why Formik?
Simplifies:

Input handling

Validation

Error states

Cleaner code than raw React form state handling

🧠 useLocation Hook
Helps detect route (/login, /browse, /search)

Used for conditional rendering and redirects

🌐 TMDB API
Fetches all movie details: title, poster, video, genre

API Key stored in .env and accessed in Constants.js

🧠 Redux vs Local State
✅ Redux used to store:

User auth info

Movie lists

GPT search results

🛑 Avoid using local state for app-wide features

📱 Responsive Design
Tailwind used for fluid design

Responsive classes for:

Grid systems

Font sizes

Margins/Paddings

❌ Avoid Pushing console.log() in Production
Clean logs before deployment
Use tools like ESLint or Husky to automate code checks

🧠 Key Lessons
Secure your secrets — never expose API keys in frontend

Optimize API calls with memoization

Modular architecture enables scaling

Firebase + GitHub Actions = Fast CI/CD for frontend

🌍 Live Demo
🚀 Netflix-GPT LIVE (Insert your Firebase hosted link here)

📸 Screenshots
Add screenshots of:

Login Page

Browse Page

GPT Search Page

Movie Suggestion Rows

🏁 Final Note
Netflix-GPT isn’t just a clone—
It’s a powerful mix of modern frontend engineering, AI integration, and clean architecture. Perfect to showcase real-world project experience.

reated UserSlice
- BugFix: after signup displayName and userProfile updates
- BugFix: if the user is not logged in redirect /browse to /login page and vice-versa
- onAuthStateChange - unsubcribe when component unmounts
- Add hard coded Values to the constant file
- Get data form TMDB now playing movie list using API
- Custome hook fro nowPlayingMovies
- created movieSlice
- Update store with movie data
- Planning main & secondary container
- Fetch data for trailer video using a custom hook
- update store with trailer video data
- Embedded the youtube video and make it autoPlay and mute
- Tuned some tailwind to enchance look
- Build secondary container
- BUild movielist
- Build moviecard -> Using TMDB Image CN URL
- Enchanced the look of Browse page using taailwind
- Created custom hooks for corresponding MovieList to fetch movies and update the store
- Build GPT search feature
- Build GPT searcg page
- Build GPT searchBar
- Made Gpt Search page multi-lingual
- Get openAI api key
- Fetched Movie Suggestion from TMDB using OpenAI API
- created gptSlice added data on that
- Reused MovieList component to make movie suggestion cointainer
- Memozation
- Added .env file and save that to .gitignore
- Made our site responsive

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
- it ll trigger the dispatch() when the user signIn/signOut/signUp , just like a event Listener.
- it returns a unsubbscribe function used to unsubscribe this method when the corresponding component unmounts - good practise!

Note: <const dispatch = UseDispatch()> always use this at top of the component when using dispatch();

# useLocation()

- `useLocation` Hook — React Router DOM

- What It Does:
  - Gives access to the current location object.

  - Used to read data like pathname, search params, state, and hash.

  - Get current route info

  - Conditionally render content based on location

  - Access route state (e.g., redirect history)

  - Highlight active navigation tabs

eg. - location.pathName === '/browse`

# TMDB

- here we can able to get the data related for building our browse page (i.e) all latest movie data -> The Movie DataBase

- Login-> Edit profile -> API

# why every api calls redux store actions etc .. are happening twice?

- It's because of our app is under react strict mode
- React strict mode just made this kinda of stuff happen twice to check any inconsistency or any error occur in rendering cycle in developement phase
- But it wont happen in our production build our production build this things hapnnens only once

# Browse page sections

       * Netflix page is sectioned by
       * - Main container
       *    - Movie trailer in background
       *    - Movie title and that corresponding movie related things
       * - Secondary container
       *    - movie List * n
       *    - movie cards * n

# For storing data

- we can use both state variables or redux stores
- here we used redux store

### Note => never push console.log() in production code

## ⚠️ Security Notice

This project previously used the OpenAI API key directly in the frontend (browser), which is **not secure**.

API keys must be kept secret and should never be exposed to the browser environment. Doing so can lead to:

- Unauthorized use of your API key
- Unexpected billing on your OpenAI account
- Suspension of your account due to misuse

### ✅ Recommended Setup

To fix this:

1. Create a backend using Node.js / Express, or use serverless functions (Vercel/Firebase/etc.)
2. Store your OpenAI API key in environment variables
3. Call OpenAI's API from your backend only
4. Let the frontend call your backend (not OpenAI directly)

- its not secure to call openAI directly using frontend (client-side) there is a chance of key is exposed or stolen , so it ll throw us an error if we do it so,
  the openAI call using API is only done using backend(server-side) securely.

This keeps your API usage secure and protects your account.

### Note -> Create a .env file that stores all the secrets in our project like API_KEYS , project core secrets etc..

- WHILE storing the keys or secret naming convention starts with REACT*APP*.. is must so that react ll understand it

### Problem - every time we navigating to home and gpt search page our app make API calls again and again , even though data is already stored in that store

- Fix -> Memoization
- Checking the store if it had already has the corresponding data which i make API call for , if it had we tell our app dont make API calls we already have this data in or store

### Task-1 -> When click on a movie card an new popup page ll come and show its trailer and movie details with description

### Task-2 -> Ask user for their OpenAI API key inorer to cut our billing

# Making app responsive

Note -> Every variable or function you use inside useEffect must be listed in its dependency array, unless you're 100% sure it will never change.

Why not define `getMovieTrailer` normally?
In React:

Functions declared outside useEffect are re-created on every render

If we include such a function in the useEffect dependency array, React will treat it as "changed" every time → causing unnecessary re-renders or infinite loops

💡 Why useCallback works:
useCallback memoizes the function

So getMovieTrailer only changes when movieId or dispatch change

This keeps useEffect stable and predictable

This hook fetches TV series only once on mount.
getTvSeries is memoized using useCallback, and the effect depends on tvSeries and getTvSeries.
There’s no loop, because the fetch is skipped after the store has valid data.
