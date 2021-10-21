import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Form from './components/Form/Form'
import Notes from './components/Notes/Notes'
import { GlobalStyle } from './styles/global'

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: 'Titulo',
      body: 'Preciso fazer funcionar',
    },
  ])

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))

    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  const addNote = (title, body) => {
    const newNote = {
      id: nanoid(),
      title: title,
      body: body,
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <section>
      <Notes
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
      <GlobalStyle />
    </section>
  )
}

export default App
