import axios from "axios"


const API_DOMAIN = process.env.REACT_APP_API_DOMAIN


export const getComments = async(setComments) => {


    const URL = `${API_DOMAIN}/projects-app/comments/`

    const headerConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    axios.get(URL, headerConfig).then(async(response) => {
        const result = await response.data
        setComments(result)
    }).catch((error) => {
        console.log("Error fetching the comments: ", error)
        setComments([])
    })
}
