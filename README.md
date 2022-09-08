# 18.-Social-Network-API

I have created a social network API that allows users to share their thoughts, react to friends’ thoughts, and create a friend list. As for the specification I have used Express.js for routing, a MongoDB database, Mongoose ODM and Moment.js as my date library.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Walkthrough videos:

User: https://drive.google.com/file/d/1_Tf3vC3az84lzU6phm4nt5rffRnfHV90/view?usp=sharing

Thoughts: https://drive.google.com/file/d/1Byx5CL28tcACCURTjv3SxGV9hyCB0HU7/view?usp=sharing

Reaction: https://drive.google.com/file/d/1fhq0jOSMAxjpx6WPDCZs2FhweqCatbVX/view?usp=sharing

Friends: https://drive.google.com/file/d/1LB8CPruUEcJd3KzanvXaooMub2ukZ2xR/view?usp=sharing
