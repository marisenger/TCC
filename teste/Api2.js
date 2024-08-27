export async function teste() {
    const response = await fetch('http://localhost:3333/pessoas/todasPessoas');
    const data = await response.json();
    console.log(data);
}

//export function teste;