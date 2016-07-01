Resolved errors:
    1. getting input from textfields
    2. duplicate outputs
1. Inputs wanted "<HTMLInputElement>" before "document.getElementById(...)" for typescript cause security and safety.
Solution founded there: "http://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement"

2. Readestatechange event happens couple of times (5). Every statechange indicating about network packages loaded. 
After "readyState=3" we can access responseText data, but in that case we may not receive network package`s breaks.
"readyState=4" indicates about done with loading data from request - after this event we would work with response.
Solution founded there: "https://learn.javascript.ru/ajax-xmlhttprequest"