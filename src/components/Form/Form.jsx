import { Container } from './styles'
import { useState } from 'react'

function Form({ handleAddNote }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleBody = (event) => {
    setBody(event.target.value)
  }

  const handleSaveClick = () => {
    if (title.trim().length > 0 && body.trim().length > 0) {
      handleAddNote(title, body)
    }
  }

  return (
    <Container>
      <input type="text" placeholder="Título" onChange={handleTitle} />
      <textarea
        rows={8}
        placeholder="Escreva sua nota..."
        value={body}
        onChange={handleBody}
      />
      <button onClick={handleSaveClick}>Criar Nota</button>
    </Container>
  )
}

export default Form
