export async function getWeatherForecast(locationName) {
  if (locationName) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${locationName}&appid=da48942f2ced9fddfad80cd983aa7a20&units=metric`
      );
      const data = await response.json();
      return {
        status: data.cod,
        data: [data.list[5], data.list[13]],
      };
    } catch (error) {
      console.error(error);
    }
  }
}

export async function getWeatherToday(locationName) {
  if (locationName) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=da48942f2ced9fddfad80cd983aa7a20&units=metric`
      );
      const data = await response.json();

      return {
        status: data.cod,
        data: data,
      };
    } catch (error) {
      console.error(error);
    }
  }
}
