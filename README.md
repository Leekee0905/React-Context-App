# Context API를 사용한 결제 페이지
React Context를 사용하여 주문 상품 가격 계산을 하는 간단한 페이지  

강의: https://fastcampus.co.kr/classroom/203720

## createContext

```javascript
import { createContext } from 'react';

const MyContext = createContext(defaultValue)
```

Context 객체는 React에서 Context 객체를 구독하는 구성 요소를 렌더링할 때 트리에서 그 위에 가장 근접하게 일치하는 Provider에서 현재 컨텍스트 값을 읽게한다. createContext는 Context 객체를 생성하는 것.


## Provider
```javascript
function App() {
  const [theme, setTheme] = useState('light');
  // ...
  return (
    <ThemeContext.Provider value={theme}>
      <Page />
    </ThemeContext.Provider>
  );
}
```

모든 Context 객체에는 Consumer Component가 컨텍스트 변경 사항을 구독 할 수 있는 Provider React 구성요소가 함께 제공된다. Provider 내부에 있는 컴포넌트들은 Context내의 value에 변경 사항이 생기면 다시 렌더링 하게 된다.

## useContext
```javascript 
const value = useContext(SomeContext)
```
Context 객체의 Consumer대신 사용할 수 있는 Hook이다. 원래는 Context의 Consumer로 감싸 그 안에서 Context의 value값을 사용 할 수 있지만 useContext를 사용하면 Provider 내부에 있는 컴포넌트에서 Consumer로 감싸지 않아도 value값을 꺼내 사용할 수 있다.


