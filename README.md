# 설정

- .prettierc

```json
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "trailingComma": "all"
}
```

- jsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES6"
  }
}
```

# 의존성

- react-router-dom : 라우터
- sass, styled-components, classnames : 스타일링 목적
- @loadable/component : 지연로딩
- immer : 불변성 관리
- axios : ajax
- i18next, react-i18next : 메세지, 다국어 처리
- react-helmet-async : head 태그 내부 구성을 변경할때
- react-icons : 리액트에서 제공하는 아이콘 모음

```
yarn add react-router-dom sass styled-components classnames @loadable/component immer axios i18next react-i18next react-icons
```

```
npm i react-router-dom sass styled-components classnames @loadable/component immer axios i18next react-i18next react-icons
```

# 초기 구성 - src/index.js
- HelmetProvider
- BrowserRouter

# 화면 설계

## 메인 페이지
![메인페이지](https://github.com/OasisDefinitelyMaybe/Project_FE/assets/143994457/8f36f3b3-28d9-423c-b75b-9d30c459f428)

## 이주의데무(게시판) + 로그인 페이지 
![게시판+로그인](https://github.com/OasisDefinitelyMaybe/Project_FE/assets/143994457/b871d5e5-fee5-48d0-8b05-9db55063eaad)
