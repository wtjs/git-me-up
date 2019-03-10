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
