# koa-server
GraphQL Back-end Server with Relay, Koa, MongoDB and Mongoose

#### 🚧 WIP 🚧
- [x] Koa
- [x] MongoDB
- [x] Mongoose
- [x] GraphQL
- [x] Relay
- [x] Jest
- [x] SuperTest

### Project architecture
[wip]

### Getting Started
- clone this repo
```sh
# install dependencies
yarn
# or
yarn install

# copy .env file
cp .env.example .env

# start project
yarn start

# see on GraphiQL graphql interface on localhost link
http://localhost:9000/graphql
```

### Generating the schema
```sh
yarn schema
```

### Create events manually
```sh
yarn seed
```

## to-do

- https://github.com/biantris/koa-server/projects/1

### Mutations
- Event Create Mutation
```graphql
 mutation {
   EventCreate (input: { 
     eventId: 564654, 
     name: "nice event", 
     start: "2022-07-01T00:00:00.000Z",
     end: "2022-07-01T23:59:59.000Z",
     allDay: false
   }) {
       event {
         id
         name
         start
         end
         allDay
       }
        error
        success
      }
    }
```
### Queries
[wip]

## contributions
Feel free to contribute to this project, if you find any bugs or improvements, open an issue and send a PR about it \o/
