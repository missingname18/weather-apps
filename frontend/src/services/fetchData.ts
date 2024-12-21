export async function getDataByCity(city: string) {
  const response = await fetch(`http://localhost:5000/api/weather?city=${city}`);
  const data = await response.json();
  return data;
}