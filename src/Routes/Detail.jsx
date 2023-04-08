import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [dentist, setDentist] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchDentist = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      const data = await response.json()
      setDentist(data)
    }
    fetchDentist()
  }, [id])

  return (
    <>
      <h1>Detail Dentist id {dentist.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Detail