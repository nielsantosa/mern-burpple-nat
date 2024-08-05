# ARCHITECTURE

## High Level Architecture Design
MERN stack is used as a architecture for app.\
What is MERN? https://www.geeksforgeeks.org/mern-stack/  

In my submission, the MERN stack is using : \
(SQLite) - Express - React(Next.js) - Node.\
I did not use Mongo because I need to spin up a MongoDB instance, that will complicate the deployment and networking. \

It is one of the most popular JavaScript Stack for the full-stack app.\
Due to its popularity, it's easier to find developers that are familiar already with the Stack.

The usage of Javascript on both Frontend and Backend also ease the process of onboarding. \
No need to learn 2 different language. \

It is popular for its lightweightness and customizability as well.\
The developer can tweak the application to suits the need of the business. \
It is not too opinionated compared to other full-stack app like Rails or Django or Java Spring framework. \

Why not split into 2 app : Frontend (React) and Backend (other framework)?\
To simplify the process of maintaining 1 app rather than having 2 separate app\
Deployment are also easier\

### Server
Backend and Frontend : Next.js with Express.js as Custom Server is used.\

Why Next.js?\
Next.js is one of the most popular React-based framework that can elevate SEO and Server Side Rendering.\
The usage of Server Side Rendering can fasten the performance of the app.

Why Express.js?\
Express.js is one of the most popular Javascript framework that is popular due to its lightweightness.\
Easy to use and doesn't require much configurations.\
It is also easier to tweak to suit the developer's need.\

### Database
In order to simplify deployments, sqlite3 with in-memory database is used.
For a full-fledge app, non relational DB like MongoDB or MySQL / PostgreSQL can be used.
The decision to choose the DB depends on the type of data and stage of the business model itself.

## Future Tech Enhancement
- Security : Enable Authentication and Authorization
- Monitoring : Monitor the Performance of the Frontend and Backend performances