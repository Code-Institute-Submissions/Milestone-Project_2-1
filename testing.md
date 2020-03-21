# Testing - One More Team

## Code Validation Testing

To initially test the website I used the following validators:

W3C Markup Validation Service for HTML 
I inserted the code into the validator via direct input. I consistently checked used this throughut previous checks, 
where any errors/warnings were addressed directly and documented in commits. Upon a final check no erros/warnings were present.

W3C CSS Validation Service
I inserted the code into the validator via direct input. No errors were were found upon final check.

JSHint
I inserted the code into the validator via direct input. Found a number of warnings, these includng:
* Several instances where semi-colons were missing, which I addressed directly
* Several mentions of 'const', 'for of' and 'let' with the note 'is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)'. For thse warnings I
simply went to Configuration in JSHint, checked jQuery and New JavaScript features (ES6) under Assume section. This is because the code does use some jQuery
as well as we assume the use of new Javascript features in modern day browsers.
* That 'team' and 'name' (both in square backets) are 'better written in dot notation.'(code line 55). This code was restructured using template literals and by using
dots instead of square brckets on 'team' and 'name'. I received guidance on template literals from a fellow classmate Louie O'Hagan.
* Code line 53 - 'The body of a for in should be wrapped in an if statement to filter unwanted properties from the prototype.'. This referring
to the for loop used to append the dropdown items into the Select Team dropdown.
Additionally, notices came up regarding:
* Three undefined variables, these being the_response (code line 15), the_response (code line 16) and teamStatsGraph (code line 106). Addressed warnings concerning the_response
by adding 'var' to line 15 so it bcomes defined as 'var the_response'. teamStatsGraph notice would be due to the fact it is defined in a separate javascript file
dedicated to using the ChartJS API
* One unused variable, this being teamMatchUp (code line 80). In reagrds to this, this is probably again down to the appended team dropdown options with the
onclick event listener and arguments in the html string that appends into the respective team-stats div tags.

## User Stories Testing

1. As a new visitor to the website, I want it to be very clear as to what the purpose of the website is
* User initially lands on Hero header section, making it quite clear what the website relates to (being football) so the user knows right away that it’s purpose is linked to this sport
* Clear Call to action redirects users quickly to more elaborate information about the purpose of the website and application, how it works, and what features to expect in the future
* Tooltip on underlined text explains further the football fan culture norm of following one team traditionally, but that globalisation of the sport can increase curiosity and appetite for football fans to follow another team elsewhere
* A portion of text in the ‘How it Works’ information box is highlighted in bold to draw extra attention towards it. This is because this information defines how, in this version of the application, the main feature generates team recommendations.
* The purpose of the website is extended with a description of what features are to come in the future in the information box ‘Future Features’

2. As a new visitor of the website, I want to get concise and relevant league statistics of the team(s) I follow
* User is directed to the main team match-up feature via the calls to action in the previous sections
* The user can easily pick the league and team he wants to find stats on. Stats are generated quickly and clearly in text form
* In addition to this, games ‘won’, ‘drawn’, and ‘lost’ are visualised in a pie chart

3. As a new visitor of the website, I would like some inspiration for a team in a foreign league to support, either out of curiosity or because I want to localize myself in a new country
* The user is directed towards the team recommendation/match-up feature, where he/she can select the leagues to use for generating the recommendation
* Along the way, the user is informed of how the application/feature works, understanding what team recommendations will be based on
* User selects leagues to use for the team generation, then selects the team they support/want to use to initiate their recommendation
* Chosen team and recommended team is shown, this providing one way of inspiring the user to which additional team they could follow/support

4. As a potential customer, I want to be able to subscribe to a team(s) so I can receive automatic updates/news via email
* While the developer wasn't able to implement this feature within the time scope of this project, a note is made in the information section
that this is a feature to be implemented in the future. This is to inform users that the intention to fulfill this possible need is there

5. As a potential customer, I want to have more information about a team(s), where I can be easily redirected to a club/team website to find commercial offerings
* In relation to the Subscribe feature, this would have been included as a part of that feature (via an email sent to the user upon subscribing) 
* The developer unfortunately has been unable to implement this feature within the project time scope, but this missing feature has been added 
to the pipeline of future developments in the ‘Future Features’ information box

