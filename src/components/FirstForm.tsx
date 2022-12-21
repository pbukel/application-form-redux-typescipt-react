import React from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setFromButtons } from "../features/states";

const Container = styled.div`
  height: 100vh;
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`;

const Form = styled.div`
  /* margin: auto 0; */
  margin-top: 20px;
  margin-left: 10px;
  /* margin-bottom: auto; */
  max-width: 724px;
  height: 567px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 2px 5px #aaaaaa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Name = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-left: 70px;
`;
const AllInputs = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 75%;
`;
const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #cccccc;
  border-radius: 8px;
`;
const Select = styled.select`
  width: 106%;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #cccccc;
  border-radius: 8px;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
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

function FirstForm() {
  const dispatch = useAppDispatch();
  function moveFormBackNext(direction: string): void {
    dispatch(setFromButtons(direction))
  }
  return (
    <Container>
      <Form style={{ backgroundColor: "white" }}>
        <Name>Company</Name>
        <AllInputs>
          <Input placeholder="Company Code"></Input>
          <Input placeholder="Company Name"></Input>
          <Select placeholder="Country of registration">
            {/* <option value="">Country of registration</option> */}
            <option value="Lithuania">Lithuania</option>
            <option value="Germany">Germany</option>
            <option value="Great Britain">Great Britain</option>
          </Select>
          <Buttons>
            <Button direction="back" onClick={():void => moveFormBackNext("back")}>Back</Button>
            <Button direction="next" onClick={():void => moveFormBackNext("next")}>Next</Button>
          </Buttons>
        </AllInputs>
      </Form>
    </Container>
  );
}

export default FirstForm;
