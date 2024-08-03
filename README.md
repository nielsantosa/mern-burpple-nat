# Burpple - Restaurant List

## Product and Technical Requirements
### DB Schema
Users
- id
- email
- password
- name

Restaurants
- id
- name
- description

RestaurantsCollections
- id
- user_id REFERENCE users(id)
- restaurant_id REFERENCE restaurants(id)

### Web
/collections/restaurants : Show all restaurant on my list
/restaurants : Show all restaurants

### API
#### Restaurants
GET /api/restaurants/:id : Show details of a restaurant
GET /api/restaurants : Show all restaurants
POST /api/restaurants : Create a new restaurant
DELETE /api/restaurants/:id : Delete a restaurant
PUT /api/restaurants/:id : Update a restaurant

#### Restaurants Collections
GET /api/collections/restaurants : List all restaurants on my list
POST /api/collection/restaurants : Add restaurants to my list
DELETE /api/collection/restaurants/:id : Remove restaurants from my list

## High Level Architecture Design
### Server
Backend and Frontend : Next.js with Express.js as Custom Server is used.
Next.js is used as Frontend framework
Express.js is used as Backend framework

Next.js -> Allow for Client and Server Side Rendering.
Express.js -> Allow more flexibility to add additional Endpoints for data fetching / backend instead of relying on Next.js Router.

### Database
In order to simplify deployments, sqlite3 is used.