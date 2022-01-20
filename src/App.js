import React from "react";
import { useSpring, a } from "@react-spring/web";
import styled from "styled-components";
import "./styles.css";

export default function App() {
  const [toggle, setToggle] = React.useState(false);
  const styles = useSpring({
    from: {
      width: "0%",
      backgroundColor: "#aaa"
    },
    to: async (next) => {
      if (toggle) {
        await next({
          width: "100%"
        });
        await next({
          backgroundColor: "skyblue"
        });
      } else {
        await next({
          backgroundColor: "#aaa"
        });
        await next({
          width: "0%"
        });
      }
    }
  });
  return (
    <div className="App">
      <Container onClick={() => setToggle(!toggle)}>
        <Meter style={styles} />
      </Container>
    </div>
  );
}

const Container = styled("div")({
  width: 400,
  height: 70,
  backgroundColor: "#ccc"
});

const Meter = styled(a.div)({
  width: 400,
  height: 70,
  backgroundColor: "skyblue"
});
