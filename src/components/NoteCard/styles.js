import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  overflow-wrap: break-word;

  header {
    margin-bottom: 0.25rem;
    color: var(--text-title);
    display: flex;
    justify-content: space-between;

    span {
      color: var(--text-body);
      cursor: pointer;

      transition: filter 0.5s;

      :hover {
        filter: brightness(0.7);
      }
    }
  }
  p {
    color: var(--text-body);
    width: 100%;
  }
`
