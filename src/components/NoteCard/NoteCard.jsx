import { Container } from './styles'

function NoteCard() {
  return (
    <li>
      <Container>
        <header>
          <h3>Estudar frontend</h3>
        </header>
        <p>
          Entrar no curso da alura 9:15 da manhã e estudar frontend até às 16
          horas da tarde.
        </p>
      </Container>
    </li>
  )
}

export default NoteCard
