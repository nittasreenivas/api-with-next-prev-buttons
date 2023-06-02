import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
export default function App() {
  const [prod, setProd] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log("res::", res.data);
      setProd([...res.data.slice(0, 5)]);
    });
  }, []);
  const handleNext = () => {
    if (index === prod.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const handlePrev = () => {
    if (index === 0) {
      setIndex(prod.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  return (
    <div className="App">
      <div>
        {prod.length > 0 && (
          <div className="prod">
            <h4> {prod[index].title} </h4>
            <img alt="" src={prod[index].image} width={100} />
            <h4> ${prod[index].price}</h4>
            <div>
              <button onClick={handlePrev}> PREV</button>&nbsp;&nbsp;
              <button onClick={handleNext}> NEXT</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
