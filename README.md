# On the Todo

A todolist for super busy people.
Built in a handful of hours for a challenege.

Requirements:

- Node, v10+
- Yarn
- NPM

Launching:

- `yarn`
- `yarn start`

Thoughts:

- I've barely used Typescript previously, so as I edged closer towards my time limit I used a fair few `any` types for speed.
- Implementing `useReducer` would be a better way of managing the state and splitting apart the overloaded `TodoList.tsx`. It also would give us a nice way to share some of the string literals that are used across the frontend and backend for events.
- I've not implemented any security at all here, we don't validate or sanitize any user input or handle auth or user roles.
- There isn't really a prod build and deploy path method, you'd have to manually build the frontend and build out the endpoint to host the bundles and index.html.
- Obvious features are missing, such as editing or removing todos. Which wouldn't be much additional work.
- It would have been good to use the rooms feature of socket.io to handle multiple todolists.
- The frontend is using Typescript but the backend is plain Javascript as it was written last.
- The testing story is pretty weak in my opinon, the unit tests don't cover enough ground and there isn't any e2e.
- I'd like to have taken more care for the mobile vs desktop view, neither are really optimal. The Desktop view feels squashed and the mobile view is full of uneeded padding.
- For the sake of the challenege the whole codebase needed more in the form of JSDocs and explainere comments. There has been no real tidy-up phase.
