# Homework
Hi dear colleague! We would like to ask you to check small application that we've built for you. In this readme you will find all necessary information to run this application, plus all our tasks and expectations. But please don't stop on that. If you have ideas how to improve it, please feel free. Let's go!

## Technological stack
Language:

- Javascript (ES6)

Libraries and frameworks:

- Node.js
- React.js
- Redux
- Sagas

File system organisation:

- Ducks

Architecture and application design:

- Domain-driven design approach

Design and Design System:

- Custom, no DS

## How to run the application
Please be sure that your `node.js` and `yarn` have corresponding versions:

- `node.js` **12.2.0**
- `yarn` **^1.19.1**

To run the application you need to run

```javascript
yarn install
yarn dev
```

In your browser go to `localhost:3000`.

### Important to know

- In the application we have translations, but if you are adding a new translation, you need to restart the application, as HMR doesn't work in that case.

## Application description
Here we will describe the current implemented application (all requirement will be described below). We have a web application with restaurant list, which can be sorted by different sorting attributes. Restaurant cards are not clickable. The application is translated to English, German and Dutch. All network requests are simulated, you can find all data in the codebase.

## Requirements
We need to implement:

- Server side rendering of the restaurant list (using implemented mechanisms)

- Sorting attributes
  - fix alphabetical order (right now it doesn't work)
  - by minimum order value (min -> max)
  - by rating (top rated)
  - by delivery time (fastest -> slowest)
- Filtering
  - by delivery type (radio buttons delivery/pickup)
  - by cuisine (checkboxes with OR logic)
- Restaurant card
  - On click on the restaurant card `console.log` slug of this restaurant, no other action needed
  - On the card show `minumum order value`, `rating (median)`, `delivery time` (please pay attention to the format of time and money, coming from API)
- Modal
  - implemented, but do not work properly in SSR. We don't want to render opened modal in SSR mode, only on the client, so it need to be fixed.

Views:

- Desktop
  - all sortings and filters are in the sidebar as they are now
- Mobile
  - in the mobile view you may notice that all sortings and filters are moving the content (restaurant list) to the bottom, which we want to avoid. On the mobile view instead of all filters and sortings rendered on top, we need to render an icon/text, which will open the modal window (dumb component was already implemented) with all filters and sortings inside. But just in the mobile view we don't want immediate reaction when filter/sorting is changed. Instead we want to have a button `Apply` which will apply all sortings/filters changes. In the desktop the behaviour should stay the same as it is now (immediate reaction on changes).

Browsers:

- Chrome
- Safari
