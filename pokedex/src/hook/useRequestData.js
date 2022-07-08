import { useEffect, useState } from "react"
import axios from "axios"

const useRequestData = (initialState, url) => {
   const [data, setData] = useState(initialState)

   useEffect(() => {
      axios
         .get(url)
         .then((response) => {
            setData(response.data)
         })
         .catch((error) => {
            console.log(error)
         })
   }, [url])

   return data
}
export default useRequestData