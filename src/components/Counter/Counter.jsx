import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";

export const Counter = ({ text }) => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
    console.log(text);
  }, [text]);

  const someValue = useMemo(() => {
    return text.length;
  }, [text]);

  useEffect(() => {
    console.log("-=-=-=-=-=-=-=-=- like did mount + count changed, [count]");
  }, [count]);

  useEffect(() => {
    console.log("-=-=-=-=-=-=-=-=- like did mount + text changed, [text]");
  }, [text]);

  // useEffect(() => {
  //   console.log("-=-=-=-=-=-=-=-=- like did mount, []");
  // }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setCount((prevCount) => prevCount + 1),
      2000
    );
    console.log("-=-=-=-=-=-=-=-=- like did mount, []");

    return () => {
      clearInterval(interval);
      console.log("unmounting");
    };
  }, []);

  return (
    <>
      <h3>{count}</h3>
      <h3>{text}</h3>
      <button onClick={handleClick}>Click!</button>
    </>
  );
};

// export class Counter extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//       name: "Alex",
//     };

//     console.log("--------constructor--------");
//   }

//   componentDidMount() {
//     console.log("--------did mount--------");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("--------did update--------", prevProps, prevState);
//   }

//   componentWillUnmount() {
//     console.log("--------will unmount--------");
//   }

//   handleClick = () => {
//     this.setState(
//       (prevState) => ({ count: prevState.count + 1 }),
//       () => {
//         console.log(this.state.count);
//       }
//     );
//   };

//   render() {
//     console.log("--------render--------");

//     return (
//       <div>
//         <h3>{this.state.count}</h3>
//         <h3>{this.state.name}</h3>
//         <button onClick={this.handleClick}>Click!</button>
//       </div>
//     );
//   }
// }
