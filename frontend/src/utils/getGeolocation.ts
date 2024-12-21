// src/utils/getGeolocation.js

const getGeolocation = async () => {
  const apiUrl = 'https://ipapi.co/json/';

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch geolocation');
    }
    const data = await response.json();
    return {
      ip: data.ip,
      country: data.country_name,
      region: data.region,
      city: data.city,
      latitude: data.latitude,
      longitude: data.longitude,
    };
  } catch (error) {
    console.error('Error fetching geolocation:', error);
    return null;
  }
};

export default getGeolocation;