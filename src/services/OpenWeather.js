export async function getWeather(locationName) {
  if (locationName) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${locationName}&appid=da48942f2ced9fddfad80cd983aa7a20&units=metric`
      );
      const data = await response.json();
      return {
        status: data.cod,
        data: [data.list[0], data.list[8], data.list[16]],
      };
    } catch (error) {
      console.error(error);
    }
  }
}
