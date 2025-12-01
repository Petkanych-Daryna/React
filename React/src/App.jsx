// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


function App() {
  const myName = "Daryna";

  const imageUrl = "https://hostiq.ua/blog/wp-content/uploads/2021/11/cat-jpg.jpg";
  const imageAlt = "Приклад зображення";

  const favSite = {
    name: "Google",
    url: "https://www.google.com/"
  };

  const num1 = 5;
  const num2 = 7;
  const sum = num1 + num2;

  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <div>
      <h1>{myName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>

      <img src={imageUrl} alt={imageAlt} />

      <p>
        Моє улюблене посилання:{" "}
        <a href={favSite.url} target="_blank" rel="noreferrer">
          {favSite.name}
        </a>
      </p>

      <p>Сума чисел: {sum}</p>

      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
