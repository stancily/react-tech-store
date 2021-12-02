import * as contentful from "contentful";

export const client = 
contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "ecjcaxxw865d",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "J8hw8ey0JT3KUff-RwvFxhMuSVt-KXx3ku4GnihcdMk"
});