# Burpple - Restaurant List

## Product and Technical Requirements
### DB Schema
Users
- id
- email # TODO
- password # TODO
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
POST /api/restaurants : Create a new restaurant # TODO
DELETE /api/restaurants/:id : Delete a restaurant # TODO
PUT /api/restaurants/:id : Update a restaurant # TODO

#### Restaurants Collections
GET /api/collections/restaurants?user_id=xxx : List all restaurants on my list
POST /api/collection/restaurants : Add restaurants to my list
{
    user_id: xxx
    restaurant_id: xxx
}
DELETE /api/collection/restaurants/:id?user_id=xxx : Remove restaurants from my list

## High Level Architecture Design
### Server
Backend and Frontend : Next.js with Express.js as Custom Server is used.
Next.js is used as Frontend framework
Express.js is used as Backend framework

Next.js -> Allow for Client and Server Side Rendering.
Express.js -> Allow more flexibility to add additional Endpoints for data fetching / backend instead of relying on Next.js Router.

### Database
In order to simplify deployments, sqlite3 is used.