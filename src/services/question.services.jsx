import axios from "axios";

async function getQuestions(){
    const response = await axios.get("https://the-trivia-api.com/api/questions?categories=general_knowledge")
    return response.data
}

export default getQuestions