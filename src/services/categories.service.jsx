import axios from "axios";

async function getCategories(){
    const response = await axios.get("https://the-trivia-api.com/api/categories")
    console.log(response)
    return response.data
}

export default getCategories