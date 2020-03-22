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

After adjustments to the code for fixing bugs and addressing the above points for the index.js file, JSHint returned back with these notices:
* One undefined variable (code line 111, teamStatsGraphs) - This is due to the fact that this function is defined in a separate javascript file dedicated to ChartJS code
* Two unused variables (code line 81 teamMatchUp), (code line 115 imgError) - These are due to the fact that these are connected to event listeners that are located in html elements

For the final check on the chart.js file, the only notice to come back was stating that Chart was an undefined variable. This is due to the fact that this reference is part of
a CHartJS specific syntax in the function that draws the graphs, so it may not be recognised by JSHint in this case.

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


### Tests taken on Desktop
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
    * Clicked on information boxes to see what would happen
    * Hovered over the tooltip on the underlined piece of text
    * Clicked on tooltip to see what would happen
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

### Tests taken on Mobile/Tablet

The same tests that I performed for desktop were also done on mobile and tablet devices. The only additional testing that needed to be
done included:
* Check the responsiveness and sizing of all website elements - to confirm that the sizing matches the designs I created during the building of the project
* Pressing the information boxes to test the response, confirming the inititation of the animations that occur when users hover over these on desktop
* Checking, from a user experience point of view, the sizing of elements and judge if it is easy to consume the information presented
* How the scrolling behaves when scrolling manually and when the user uses the call to action buttons to scroll down
* Testing how well the background video plays on smaller devices

## Bugs Discovered

#### Bugs Solved

1. Being able to select the same league in both league dropdown menus
    * Making this option available would create a confusing user expereince, where they could end up displaying the same team on both sets of cards.
    In order to counter this, some added logic was required to prevent this scenario from happening
        * Fix: Initially tried building four functions that would detect if that values were the same in both league dropdowns, and if they were,
        they would append the disable attribute to the same value on the other dropdown. The javascript code worked for most scenaros, however,
        it was still possible to avoid this logic based on what the user's inital choices ofr leagues. The code was redone slightly, with the additon of
        keys to reference to. These were used in combination with two functions to indicate how the strcuture of the option tags would be depending on the 
        option value selected. The following code was finally the successful version:
        
    <code>
    var keys = {
    "PL" : "<option disabled value=\"PL\">English Premier League</option><option value=\"FL1\">French Ligue 1</option><option value=\"SA\">Italian Serie A</option><option value=\"PD\">Spanish La Liga</option>",
    "FL1" : "<option value=\"PL\">English Premier League</option><option disabled value=\"FL1\">French Ligue 1</option><option value=\"SA\">Italian Serie A</option><option value=\"PD\">Spanish La Liga</option>",
    "SA" : "<option value=\"PL\">English Premier League</option><option value=\"FL1\">French Ligue 1</option><option disabled value=\"SA\">Italian Serie A</option><option value=\"PD\">Spanish La Liga</option>",
    "PD" : "<option value=\"PL\">English Premier League</option><option value=\"FL1\">French Ligue 1</option><option value=\"SA\">Italian Serie A</option><option disabled value=\"PD\">Spanish La Liga</option>"        
};

document.getElementById("list-1").addEventListener("change", function(e) {
    var i = this.options[this.selectedIndex].value;
    var other = document.getElementById("list-2");
    var index = other.selectedIndex;
    other.innerHTML = keys[i];
    other.selectedIndex = index;
});

document.getElementById("list-2").addEventListener("change", function(e) {
    var i = this.options[this.selectedIndex].value;
    var other = document.getElementById("list-1");
    var index = other.selectedIndex;
    other.innerHTML = keys[i];
    other.selectedIndex = index;
});
<code>

2. Error message for images that failed to upload from API was only appearing on one side
    * I had implemented a logic that would display a default shield image alongside an error message if the API failed to upload an image
    due to the url not working. Unfortunately, the error message was only appearing on one side.
        * Fix: I needed to adjust the appended string that displays team inforamtion/stats into the cards so that I could pass in the teamNumber
        argument into the imgError function. This was needed, in additon to the specified image, to ensure the error message falls belwo the right team.
        The following code worked successfully in the end:
        <code>
        function imgError(image, teamNumber) {
        image.onerror = "";
        image.src = "https://i.pinimg.com/236x/59/db/6a/59db6a59aa56cfadc5682bd61cf4c552--crests-symbols.jpg";
        document.getElementById("img-error-message-" + teamNumber).innerHTML = "The image could not be loaded.";
    return true;
}    
    <code>

3. Anchor tags for the tooltip and for a team selected redirecting the user inconveniently
    - Anchor tags for selecting a team would redirect users far down towards the graphs, causing slight confusion and potential frustration from
    a user experience point of view. The tooltip anchor tag had not been defined, and so clicking on this redirected users back the the landing section.
        * Fix: Adjusted the ids that these anchor tags were targeting so that users would be relocated to more relevant locations. The tooltip would redirect
        the user to the information box upon clicking it, while the anchor tag on each team redirected users to the top of the first team stats card.

#### Bugs Unsolved
1. In the Safari browser, the scroll behaviour: smooth css styling didn't apply, where button click transitions were abrupt
    * Safari does not support this css styling, and as far as the developer could researchduring the time scope of the project, there
    didn't exist a clear ad easily implementable solution to this issue. 

## Furher Testing
1. Asked fellow students, friends and family to look at the site on their devices and give feedback if they encountered any issues.
2. One More Team was viewed on all devices and orientations available in Chrome DevTools