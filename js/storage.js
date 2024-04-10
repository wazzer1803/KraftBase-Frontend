const STORAGE_TOKEN = 'A4CEYMPEUWG1OHEDPE5ZRWQ0YVMT2Q0UYGIHPPFB';
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';


/**
 * Uploads data into the backend.
 * @param {key} key - data name (key)
 * @param {array} value - data array to upload
 * @returns - promise
 */
async function setItem(key, value) {
    const payload = { key, value, token: STORAGE_TOKEN };
    return fetch(STORAGE_URL, { method: 'POST', body: JSON.stringify(payload) })
    .then(res => res.json());
}


/**
 * Fetches data from the backend.
 * @param {key} key - key name to fetch
 * @returns - promise + JSON
 */
async function getItem(key) {
    const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
    return fetch(url).then(res => res.json()).then(res => res.data.value);
}