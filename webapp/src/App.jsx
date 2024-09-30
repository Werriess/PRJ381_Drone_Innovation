import "./styles.css";
import Router from "./components/router";
import { RouterProvider } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
} 