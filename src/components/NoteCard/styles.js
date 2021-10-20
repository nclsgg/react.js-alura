import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  background: white;
  border-radius: 0.5rem;

  header {
    margin-bottom: 0.25rem;
    color: var(--text-title);
  }

  p {
    color: var(--text-body);
    max-width: 300px;
  }
`
