import logo from '../../assets/svg/logo.svg';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
    </Container>
  );
}
