import React, { useState } from "react";
import { createPortal } from "react-dom";
import {
  Modal,
  ModalContent,
  Button,
  Input,
  CloseButton,
  InputContainer,
  SocialLogin,
} from "./index.style";

export const LoginModal = ({ isOpen, onClose, onGoogleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Здесь вы можете добавить логику для обработки введенного логина и пароля
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return createPortal (
    <Modal className={isOpen ? "open" : ""}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Авторизация</h2>
        <form>
          <InputContainer>
            <Input
              type="text"
              placeholder="Логин"
              value={username}
              onChange={handleUsernameChange}
            />
          </InputContainer>
          <InputContainer>
            <Input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={handlePasswordChange}
            />
          </InputContainer>
          <Button type="button" onClick={handleLogin}>
            Войти
          </Button>
          <SocialLogin>
            <Button onClick={onGoogleLogin}>Войти через Google</Button>
          </SocialLogin>
        </form>
      </ModalContent>
    </Modal>,
    document.body

  );
};
import React from "react";
import { createPortal } from "react-dom";
import { ModalBackdrop, ModalContent, ModalWrapper } from "./index.style";

export const Modal = ({ children, isOpen, onClose }) => {

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <ModalWrapper id="my-first-modal">
      <ModalContent>{children}</ModalContent>
      <ModalBackdrop onClick={onClose}/>
    </ModalWrapper>,
    document.body
  );
};
