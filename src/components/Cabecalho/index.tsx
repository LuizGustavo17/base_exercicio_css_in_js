import styled from 'styled-components';

const CabecalhoWrapper = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`;

const Cabecalho = () => (
  <CabecalhoWrapper>
    <h1>EBAC Jobs</h1>
  </CabecalhoWrapper>
);

export default Cabecalho;
