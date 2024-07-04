# Personal Portfolio

This project was bootstrapped with Create React App.

## Demo
You can view a live demo of the project [here](https://personal-portfolio-flax-kappa.vercel.app).


## Project Setup

To get the project up and running on your local machine:

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    ```
2. **Navigate to the project directory**:
    ```bash
    cd portfolio-project
    ```
3. **Install dependencies**:
    ```bash
    yarn install
    ```
4. **Start the development server**:
    ```bash
    yarn start
    ```

## Design Choices

- **Create React App**: Used for bootstrapping the project to quickly set up a modern web app by running one command.
- **Redux Toolkit**: Integrated for state management to simplify the development of Redux logic and to ensure a consistent pattern across the app.
- **React Router**: Used for client-side routing to provide a single-page application experience.
- **Styled Components**: Utilized for writing CSS in JS, which allows for better modularity and scoped styling.

## Additional Features

- **Light and Dark Modes**: The project supports both light and dark modes, allowing users to switch between themes based on their preference.
- **Downloadable CV**: Users can download a CV directly from the website.
- **Smooth Scrolling**: When a navbar item is clicked, the page smoothly scrolls down to the corresponding section.
- **ARIA Attributes**: ARIA attributes are used throughout the project to improve accessibility for users with disabilities.
- **Sections**: The project includes the following sections:
  - **Header**: Contains the navigation bar and theme toggle.
  - **Hero**: A hero section that introduces the user.
  - **About**: A section that provides information about the user.
  - **Portfolio**: Showcases the user's work and projects.
  - **Contact**: Includes a form for users to get in touch.
  - **Footer**: Contains additional links and information.



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

