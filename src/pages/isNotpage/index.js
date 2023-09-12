import React from "react";
import { Wrapper, Text, TextWrapper, InterestingButton } from "./index.style";
import { Link } from "react-router-dom"; 

export const IsNotpage = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Text>Sorry, page is not found!</Text>
        {/* Используйте Link для создания ссылки на главную страницу */}
        <Link to="/">
          <InterestingButton size="l" view="primery">
            Вернуться на главную страницу
          </InterestingButton>
        </Link>
      </TextWrapper>
    </Wrapper>
  );
};
