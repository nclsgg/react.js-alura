import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  margin: 2.5rem auto;
  padding: 0 2.5rem;
  max-width: 1120px;

  .notes {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    ul {
      display: flex;
      flex-direction: column;
      list-style-type: none;

      li + li {
        margin-top: 1rem;
      }
    }
  }
`
