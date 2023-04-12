# Simple weather app written in Angular

# Description of the app

Select a city from a dropdown menu and see the weather forecast for the chosen city.

The weather forecast is based on the OpenWeatherMap API.

For more information about the API: https://openweathermap.org/api/one-call-api

## Installation

### For development
- Run `npm install`
- In folder `environemnts` create `environment.ts` file or copy and rename `example-environment.ts` to `environment.ts`
- Create `environment.prod.ts` file as well
- Populate both files
- Run `ng serve` and navigate to `http://localhost:4200/`

### Run the app with Docker
- Run `docker build . -t imageTag` to build the image. You have to replace `imageTag` with a more meaningful name.
- Run the image with the following command `docker run -d -p 80:80 imageTag`
- Open `localhost` in your browser in order to use the app
