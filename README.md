# Eventify

Eventify (https://eventify.io/) is an event management company aiming to revolutionize the event planning industry. With a strong focus on attention to detail, exceptional customer service, and a commitment to excellence, they strive to create events that stand out from the competition, ensuring each one is memorable and truly unforgettable.

They are a team of experienced professionals with a passion for creating perfect and unforgettable events. The event platform is designed to simplify event planning and execution, allowing you to focus on what matters most: creating meaningful experiences for your guests.

To this end, their team is developing a backend platform for Eventify to present event rating information; however, they also want to start with the development of the web frontend for the platform.

The evaluation has an attached package containing a file, which can be used by json-server (https://github.com/typicode/json-server/tree/v0) stable version 0.17.4 to simulate a backend with the indicated characteristics.

By running json-server in the terminal using the mentioned configuration file (you must place the file in the server folder of your project) with the commands:

`cd server` 

`json-server --watch db.json`

This starts the Fake API.

The information of the general Events (id, name, description, scheduledAt) is found at the endpoint:

`http://localhost:3000/events`

The information of the Attendees (id, firstName, lastName, eventId, ticketIdentifier, checkedInAt) is found at the endpoint:

`http://localhost:3000/attendees`

The information of the Ratings (id, attendeeId, eventId, rating, ratedAt) is found at the endpoint:

`http://localhost:3000/ratings`

For the web development on the frontend side, TypeScript has been selected as the programming language and Angular as the Frontend Framework.

## Application Requirements

You are tasked with developing a web application that implements the following features:

1. A Toolbar, where the Eventify logo is displayed on the left (use the Clearbit Logo API for this) and the text "ISO 27001:2022 certified" next to it.

2. In the Toolbar, the options "Home" and "Rating" are shown in the center.

3. The toolbar should also offer select buttons on the right of the toolbar options for "EN" and "ES" for language switching.

4. The Home view shows the title "Home" and the content "Welcome to Eventify".

5. In the Home view, there is also a section titled "Registered Events" where a grid list with two Event Summary components per column is presented. For each registered event, an Event Summary component containing a card must be displayed.

6. In the Event Summary component, the Event card must have the Event name in the header section. In the content section, the Event description should be shown. In the footer section, two statistical indicators should be displayed: Checked-In Attendees and Average Rating.

7. The Checked-In Attendees indicator shows the number of attendees currently registered for the event and who have a valid value in the `checkedInAt` attribute.

8. The Average Rating indicator shows the current event rating percentage, which is the average of all ratings registered by attendees who checked in at the event. If the event has ratings registered, the value must be numeric between 1 and 5, rounded to one decimal (e.g., 3.5, 4.2, or another similar value). If the event does not have any ratings registered, "No ratings" should be displayed.

9. The Rating view shows the title "Event Rating" at the top and below that a section labeled "Add a Rating for the Event you attended."

10. The "Add a Rating for the Event you attended" section in the Rating view presents a form containing a text input field labeled Ticket Identifier and a number input field labeled Rating along with a Rate Event button. When the user enters the ticket identifier, their rating value (an integer between 1 and 5), and clicks the Rate Event button, the system validates if the ticket matches one of the existing `ticketIdentifier` in `/attendees`. If the system finds a match for the `ticketIdentifier` and verifies that `checkedInAt` has a value (is not null), then an element is added to the `/ratings` endpoint with the associated `attendeeId`, `eventId`, and the rating value and the current date and time for `ratedAt`, showing the text "Event successfully rated" below. If the system does not find a match for `ticketIdentifier`, then the rating is not added, and the text "Invalid Ticket Identifier" should be displayed below. If the system finds a match for `ticketIdentifier` but there is no date and time value in `checkedInAt` (it is null), then the rating is not added, and the text "You can only rate events you have attended to" should be displayed below.

11. Only one rating element can be registered for each Attendee for each event they attend.

12. Consider a page-not-found view for unsupported navigation routes. This view should display a message including the specified route that was not found and should offer a button to return to Home.

13. The Home view is accessible from the `/home` route.

14. The Rating view is accessible from the `/engagement/ratings/new` route.

15. The root view (accessible from the `/` route) should redirect the user to the Home view.

16. The user interface should be available in English and Spanish, with English as the default language.

The user interface should use one of Angular Material's pre-built themes: azure-blue, rose-red, cyan-orange, magenta-violet, deeppurple-amber, indigo-pink, pink-bluegrey, or purple-green.

## Additional Considerations

The client's IT team will evaluate not only the fulfillment of the functional characteristics but also the user interface design, project structure, adherence to naming conventions for programming objects in English, Angular naming conventions, code organization, and efficiency. Design patterns application will also be considered. Accessibility (use of ARIA attributes) and usability will be taken into account.

The team requires that the user interface be based on `Angular Material`, while communication with the backend should be based on `HttpClient` (included in @angular/common/http). The application
should support `in-app navigation` and use `@angular/router` for routing handling in the application. If required, use `DatePipe` in templates for date formats (see references section). You should include `ARIA attributes` in views. The user interface should `display English text by default`. You should use `@ngx-translate/core` for i18n implementation. The application project should be able to open without problems in `JetBrains WebStorm`. The project organization must be `domain-driven`, applying layered architecture.

The project organization should be domain-driven, applying layered architecture, considering the sub-domains `public` (for general UI elements or components such as home), `shared` (for base elements or those used in other sub-domains), `registration` (for components or elements related to events, such as events or attendees), and `engagement` (for components or elements related to ratings, such as Event Rating). 

Apply good practices for logical and physical naming of classes and components. Distribute the elements appropriately within each subdomain folder, considering folders such as `pages, components, services, model`. Only components that have a direct relationship with navigation paths are located in pages. Components are located in components that are included in others and are not directly associated with navigation paths. Apply good practices for logical and physical naming of classes and components. Comment your own `TypeScript` source code files using `JSDoc` conventions (see references), with block comments including a summary text with the purpose and `@author with your first and last name`. Include in the `README.md` file, the application information, description and your information as author.

## Technical restrictions

Name your project `upc2402si729eaucode` where code is your student code in lowercase (e.g. `upc2402si729eau201621873`). Build your project using the current release version of Angular v18. All components in your project must be stand-alone components.

Before generating the .zip file (the only valid format) for submission, delete the node_modules folder. The name of the .zip file must follow the structure `upc-pre-202402-si729-<section>-
ea-u<student-code>.zip` (for example, `upc-pre-202402-si729-wx59-ea-u201621873.zip`).

## References

Course materials
- https://angular.dev/guide/routing/common-router-tasks
- https://angular.dev/guide/routing/router-reference
- https://angular.dev/guide/routing/router-tutorial#adding-a-404-page
- https://angular.dev/guide/http
- https://angular.dev/guide/templates/pipes
- https://angular.dev/api/common/DatePipe
- https://material.angular.io/components/grid-list/overview
- https://material.angular.io/components/card/overview https://material.angular.io/components/card/overview#accessibility https://material.angular.io/components/toolbar/overview
- https://material.angular.io/components/toolbar/overview#accessibility https://github.com/typicode/json-server/tree/v0 https://www.w3.org/TR/wai-aria/#usage https://github.com/ngx-translate/core
- https://jsdoc.app/
