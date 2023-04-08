import { useState } from 'react'

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (formData.nombre.length <= 5 || !formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setError('Por favor verifique su información nuevamente')
      return
    }

    setSuccess(`Gracias ${formData.nombre}, te contactaremos lo antes posible vía email.`);
    setFormData({ nombre: '', email: '' })
    setError('')
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre completo:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        {error && <h3>{error}</h3>}
        {success && <h3>{success}</h3>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
