import { createContext, useContext, useState } from "react";
import axios from "axios";

const GlobalContext = createContext()


const GlobalProvider = ({ children }) => {

  const api_url = import.meta.env.VITE_API_URL
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState({})

  const fetchMovies = () => {
    axios.get(api_url)
      .then(res => {
        setMovies(res.data)

      })
      .catch(err => {
        console.log(err);

      })

  }

  const movieDetail = (id) => {
    axios.get(`${api_url}/${id}`)
      .then(res => {
        setMovie(res.data);

      })
      .catch(err => {
        console.log(err);

      })
  }


  return (
    <GlobalContext.Provider value={{ fetchMovies, movies, movieDetail, movie }}>
      {children}
    </GlobalContext.Provider>

  )

}

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export {
  GlobalProvider,
  useGlobalContext
}