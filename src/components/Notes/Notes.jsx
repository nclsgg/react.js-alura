import Form from '../Form/Form'
import NoteCard from '../NoteCard/NoteCard'
import { Container } from './styles'

function Notes({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <Container>
      <Form handleAddNote={handleAddNote} />
      <div className="notes">
        <ul>
          {notes.map((note) => (
            <NoteCard
              id={note.id}
              title={note.title}
              body={note.body}
              handleDeleteNote={handleDeleteNote}
            />
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default Notes
