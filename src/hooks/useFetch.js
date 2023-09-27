import axios from "axios"
import { useState } from "react"

const useFetch = (baseURL, callback) => {
  
    const [infoApi, setInfoApi] = useState()

    //READ
    const getApi = (path) => {
        const url = `${baseURL}${path}`
        axios.get(url)
            .then(res => {
                console.log(res.data)
                setInfoApi(res.data)
            })
            .catch(err => console.log(err))
    }

    //CREATE
    const postApi = (path, data) => {
        const url = `${baseURL}${path}`
        axios.post(url, data)
            .then(res => {
                console.log(res.data)
                setInfoApi([...infoApi, res.data])
                callback(true)
            })
            .catch(err => console.log(err))
    }

    //DELETE
    const deleteApi = (path, id) => {
        const url = `${baseURL}${path}/${id}/`
        axios.delete(url)
        .then(res => {
            setInfoApi(infoApi.filter(e => e.id !== id))
        })
        .catch(err => console.log(err))
    }

    //UPDATE
    const updateApi = (path, id, data) => {
        const url = `${baseURL}${path}/${id}/`
        axios.put(url, data)
            .then(res => {
                setInfoApi(infoApi.map(e => e.id === id ? res.data : e))
                callback(true)
            })
            .catch(err => console.log(err))
    }

    return[ infoApi, getApi, postApi, deleteApi, updateApi ]
}

export default useFetch