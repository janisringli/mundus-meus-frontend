import axios from 'axios';

export async function getAllPosts() {

    const response = await axios.get('http://127.0.0.1:1337/api/tests');
    return response.data;
}
