# Burpple - Restaurant List
An assignment for Burpple by nielsantosa.

## Product and Technical Requirements
### Product
For now, basic functionalities are applied on this webpage.
Due to time constrain, there are some limitations : 
- It is assumed only one user exist at this point of time.

Future possibility of the product will involve : 
- Authentication (Login and Signup)
- User Session (Non-logged in user cannot access other user's restaurants)
- Adding Reviews to the Restaurants list
- Adding Postal Codes and Map View on the Restaurant Page

### WebPages
- / : Homepage
- /restaurants : Show all restaurants
- /restaurants/create : Create a new restaurant
- /restaurants/:id : Show a restaurant detail
- /restaurants/:id/edit : Edit a restaurant detail

## High Level Architecture Design
Refer to ARCHITECTURE.md

## Technical Deep Dive
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

### Backend API
#### Restaurants
- GET /api/restaurants/:id : Show details of a restaurant
- GET /api/restaurants : Show all restaurants
- POST /api/restaurants : Create a new restaurant

{
    user_id: xxx
    name: ...
}

- DELETE /api/restaurants/:id : Delete a restaurant
- PUT /api/restaurants/:id : Update a restaurant