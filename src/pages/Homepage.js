import { Title } from "../styled/Title.style";
import { Link } from "react-router-dom";
import { navbarItems } from "../data/data";
import styled from "styled-components";

export default function Homepage() {
  return (
    <div
      style={{
        borderRadius: 20,
        maxWidth: 600,
        marginLeft: 5,
        textAlign: "left",
        margin: 20,
      }}
    >
      <Title style={{ textAlign: "left" }}>Hello there 👋 </Title>
      <p style={{ textAlign: "left" }}>
        This app is here to help you during your portfolio project. It contains
        example code for features you might want to add to your app. Even though
        the code here, don't forget to do some research on your own and make
        sure you understand.
      </p>
      <ul style={{ margin: "10px 70px" }}>
        {navbarItems.map((item) => (
          <li style={{ textAlign: "left" }}>
            <LinkWord to={item.path}>{item.title}</LinkWord>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

const LinkWord = styled(Link)`
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #2f2fa2;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: blue;
  }
`;
