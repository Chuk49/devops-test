# devops-test
# Run the code
Nodejs and npm must be installed
```
apt install -y nodejs npm
```
Run the server
```
node server.js
```
After running the server the webpage will be availale on http://localhost:3000

# Assignment
## Guidelines & Expectations
This assessment is intended as a conversation starter to better understand your approach and way
of working.
Here are some helpful guidelines:
- Time limit: Aim to spend no more than two hours. Prioritize quality over quantity.
- Completeness: A fully working solution isn’t necessary, but providing something
runnable is appreciated.
- Quality first: Show us your best work in the areas that matter most to you.•
- Questions welcome: Feel free to reach out anytime if you need clarification or assistance.
- And importantly—have fun with the assignment!
## Goal:
Create a small web site that displays "Hello" on the first visit, and "World" on any subsequent
visits.
## Requirements
### Functionality
- When a user opens the webpage for the first time, it should show a page with just the
word: Hello
- When the user refreshes or returns later, it should instead show: World
### Tech Stack
- Free choice but source code should be kept on a GitHub/GitLab type solution.
### Documentation
- Include instructions on how deploy it so we can deploy it and test the documentation.
On the onsite interview will review the code and ask questions. We’re not just looking at your
final result—we’re equally interested in understanding the decisions, trade-offs, and shortcuts
you’ve chosen along the way.

## Approach
My initial approach was to simply save the the count of the visits to the webpage in the local storage of the browser, which worked. However, if I were to open another browser then I would be treated as a new user.
Second line of thought was to track the IP of the visitors, which would have still resulted in me being treated as a different user if I was to visit the webpage from another device. Knowing thta those are not the best solutions I looked opted for another approach.

After a small research I concluded that the best way to really track the visitors would be with an account registration and login system. The scale of this assignment however suggests for something much simpler, therefore I chose to "downscale" this scenario by not implementing account/login system, but simply saving the user's name and their visit counter in a json file on the server.

## Conclusion
I am satisfied with this approach and happy with the simplicity of it. I would love to discuss more about it in our upcoming interview. I believe the requirements have been covered and I spent about an hour on this assignment.