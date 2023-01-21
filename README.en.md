# Hurb Technical Challenge - mini weather forecast site

## Project Description

Consists of a mini site where weather and climate information will be shown split between today, tomorrow and the day after tomorrow. Today's information is more detailed, showing wind speed, humidity and pressure. When the page is opened, the user's location will be loaded, showing the local weather information. The user can view the weather in other cities by entering the name in the displayed input field.

## Running the project

- `git clone` (Clone the project from the repository)
- `cd forecast-challenge` (Go to the project folder)
- `yarn install` (Install dependencies)
- `yarn start` (Run the project)

Run the project using Docker:

- `git clone`
- `cd forecast-challenge`
- `docker-compose up dev -d` (For development environment)
- `docker-compose up prod -d` (For production environment:)

The development environment is configured for port `3000` and production environment for `8080`

If there is any problem running one after the other, use the command `--build` before `-d` to avoid conflict between environments.

## Features

In addition to the requirements of the challenge, when using the website, I noticed that some improvements could be implemented.

- When inserting a city, the input is auto-completed by the state and country of the chosen city, giving feedback to the user that the inserted city is the one he expected.
- In addition to temperatures, the other units presented are also converted to the imperial system, maintaining the pattern between values.

## Missing

### Bing

The background image is static, just to illustrate that it could have been implemented, but the problem faced was that the Bing API requires CORS, however this could have been avoided in two ways:

- Use online tools that make this request instead of the app, but this can introduce some security vulnerability, so I chose not to use this method.
- Implement a small backend in for example, NodeJs, that would serve as a bridge for this request, but due to the scope of the challenge I did not use this method.

### Request errors

Despite being mandatory, the project does not have any visual error handling.

### Development

- The project was created with `create-react-app`.
- Styling was done in `styled-components`.
- The tests cover only the rendering of parent divs and loading divs.

The use of the Nunito font was a personal choice, and I also decided not to use the full screen vertically. I chose a more widget-like visual, because the information is relatively few.

Responsiveness was done horizontally, reducing the size of icons and fonts.

Even though the scope is simple, the project was developed with scalability in mind, the structure of the folders, the imports, the separated request services, and the componentization. All with the purpose of making it easier to add pages or features if necessary.
