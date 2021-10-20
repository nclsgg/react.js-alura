import NoteCard from '../NoteCard/NoteCard'
import { Container } from './styles'

function Notes() {
  return (
    <Container>
      <ul>
        {Array.of('Trabalho', 'Estudo', 'Lazer').map((category, index) => {
          return (
            <li key={index}>
              <div className="category">{category}</div>
              <NoteCard />
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default Notes
