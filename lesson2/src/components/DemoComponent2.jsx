import { AuthContextDemo } from "../contexts/AuthContextDemo";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const DemoComponent2 = () => {
  const [text, setText] = useState("");
  const { message, setMessage } = useContext(AuthContextDemo);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setMessage(text);
    navigate("/Demo1");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText(value);
  };
  return (
    <>
      <h2>Demo 2 Page</h2>
      {message && <p>Message From Component 1: {message}</p>}
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Go to Demo2</button>
    </>
  );
};

export default DemoComponent2;
