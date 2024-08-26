import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

// L : 연락처 등록 폼, R : 연락처 리스트와 search창
// 리스트에 유저 이름과 전화번호를 추가 가능
// 리스트에 아이템이 몇개있는지 보인다
// 사용자가 유저를 이름검색으로 찾을 수 있음

function App() {
  return (
    <Container>
    <div className='App'>
      <h1 className='title'>Phone Book</h1>
      <Container className=''>
        <Row>
          <Col><ContactForm/></Col>
          <Col><ContactList/></Col>
        </Row>
      </Container>
    </div>

    </Container>
  );
}

export default App;
