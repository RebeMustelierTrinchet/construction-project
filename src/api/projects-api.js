import axios from "axios"


const API_DOMAIN = process.env.REACT_APP_API_DOMAIN


export const getProjects = async(setProjects) => {


    const URL = `${API_DOMAIN}/projects-app/projects/`

    const headerConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios.get(URL, headerConfig).then(async(response) => {
        const result = await response.data
        setProjects(result.data)
    }).catch((error) => {
        console.log("Error fetching the projects: ", error)
        setProjects([])
    })
}