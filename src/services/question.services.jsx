import axios from "axios";

async function getQuestions(apiCategory){
    const response = await axios.get(`https://the-trivia-api.com/api/questions?categories=${apiCategory}`)
    return response.data
}

export default getQuestions