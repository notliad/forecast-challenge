export async function getWeather(locationName) {
  if (locationName) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=772920597e4ec8f00de8d376dfb3f094&units=metric`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
