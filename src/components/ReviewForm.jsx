import { useState } from "react"
import axios from "axios"

const ReviewForm = ({ movie_id, fetchData }) => {

  const api_url = `${import.meta.env.VITE_API_URL}/${movie_id}/reviews`
  const initialFormData = {
    text: '',
    name: '',
    vote: ''
  }

  const [formData, setFormData] = useState(initialFormData)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(api_url, formData, { headers: { 'Content-Type': 'application/json' } })
      .then(res => {
        console.log(res.data);
        fetchData(movie_id)
        setFormData(initialFormData)
      })
      .catch(err => {
        console.log(err);

      })

  }

  const setField = (e) => {
    const { value, name } = e.target
    console.log(value, name);
    setFormData(prev => {
      return { ...prev, [name]: value }
    })

  }

  return (
    <div className="card my-3">
      <header className="card-header">
        <h3>Aggingi una nuova recensione</h3>
      </header>
      <div className="card-body">
        <form action="#" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome</label>
            <input
              className="form-control my-3"
              type="text"
              name="name"
              placeholder="Inserisci il nome"
              value={formData.name}
              onChange={setField}
            />
          </div>
          <div className="form-group">
            <label>Testo</label>
            <textarea
              className="form-control my-3"
              type="text"
              name="text"
              placeholder="Inserisci il testo"
              value={formData.text}
              onChange={setField}
            />
          </div>
          <div className="form-group">
            <label>Voto</label>
            <input
              className="form-control my-3"
              type="number"
              min={1}
              max={5}
              name="vote"
              placeholder="Inserisci il voto"
              value={formData.vote}
              onChange={setField}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-success" type="submit">Aggiungi</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ReviewForm
