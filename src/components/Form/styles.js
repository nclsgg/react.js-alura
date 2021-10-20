import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  margin: 2.5rem auto;
  max-width: 500px;

  form {
    display: flex;
    flex-direction: column;

    input {
      max-width: 500px;
      padding: 0.5rem;
      height: 100%;
      width: 100%;
      margin-bottom: 0.5rem;

      background-color: white;
      border-radius: 0.5rem;
      border: 0;
      box-sizing: border-box;
      outline: 0;

      color: var(--title-color);
      font-size: 1rem;
    }

    textarea {
      max-width: 500px;
      min-height: 2rem;
      padding: 0.5rem;
      height: 100%;
      width: 100%;
      margin-bottom: 0.5rem;

      background-color: white;
      border-radius: 0.5rem;
      border: 0;
      box-sizing: border-box;
      outline: 0;

      color: var(--title-color);
      font-size: 1rem;
    }

    button {
      width: 100%;
      height: 100%;

      background-color: var(--blue-light);
      border: 0;
      padding: 1.5rem;
      border-radius: 0.5rem;

      font-size: 1rem;
      color: var(--shape);
      font-weight: 900;

      transition: filter(0.3s);

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`
