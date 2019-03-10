# 04 - Query

These are the queries that were used in the video. Try playing around with them till you feel comfortable. You may also check out the [official docs](https://graphql.github.io/learn/queries/) for GraphQL query.

## 1. Basic Query

```graphql
{
  viewer {
    # query can have comments too!
    # shape of data is maintained
    name
  }
}
```

## 2. Nested fields

```graphql
{
  viewer {
    name
    # fields can refer to objects
    status {
      # requesting status fields
      emoji
      message
    }
  }
}
```

## 3. Passing arguements

```graphql
{
  viewer {
    name
    # passing arguements to field
    organization(login: "wtjs") {
      name
    }
  }
}
```

## 4. Aliases

```graphql
{
  # aliasing query results
  lovesMountains: user(login: "divyanshu013") {
    name
  }
  lovesBeaches: user(login: "metagrover") {
    name
  }
}
```

## 5. Fragments

```graphql
{
  lovesMountains: user(login: "divyanshu013") {
    ...userFields
  }
  lovesBeaches: user(login: "metagrover") {
    ...userFields
  }
}

# creating a reusable fragment
fragment userFields on User {
  name
  bio
}
```

## 6. Operation type and name

```graphql
# Add an operation type and name
query GetViewer {
  viewer {
    name
  }
}
```

## 7. Variables

```graphql
# Adding a $login variable. Notice the !
query GetUser($login: String!) {
  user(login: $login) {
    name
  }
}
```

```json
{
  "login": "divyanshu013"
}
```

## 8. Default variables

```graphql
# Adding a $login default variable
query GetUser($login: String = "divyanshu013") {
  user(login: $login) {
    name
  }
}
```

```json
{

}
```

## 9. Directives

```graphql
# Using directives @include @skip
query GetUser($withBio: Boolean!) {
  user(login: "divyanshu013") {
    name
    bio @include(if: $withBio)
  }
}
```

```json
{
  "withBio": true
}
```

## 10. Meta fields

```graphql
# Meta fields
query GetViewer {
  viewer {
    __typename
    name
  }
}
```
