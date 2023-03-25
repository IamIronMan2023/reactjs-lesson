import React, { useEffect, useState, useMemo } from "react";

const ClickCounterComponent = () => {
  const [intervalCount, setIntervalCount] = useState(0);
  const [button1ClickCount, setButton1ClickCount] = useState(0);
  const [button2ClickCount, setButton2ClickCount] = useState(0);
  const calculateNumber = useMemo(() => {
    slowCalculation(button1ClickCount);
  }, [button1ClickCount]);

  // const calculateNumber = slowCalculation(button1ClickCount);

  console.log("Render called");

  //   useEffect(() => {
  //     console.log("useEffect called every state changed");
  //   });

  //   useEffect(() => {
  //     console.log("useEffect mount");
  //   }, []);

  useEffect(() => {
    console.log("useEffect called every button 1 Click Count changed");
  }, [button1ClickCount]);

  useEffect(() => {
    console.log("useEffect called every button 2 Click Count changed");
  }, [button2ClickCount]);

  //   useEffect(() => {
  //     console.log("useEffect called button 1 and 2 Click Count changed");

  //     return () => {
  //       console.log("unmount");
  //     };
  //   }, [button1ClickCount, button2ClickCount]);

  //   useEffect(() => {
  //     console.log("useEffect with setinterval");

  //     const interval = setInterval(() => {
  //       setIntervalCount((prev) => prev + 1);
  //     }, 1000);

  //     return () => {
  //       console.log("unmount");
  //       clearInterval(interval);
  //     };
  //   }, []);

  //Referential equality
  // const person = { firstName: "Juan", lastName: "Dela Cruz" };

  // useEffect(() => {
  //   console.log("useEffect of person");

  //   return () => {
  //     console.log("unmount of person");
  //   };
  // }, [person]);

  function slowCalculation(number) {
    console.log("slow calculation");
    for (let i = 0; i <= 1000000000; i++) {}
    return number * 2;
  }

  return (
    <div>
      <p>
        <label>Click Count: {button1ClickCount} </label>
        <button onClick={(e) => setButton1ClickCount((prev) => prev + 1)}>
          Button 1
        </button>
      </p>
      <p>
        <label>Click Count: {button2ClickCount} </label>
        <button onClick={(e) => setButton2ClickCount((prev) => prev + 1)}>
          Button 2
        </button>
      </p>
      <p>
        <label>Interval: {intervalCount}</label>
      </p>
      <p>
        <label>Calculate Number Result: {calculateNumber}</label>
      </p>
    </div>
  );
};

export default ClickCounterComponent;
