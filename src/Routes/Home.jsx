import { useState, useEffect } from 'react'
import { useContextGlobal } from "../Components/utils/global.context";
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([])

  useEffect(() => {
      const fetchDentists = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setDentists(data)
    }
    fetchDentists()
  }, [])
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {dentists.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
    </main>
  )
}

export default Home