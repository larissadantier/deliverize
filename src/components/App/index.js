import { ThemeProvider } from 'styled-components';
import Home from '../../pages/Home';
import Header from '../Header';
import defaultTheme from '../../assets/styles/themes/default';
import GlobalStyles from '../../assets/styles/global';
import { Container } from './styles';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  );
}
