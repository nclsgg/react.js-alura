import NoteCard from '../NoteCard/NoteCard'
import { Container } from './styles'

function Notes() {
  return (
    <Container>
      <ul>
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </ul>
    </Container>
  )
}

export default Notes
