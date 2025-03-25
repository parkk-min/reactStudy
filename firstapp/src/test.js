// let x, y, z;

// [x, y] = [1, 2];
// console.log(x, y); // 1 2

// [x, y] = [1];
// console.log(x, y); // 1 undefined

// [x, y] = [1, 2, 3];
// console.log(x, y); // 1 2

// [x, , z] = [1, 2, 3];
// console.log(x, z); // 1 3 - 빈 공백은 건너뛴다.

// // 기본값
// [x, y, z = 3] = [1, 2];
// console.log(x, y, z); // 1 2 3

// [x, y = 10, z = 5] = [1, 2];
// console.log(x, y, z); // 1 2 3

// //배열안에 있는 구조들을 일반 변수로 나눠 담고 싶을때 주로 사용한다.








// import { useState } from 'react';

// function App() {
//   const [state, setState] = useState(""); // 초기값을 빈 문자열로 설정

//   // 텍스트 입력 시 상태 업데이트하는 함수
//   const handleChange = (event) => {
//     setState(event.target.value); // input의 값을 상태로 저장
//   };

//   return (
//     <div>
//       <input type="text" value={state} onChange={handleChange} />
//       <p>입력한 값: {state}</p>
//     </div>
//   );
// }

// export default App;



