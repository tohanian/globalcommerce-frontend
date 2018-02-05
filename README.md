# GlobalCommerce-Frontend

Global Commerce allows prospective home buyers and renters to search for listings. The data is pulled from a live MLS API. The app features include a map view, details page, and brokerage agent information.

## Listing Search

Home buyers/renters can search for open listings through a geographically-based search. Users can search cities, neighborhoods, and zip codes via the inputs on the landing page or the nav bar. The search field on the landing page has auto-complete powered by the Google Places API.

![Landing page screenshot](https://github.com/tohanian/globalcommerce-frontend/blob/master/screenshots/landing_page.png 'Landing Page')

## Search Results / Map View

Upon submitting the search query, the app maks an API call to the SimplyRETS, an API that interfaces with the Real Estate Transaction Standard (RETS). The API returns 100 listings matching the search query.

![Search Results screenshot](https://github.com/tohanian/globalcommerce-frontend/blob/master/screenshots/search_results.png 'Search Results')

### Listing Cards

![Listing card screenshot](https://github.com/tohanian/globalcommerce-frontend/blob/master/screenshots/listing_card.png 'Landing Card')

Each listing is presented on the search results page on a listing card. The listing card contains the first photo for the listing as well as important information including:

* Address
* Price
* Square footage
* Bedrooms / Bathrooms

Hovering anywhere over the card turns its corresponding marker on the map red. Hovering over the photo on the listing card displays the next photo found on the MLS record. Clicking on the card takes the user to the listing details.

Logged in users can click the heart on the card to save the listing to view later on their Liked Listings page.

### Map

The map contains markers for every listing returned by the search. The map is automatically centered on the average of all records that contain valid geographical coordinates.

![Map screenshot](https://github.com/tohanian/globalcommerce-frontend/blob/master/screenshots/map.png 'Map')

Hovering over the marker displays a tooltip containing a photo of the property and a summary of the listing details similar to the listing card. Clicking on the marker takes the user to the listing details page.

### Filters

![Filters screenshot](https://github.com/tohanian/globalcommerce-frontend/blob/master/screenshots/filters.png 'Filters')

Listings on the search result page can be filtered via the filter options located above the listing cards. Filters include:

* Price
* Number of Bedrooms
* Number of Bathrooms

## Listing Details

![Listing Details screenshot](https://github.com/tohanian/globalcommerce-frontend/blob/master/screenshots/listing_details1.png 'Listing Details')

The Listing Details page contains property details for the selected listing. Data included this view includes:

* Agent Remarks
* Address
* Price
* Square

![Listing Details screenshot](https://github.com/tohanian/globalcommerce-frontend/blob/master/screenshots/listing_details2.png 'Listing Details')

The Listing Details page contains an image carousel which allows the user to scroll through all available photos on the listing. The Details page also contains a map of where the property is located.

Logged in users can like listings by clicking on the heart so that they can be saved for later viewing.

## User Authentication

The site is intentionally designed to allow almost full functionality without requiring a user account. Login accounts are required only to allow users to save listings.

### Sign Up Form

The sign up form contains validations on the frontend to ensure valid information is entered. Any invalid entries will prevent the sign up form from being submitted and result in errors indicated why the entry was invalid.

Submitted valid sign up information will submit a request to the Rails backend to save the user and assign the user a JSON Web Token (JWT).

### Login / Logout

Users can log in through the Login page. Logging in assigns a session JWT and redirects the user to the Liked Listings Page.

![Logout screenshot](https://github.com/tohanian/globalcommerce-frontend/blob/master/screenshots/logout.png 'Logout')

Logging out clears the JWT from local storage.

## Liked Listings

![Liked Listings screenshot](https://github.com/tohanian/globalcommerce-frontend/blob/master/screenshots/liked_listings.png 'Liked Listings')

The Liked Listings page contains all the liked listings from search and listing viewing activities. It is planned for users to be able to request a showing from this page.

Users that are not logged in that attempt to visit the Liked Listings page are redirected to the Login page.

## Agents Summary

The Agents page contains a short summary of every agent at the brokerage. The space includes their contact information, license number, and a short bio.
