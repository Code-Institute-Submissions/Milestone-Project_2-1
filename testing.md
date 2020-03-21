# Testing - One More Team

## Automated Testing

To initially test the website I used the following validators:

W3C Markup Validation Service for HTML 
I inserted the code into the validator via direct input. I consistently checked used this throughut previous checks, 
where any errors/warnings were addressed directly and documented in commits. Upon a final check no erros/warnings were present.

W3C CSS Validation Service
I inserted the code into the validator via direct input. No errors were were found upon final check.

JSHint
I inserted the code into the validator via direct input. Found a nmber of warnings, these includng:
* Several instances where semi-colons were missing, which I addressed directly
* Several mentions of 'const', 'for of' and 'let' with the note 'is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)'
* That 'team' and 'name' (both in square backets) are 'better written in dot notation.'(code line 55). It is written this way, however, for the appended
anchor tag (dropdown item) to work
* Code line 53 - 'The body of a for in should be wrapped in an if statement to filter unwanted properties from the prototype.'. This referring
to the for loop used to append the dropdown items into the Select Team dropdown.
