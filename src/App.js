//import logo from './logo.svg';
import "./App.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import About from "./Components/About";
import React, { useState, useEffect } from "react";
import AddTodo from "./Components/AddTodo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);

    // Deleting this way in react does not Work.
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1)

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    // console("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
    //localStorage.getItem("todos");
  };

  const addTodo = (title, desc) => {
    console.log("Adding this new To do", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  //     {
  //         sno: 1,
  //         title: "Exercise",
  //         desc: "To be feet and physically active all the day",
  //     },
  //     {
  //         sno: 2,
  //         title: "Bathing",
  //         desc: "To keep the body clean",
  //     },
  //     {
  //         sno: 3,
  //         title: "Cooking",
  //         desc: "Cooking food",
  //     },
  //     {
  //         sno: 4,
  //         title: "Meeting",
  //         desc: "Attending meeting with manager and colleagues",
  //     },
  //     {
  //         sno: 5,
  //         title: "Trading",
  //         desc: "Investing in stock market",
  //     },
  //     {
  //       sno: 6,
  //       title: "Shopping",
  //       desc: "To go to a supermarket for grocery shopping",
  //   },
  //   {
  //     sno: 7,
  //     title: "Hanging out",
  //     desc: "To hand out with old friends",
  // },
  // {
  //   sno: 8,
  //   title: "Coding",
  //   desc: "To practice code in hackerrank",
  // },
  // {
  //   sno: 9,
  //   title: "Entertainment",
  //   desc: "Watching IPL match Chennai vs Kolkata",
  // },
  // {
  //   sno: 10,
  //   title: "Medicine",
  //   desc: "Taking madicines as prescribe by the doctor",
  // },

  return (
    <>
      <Router>
        <Header title="Your Need 2DO List" searchBar={true} />
        <Routes>
          {/* according to react-router-dom v5(old version)
          <Route
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}/> */}
          
           {/* according to react-router-dom v6(latest version) */}
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />

          <Route path="/about" element={<About />} />
          {/* <About />
        </Route> */}
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
