import { Container } from './styles'
import { AiOutlineClose } from 'react-icons/ai'

function NoteCard({ handleDeleteNote, id, title, body }) {
  return (
    <li>
      <Container>
        <header>
          <h3>{title}</h3>
          <span onClick={() => handleDeleteNote(id)}>
            <AiOutlineClose />
          </span>
        </header>
        <p>{body}</p>
      </Container>
    </li>
  )
}

export default NoteCard
