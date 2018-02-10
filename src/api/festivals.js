import axios from 'axios'

/**
 * @return {Promise<Object>} List of festivals
 * @see {@link https://cdn.contentful.com}
 */
export function getFestivals () {
  return axios.get(`${process.env.API_URL}/spaces/${process.env.SPACE_ID}/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=festival`)
}

/**
 * @param {string} festival id
 * @return {Promise<Object>} Festival
 * @see {@link https://cdn.contentful.com}
 */
export function getFestival (id) {
  return axios.get(`${process.env.API_URL}/spaces/${process.env.SPACE_ID}/entries/${id}?access_token=${process.env.ACCESS_TOKEN}`)
}
