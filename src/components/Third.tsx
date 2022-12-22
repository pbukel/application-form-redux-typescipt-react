import styled from "styled-components";
import { useAppDispatch } from "../app/hooks";
import { setFromButtons } from "../features/states";
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Form = styled.div`
  /* margin: auto 0; */
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 20px;
  max-width: 650px;
  height: 500px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 2px 5px #aaaaaa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: scroll;
  padding-bottom: 20px;
`;

const Name = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-left: 45px;
`;
const AllInputs = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 75%;
`;

const Buttons = styled.div`
  width: 106%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

interface buttonProps {
  direction: string;
}

const Button = styled.button<buttonProps>`
  padding: 10px 20px;
  height: 52px;
  width: 100px;
  border-radius: 26px;
  color: ${(props) => (props.direction === "back" ? "#3E71F4" : "white")};
  background-color: ${(props) =>
    props.direction === "back" ? "white" : "#3E71F4"};
  border: 1px solid
    ${(props) => (props.direction === "back" ? "#3E71F4" : "white")};
  cursor: pointer;
`;

function Third() {
  const dispatch = useAppDispatch();
  function moveFormBackNext(direction: string): void {
    dispatch(setFromButtons(direction));
  }
  return (
    <Container>
      <Form style={{ backgroundColor: "white" }}>
        <Name>Beneficial owners</Name>
        <AllInputs>
          <Buttons>
            <Button
              direction="back"
              onClick={(): void => moveFormBackNext("back")}
            >
              Back
            </Button>
            <Button
              direction="next"
              onClick={(): void => moveFormBackNext("next")}
            >
              Next....
            </Button>
          </Buttons>
        </AllInputs>
      </Form>
    </Container>
  );
}

export default Third;
