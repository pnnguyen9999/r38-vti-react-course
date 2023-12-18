import { useState } from "react";
import CardClassComponent from "./components/CardClassComponent";
import CardFunctionComponent from "./components/CardFunctionComponent";
import logo from "./logo.svg";
import router from "./router/routes";
import Menu from "./components/Menu";
import MemoComponent from "./components/MemoComponent";
import EmployeeList from "./components/EmployeeList";
import Mouse from "./components/Mouse";
import useWindowSize from "./hook/useWindowSIze";
// import './App.css';

let textStyle = { color: "#61DAFB" };
let dshv = [
  {
    id: 1,
    name: "Quang",
    age: 17,
    grade: 11,
    badgeType: "hh1",
  },
  {
    id: 2,
    name: "Binh",
    age: 23,
    grade: "DH12",
    badgeType: "hh3",
  },
  {
    id: 3,
    name: "Nguyen",
    age: 30,
    grade: "DH30",
    badgeType: "hh2",
  },
  {
    id: 4,
    name: "Trang",
    age: 30,
    grade: "DH30",
    badgeType: "hh6",
  },
];

function Badge(props) {
  function badgeColor() {
    switch (props.badgeType) {
      case "hh1":
        return "#ff0000";
      case "hh2":
        return "#00ff00";
      case "hh3":
        return "#0000ff";
      default:
        return "#000000";
    }
  }
  return <div style={{ color: badgeColor() }}>Badge +</div>;
}

function Greeting(isLoggedIn) {
  if (isLoggedIn) {
    return <div>Hello user !</div>;
  } else {
    return <div>Hello guest !</div>;
  }
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const { width, height } = useWindowSize();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ inputValue });
  };

  return (
    <>
      <div>
        <Mouse
          render={(mouseLocation) => (
            <div>
              Location x: {mouseLocation.x}, Location y: {mouseLocation.y}
              <div>Chiều rộng cửa sổ: {width}</div>
              <div>Chiều cao cửa sổ: {height}</div>
            </div>
          )}
        />
        {/* <EmployeeList /> */}
        {/* <Menu /> */}
        {/* {router} */}
        {/* {dshv.map((hv, index) => (
          <CardFunctionComponent
            key={hv.id}
            name={hv.name}
            age={hv.age}
            grade={hv.grade}
            badge={<Badge badgeType={hv.badgeType} />}
          >
            <h1>This is chilren</h1>
          </CardFunctionComponent>
        ))}
      </div>
      <h1>{inputValue}</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <input type="submit" value="send to server" />
        </form> */}
      </div>
    </>
  );
}

export default App;
