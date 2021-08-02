import gql from 'graphql-tag'


export const FETCH_POSTS_QUERY=gql`
{
  getPosts {
    id
    body
    username
    createdAt
    commentCount
    comments {
      body
      createdAt
      id
       username
    }
    likeCount
    likes{
        username
    }
  }
}
`