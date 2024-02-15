// utils/twitch.js
import axios from 'axios';

const clientId = 'giauaxfkoz3wmqwsixb2moy3whttfl';
const clientSecret = 'yeiyi8d1i8p5x42zqucywquzo2ev1e';

export async function obtenerTokenDeAutenticacion() {
  try {
    const respuesta = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`);
    return respuesta.data.access_token;
  } catch (error) {
    console.error('Error al obtener el token de autenticación:', error.response.data);
    throw error;
  }
}

export async function obtenerClipsDeStreamer(streamerId, accessToken) {
  try {
    const respuesta = await axios.get(`https://api.twitch.tv/helix/clips?broadcaster_id=${streamerId}`, {
      headers: {
        'Client-ID': clientId,
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return respuesta.data.data;
  } catch (error) {
    console.error('Error al obtener los clips del streamer:', error.response.data);
    throw error;
  }
}
