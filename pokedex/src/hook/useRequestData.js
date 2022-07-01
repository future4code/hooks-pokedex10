import { useState, useEffect } from "react"
import axios from "axios"

const useRequestData = (inicialState, url) => {

   const [data, setData] = useState(inicialState)

   useEffect(() => {
      axios
         .get(url)
         .then((response) => {
            setData(response.data)
         })
         .catch((error) => {
            coonsole.log(error)
         })
   }, [url])

   return data

}

export default useRequestData