const url = 'http://localhost:3333/';
export async function get(endponit) {
    const response = await fetch(url + endponit);
    const data = await response.json();
    console.log(data);
}

//export function teste;