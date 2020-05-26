import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

export default function FooterPage() {
  return (
    <Navbar collapseOnSelect expand='md' bg={'dark'} variant={'dark'}>
      <Container>
        <Nav className="mr-auto">
          <Nav.Link href={'https://vk.com/bags_gh'}>VK</Nav.Link>
          <Nav.Link href={'https://www.instagram.com/?hl=ru'}>Instagram</Nav.Link>
          <Nav.Link href={'https://www.twitch.tv/vorseek'}>Twitch</Nav.Link>
        </Nav>
        <Nav className="text-right">
          <Nav.Link> Copyright &copy; {new Date().getFullYear()} VorseekCompany</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
