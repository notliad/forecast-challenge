export async function getWeather(locationName) {
  if (locationName) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=da48942f2ced9fddfad80cd983aa7a20&units=metric`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
