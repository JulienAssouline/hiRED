# hiRED

hiRED is a full stack web application that connects students with alumni mentors. There is a list of available mentors that a student can filter based on their skills, name, and program. The student can then decide whether they want to chat with the mentor and make an appointment. Students can also upload their work and projects in order to display their portfolio.

I built the mentors page and the filter. For the search filter, I'm using Fuse.js a lightweight fuzzy search library.

I built the chat which uses subscriptions to send results every time a particular event happens (exp. a message).

I Also built the redbook page, which is the page that contains a list of all the users. This page includes pagination and a filter.

For all features, I was a part of I worked on both the frontend and backend. Every page I worked on contains hooks, and I am working on refactoring the queries and mutations so that they contain react-apollo-hooks.

Starting server: NODE_ENV=development yarn start:dev
Starting client: yarn start