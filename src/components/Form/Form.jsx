import { useState } from 'react'
import { Container } from './styles'

function Form() {
  const [Title, setTitle] = useState('')
  const [Note, setNote] = useState('')

  const handleTitle = (e) => {
    setTitle(e)
    console.log(Title)
  }

  const handleNote = (e) => {
    setNote(e)
    console.log(Note)
  }

  return (
    <Container>
      <form>
        <input
          type="text"
          placeholder="Título"
          onChange={(e) => handleTitle(e.target.value)}
        />
        <textarea
          placeholder="Escreva sua nota..."
          onChange={(e) => handleNote(e.target.value)}
        />
        <button>Criar Nota</button>
      </form>
    </Container>
  )
}

export default Form
