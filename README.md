# Burpple - Restaurant List

## Product and Technical Requirements
### DB Schema
Restaurants
- id
- name
- description
- address
- cuisine
- user_id REFERENCES users(id)

User
- id
- name
- email
- password

### Web
/restaurants : Show all restaurants
/restaurants/create : Create a new restaurant
/restaurants/update : Update a restaurant
/restaurants/:id : Show a restaurant detail

### API
#### Restaurants
GET /api/restaurants/:id : Show details of a restaurant
GET /api/restaurants : Show all restaurants
POST /api/restaurants : Create a new restaurant
{
    user_id: xxx
    name: ...
}
DELETE /api/restaurants/:id : Delete a restaurant
PUT /api/restaurants/:id : Update a restaurant

## High Level Architecture Design
### Server
Backend and Frontend : Next.js with Express.js as Custom Server is used.
Next.js is used as Frontend framework
Express.js is used as Backend framework

Next.js -> Allow for Client and Server Side Rendering.
Express.js -> Allow more flexibility to add additional Endpoints for data fetching / backend instead of relying on Next.js Router.

### Database
In order to simplify deployments, sqlite3 with in-memory database is used.