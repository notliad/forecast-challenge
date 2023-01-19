export async function getBackground() {
  try {
    const response = await fetch(
      `https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
