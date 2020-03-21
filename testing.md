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

6. As a potential customer/observer, I want social media links available so I can easily access a club/team's social networking activities
* Similarly to User Story 5, this feature is not in place but has been mentioned as a ‘Future Feature’ in the information section of the webpage

7. As a an observer, I want to be able to get in touch with the website owner and be able to access social media related to the website
* An email address is provided in the footer of the webpage that users can use to get in touch with the website owner/developer
* Social media icon links are provided in the footer so that users can be redirected to the social media pages for One More Team

8. As a new/regular visitor of the website, I want an error free user experience, with clear communication from the website if something goes wrong
* Defensive programming has been implemented on images that do not load due to an error with the url sent by the API - this user feedback coming in 
the form of a black team crest shield image with text below stating “The image could not be loaded”.
* Console errors do occur also when too many API calls are made. The API on a free account supports 10 calls a minute. To counter this potential error, 
a modal appears when this error appears in the console, informing users that too many data requests have been made recently, and that they’ll need to 
wait a minute in order for the website to work properly again

## Manual Testing

All steps on desktop were repeated in browsers: Firefox, Chrome and Safari and Microsoft Edge.

1. Hero Header/Landing section on website
    * Opened up the page in the browser
    * Refreshed the page immediately
    * Closed the page and then opened the website again in a new tab and in a new browser window
    * Clicked on *Get Started’ button, to check if the scroll behaviour was smooth
    * Scrolled back up to test if I could still go back up and scrolled down
    * Clicked the back button, where it returned me to the landing section view again

2. Information Section
    * Hovered back and forth over the information boxes slowly, then quickly to test animate
    * Hovered over the tooltip on the underlined piece of text
    * Scrolled up and down to see how this was working and also to see how quickly I could find the next call to action button and/or scroll down to this next section
    * Clicked on the next call to action button, testing again the scroll behaviour and where the button will redirect me
    * Scrolled back up to test that this was working

3. Team Match-Up section
    * Refreshed the page to check that i would stay within this section after clicking on the Find Your Team button
    * Toggled the league selection dropdowns, picking different leagues to test the logic that is meant to prevent users from choosing the same league in both dropdowns
    * Checked through selecting each team in each league to check that the teams display correctly along with their stats and graphs, also checking to make sure that these are displaying below the correct dropdowns
    * When conducting team selections I was also testing to see that the other, unselected side produces the correctly matched up team (based on the statistic of current league position)
    * Checked the teams where their images urls from the API are not working, doing this to test the user feedback put in place to present black shield image along with an error message below
    * Made many team selections in quick succession in order to activate the API error where too many data calls have been made. Did this to test and ensure the modal appears when this error appears in the console
    * After making a team selection, I tested the logic that clears team stats and graphs when a new league is selected in one of the league dropdowns
    * Tested the interactivity of the pie charts, hovering over the different slices of the pie chart, as well as clicking on the legend tags to toggle on/off the display of slices
    * Refreshed the page to confirm that I stay within the team match-up section and the previous selection is cleared

4. Footer section
    * Hovered over the social media icons to check if the mouse cursor changes to indicate that they are clickable
    * Clicked on each social media icon to confirm that they all redirect the user to the relevant social media websites



