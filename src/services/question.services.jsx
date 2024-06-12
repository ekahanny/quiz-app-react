import axios from "axios";

async function getQuestions(){
    const response = await axios.get("https://the-trivia-api.com/api/questions?categories=science")
    return response.data
}

export default getQuestions