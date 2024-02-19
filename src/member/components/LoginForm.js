import React from "react";
import styled from "styled-components";
import { InputText } from "../../commons/components/InputBoxStyle";
import { MediumButton } from "../../commons/components/ButtonStyle";
import { useTranslation } from "react-i18next";

const LoginBox = styled.form`
     display: flex;
     flex-direction: column;
     align-items: center;
     
   .inner {
    width: 350px;
   }
`;

const LoginForm = () => {
    const { t } = useTranslation();
  return (
  <LoginBox>
    <div className="inner">
    <h1>{t('로그인')}</h1>
    <InputText type="text" name="email" placeholder={t('이메일')} />
    <InputText type="password" name="password" placeholder={t('비밀번호')} />
    <MediumButton type="submit" bcolor="primary" fcolor="#fff">{t('로그인')}</MediumButton>
    </div>
  </LoginBox>
  );
};

export default React.memo(LoginForm);