This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Advance Local Code Assignment

View in browser:
[http://www.paulthibedeau.com/advance-local/react](http://www.paulthibedeau.com/advance-local/react)

## **Technologies**

* React 16
* Typescript 3.5
* Styled Components 4.3

## **How to run the project:**
___
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
___

### **Some thoughts, and should haves if i had more time to spend:**
___

* The project was fun and a good exercise covering a lot of areas. I had seen these APIs used in the past, and even some sent in for code projects for Purplebricks (prior company), but this was a first in using them.

* While working on this, I kept thinking about what real world apps leverage this data. It is so thorough and you could make something really amazing with all of the information it provides.

* I wish I could have broken the JSX into more components. For the most part this was all carried over from the vanilla project and converted to React. Given the time frame I had to make decisions in terms of how to organize components based on functionality, and what could be reused.

* Generally, I would define more TS interfaces, and they would be exported and/or in a module and using it as needed. An example would be defining an interface on the responses coming back from the Pokemon and Star Wars API.
    * Furthermore, I find TS really works well with React given the nature of reusability and passing props down to components. Those props create a model which in turn can be protected by an interface. This is really helpful in scalability, global state, and even just working on a dev team. It safe guards components' props, Redux reducers, as well as adding a better developer experience with things like intellisensse and immediate warnings within your IDE when passing incorrect types.

* I wish I had time to have better error handling. I had invested close to the full amount of hours in the project between the vanilla and this. I sadly don't have any fun error state like the gifs in the vanilla approach. In this project, I am only catching the error and console logging it, with it failing silently. This would not be a good use case for a real world approach

* Some components could have had unit tests, for example the `<Content />` component