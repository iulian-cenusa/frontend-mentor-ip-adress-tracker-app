# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![Desktop](./images/screen1.png) **To be aded**

### Links

- Solution URL: [GitHub](https://github.com/iulian-cenusa/frontend-mentor-ip-adress-tracker-app)
- Live Site URL: [...](https://your-live-site-url.com) **To be aded**

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties and variables
- Flexbox
- CSS Grid
- Mobile-first workflow
- [ExpressJS](https://expressjs.com/) - JS library
- [EJS](https://ejs.co/) - JavaScript template engine
- [Axios](https://axios-http.com/) - Promise based HTTP client for NodeJS

### What I learned

In this project I learned how to make a project using [ExpressJS](https://expressjs.com/) and [EJS](https://ejs.co). Also I used multiple APIs to get information. When the user first open the page I used [MyIP.com API](https://api.myip.com/) in order to get user's IP and with that I got latitude and longitude information to be used in the initial map rendering from [Open Weather Map Geocoding API](https://openweathermap.org/api/geocoding-api). After the user searches for a specific IP or domain the map coordinates are obtained by [IPify API](https://geo.ipify.org/). I didn't yse it at the beginning because the free license have limited used and didn't want to waist them.

### Continued development

The project could be further improved by using a specific frontend library, for example [React](https://reactjs.org/) or by using an IP geolocation API with more free uses.

### Useful resources

- [Stackoverflow resource 1](https://stackoverflow.com/questions/4460586/javascript-regular-expression-to-check-for-ip-addresses) - Regular expression for IPs.
- [Stackoverflow resource 2](https://www.stackoverflow.com/questions/13027854/javascript-regular-expression-validation-for-domain-name) - Regular expression for domain names.

## Author

- [GitHub Profile](https://github.com/iulian-cenusa)
- [Bitbucket Profile](https://bitbucket.org/iulian_cenusa/)
- [Frontend Mentor Profile](https://www.frontendmentor.io/profile/iulian-cenusa)
- [CodePen Profile](https://codepen.io/iulian-cenusa/)
- [Twitter Profile](https://twitter.com/IulianCenusa)

## Acknowledgments

By using [Open Street Map](https://www.openstreetmap.org/) alongside [LeafletJS](https://leafletjs.com/) it is required by Open street Map copyright to acknowledge it. Please see [OpenStreetMap Copyright](https://www.openstreetmap.org/copyright).

Aknolegments also goes to [MyIP.com](https://www.myip.com/) for using theirs API in order to get users IP and setup the initial view of the map.
