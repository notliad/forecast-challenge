export async function reverseGeocode(lat, long) {
  if (lat && long) {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat},${long}&key=c63386b4f77e46de817bdf94f552cddf&language=en`
      );
      const data = await response.json();
      return { data: data.results[0].components, status: data.status };
    } catch (error) {
      console.error(error);
    }
  }
}
