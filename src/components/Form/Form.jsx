import { Container } from './styles'

function Form() {
  return (
    <Container>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota..." />
        <button>Criar Nota</button>
      </form>
    </Container>
  )
}

export default Form
