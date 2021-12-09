import "./style.css";

import Code from "./Code";

// function based component

function App() {
  const code_texts = [
    "$ npm init vite@latest",
    "$ yarn create vite",
    "$ pnpm create vite",
  ];

  function toggle_menu(id) {
    const element = document.querySelector(`#${id}`);

    if (element.classList.contains("show")) {
      element.classList.remove("show");
      element.classList.add("hide");
    } else {
      element.classList.add("show");
      element.classList.remove("hide");
    }
  }

  return (
    <div>
      <button
        className="menu-bar"
        onClick={() => {
          toggle_menu("menu");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* <div className="sidebar show">
        <div className="content">
          ><button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button
        </div>
      </div> */}

      <div className="drop-down" id="menu">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>

      {code_texts.map((code_text) => (
        <Code code_text={code_text} />
      ))}
    </div>
  );
}

// class based component

// import React from "react";

// class App extends React.Component {
//   render() {
//     return (
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, officiis
//         minima quibusdam possimus tenetur optio ea veniam exercitationem omnis
//         architecto perferendis neque sint laboriosam? Omnis in tempora
//         repudiandae fuga. Repellat?
//       </p>
//     );
//   }
// }

export default App;

// () => {
//   return 10
// }

// () => (10)
