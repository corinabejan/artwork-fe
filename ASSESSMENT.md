### Self assessment

| Section                      | Max Points | Self | Evaluator |
| ---------------------------- | ---------- | ---- | --------- |
| 0 Migrations, models & seeds | 10         | 10/10 | 0/10      |
| 1 Artworks list              | 7          | 7/7  | 0/7       |
| 2 Artwork details            | 4          | 4/4  | 0/4       |
| 3 Giving hearts              | 5          | 3/5  | 0/5       |
| 4 Bidding                    | 11         | 11/11 | 0/11      |
| 5 Posting an artwork         | 10         | 0/10 | 0/10      |
| 6 Signing up as an artist    | 7          | 7/7  | 0/7       |
| 7 Finishing up               | 6          | 6/6  | 0/6       |
| Total                        | 60         | 0/60 | 0/60      |

| 0. Criteria - Migrations, models & seeds                                   | Points | Self | Evaluator |
| -------------------------------------------------------------------------- | ------ | ---- | --------- |
| Server contains sequelize models for Artwork and Bid                       | 2      |      |           |
| Server contains migrations to create artworks and bids tables              | 2      |      |           |
| required fields for artworks and bids are validated in models & migrations | 2      |      |           |
| User, Artwork and Bid models are correctly related                         | 2      |      |           |
| Seeders are present to create at least 3 artworks and 5 bids               | 2      |      |           |
| Total                                                                      | 10     |      |           |

| 1. Criteria - Artworks list                                                    | Points | Self | Evaluator |
| ------------------------------------------------------------------------------ | ------ | ---- | --------- |
| The frontend route `/` displays a list of artworks                             | 1      |      |           |
| The artworks are fetched from the server                                       | 1      |      |           |
| The artworks are displayed with their number of bids they have in the database | 2      |      |           |
| An array of artworks is stored and managed by redux                            | 1      |      |           |
| A selectors and actions are defined in a seperate files                        | 1      |      |           |
| Each artwork has a `View details` button, it links to a artwork's details      | 1      |      |           |
| Total                                                                          | 7      |      |           |

| 2. Criteria - Artwork details                                                  | Points | Self | Evaluator |
| ------------------------------------------------------------------------------ | ------ | ---- | --------- |
| The frontend route `/artworks/:id` displays a detail page for an artwork       | 1      |      |           |
| The artworks are displayed with a title, image and the number of hearts it has | 1      |      |           |
| The bids belonging to the artwork are displayed with email and amount          | 1      |      |           |
| The artwork and its bids are fetched from the server                           | 1      |      |           |
| Total                                                                          | 4      |      |           |

| 3. Criteria - Giving hearts                                                                  | Points | Self | Evaluator |
| -------------------------------------------------------------------------------------------- | ------ | ---- | --------- |
| On the artwork's detail page we see a button with `give heart`                               | 1      |      |           |
| When the `give heart` button is clicked the number of hearts changes on the page             | 1      |      |           |
| Clicking the `give heart` button sends a PATCH request to the server                         | 1      |      |           |
| Clicking the `give heart` button updates the `hearts` property of an artwork in the database | 1      |      |           |
| The number of hearts an artwork has is also updated in the list of artworks on `/`           | 1      |      |           |
| You have to refresh to see the number of hearts update                                       | -1     |      |           |
| Total                                                                                        | 5      |      |           |

| 4. Criteria - Bidding                                                                   | Points | Self | Evaluator |
| --------------------------------------------------------------------------------------- | ------ | ---- | --------- |
| When a user is logged in we can see an number input for amount and button to `Bid`      | 1      |      |           |
| When the `Bid` button is pressed, it makes a POST request to the server                 | 1      |      |           |
| When the `Bid` button is pressed, A value for amount and email are sent to the server   | 0.5    |      |           |
| When the `Bid` button is pressed, A bid is created in the database                      | 0.5    |      |           |
| The bid created in the database has the correct `artworkId`                             | 1      |      |           |
| The new bid can be seen on the page                                                     | 1      |      |           |
| An Authorization header is set in the request                                           | 1      |      |           |
| The auth middleware is used on the server side to authorize the request                 | 1      |      |           |
| The minimum value of the input for amount in the frontend is the highest bid amount + 1 | 1      |      |           |
| If there are no bids yet the minimum value is the `minimumBid` value from the artwork   | 1      |      |           |
| The backend validates that the new bid is the highest bid so far                        | 2      |      |           |
| Total                                                                                   | 11     |      |           |

| 5. Criteria - Posting an artwork                                        | Points | Self | Evaluator |
| ----------------------------------------------------------------------- | ------ | ---- | --------- |
| There is a link with `Start an auction` in the navbar                   | 0.5    |      |           |
| A user can only see this link when you are logged in                    | 0.5    |      |           |
| A user can only see this if the user object contains: `isArtist: true`  | 1      |      |           |
| Clicking `Start an auction` links to a page with a form                 | 1      |      |           |
| The form contains inputs for title, minimum bid & imageUrl              | 1      |      |           |
| When the form is submitted a POST request is sent to the server         | 1      |      |           |
| An Authorization header is set in the request                           | 1      |      |           |
| The auth middleware is used on the server side to authorize the request | 1      |      |           |
| The POST request updates the database with input from the user          | 1      |      |           |
| The artwork saved in the database has the correct `userId`              | 1      |      |           |
| The user sees a success message if the artwork was posted successfully  | 1      |      |           |
| The success message is an alert, confirm or prompt popup or console.log | -1     |      |           |
| Total                                                                   | 10     |      |           |

| 6. Criteria - Signing up as an artist                                              | Points | Self | Evaluator |
| ---------------------------------------------------------------------------------- | ------ | ---- | --------- |
| A seperate migration is created to add a column `isArtist` to our users table      | 3      |      |           |
| A checkbox is added to the signup form                                             | 1      |      |           |
| The `signUp` action also sends a value for `isArtist` when posting to the server   | 1      |      |           |
| When the checkbox is checked on signup, the user created has `isArtist: true`      | 1      |      |           |
| When the checkbox is not checked on signup, the user created has `isArtist: false` | 1      |      |           |
| Total                                                                              | 7      |      |           |

| 7. Criteria - Finishing up                                                 | Points | Self | Evaluator |
| -------------------------------------------------------------------------- | ------ | ---- | --------- |
| Student performed an accurate self assessment (max off by + or - 7 points) | 2      |      |           |
| Student can reflect on their process by writing a reflection of ~200 words | 2      |      |           |
| Student has regularly committed changes (at least 1 commit per feature)    | 0.5    |      |           |
| Student has written clear commit messages                                  | 1      |      |           |
| Student has pushed their repository using git                              | 0.5    |      |           |

| Total