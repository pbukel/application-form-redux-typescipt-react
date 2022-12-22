import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  setError1,
  setFromButtons,
  setValues,
  removeError1,
} from "../features/states";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Form = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  max-width: 650px;
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

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  border-radius: 8px;
`;
const Select = styled.select`
  width: 100%;
  margin-bottom: 20px;
  padding: 15px;
  box-sizing: border-box;
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
const ErrorMessage = styled.div`
  color: #ff0000c3;
  font-size: 12px;
  width: 100%;
  margin-left: 10px;
`;

function FirstForm() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.states.values);

  const errors = useAppSelector((state) => state.states.firstFormErrors);
  console.log(errors.length === 0);
  function moveFormBackNext(direction: string): void {
    if (data.companyCode.length < 6) {
      dispatch(setError1("companyCode"));
    } else {
      dispatch(removeError1("companyCode"));
    }
    if (data.companyName.length < 3) {
      dispatch(setError1("companyName"));
    } else {
      dispatch(removeError1("companyName"));
    }
    dispatch(setFromButtons(direction));
  }
  function handleInput(
    event: React.ChangeEvent<HTMLInputElement>,
    value?: string
  ) {
    console.log(value, event.target.value);
    dispatch(setValues({ name: value, value: event.target.value }));
  }
  return (
    <Container>
      <Form style={{ backgroundColor: "white" }}>
        <Name>Company</Name>
        <AllInputs>
          <InputContainer>
            <Input
              placeholder="Company Code"
              onChange={(e) => handleInput(e, "companyCode")}
            ></Input>
            {errors.includes("companyCode") === true ? (
              <ErrorMessage>
                Wrong input. It must contain at least 6 digits
              </ErrorMessage>
            ) : (
              ""
            )}
          </InputContainer>

          <InputContainer>
            <Input
              placeholder="Company Name"
              onChange={(e) => handleInput(e, "companyName")}
            ></Input>
            {errors.includes("companyName") === true ? (
              <ErrorMessage>
                Wrong input. It must contain at least 3 characters
              </ErrorMessage>
            ) : (
              ""
            )}
          </InputContainer>

          <InputContainer>
            <Select placeholder="Country of registration">
              <option value="Lithuania">Lithuania</option>
              <option value="Germany">Germany</option>
              <option value="Great Britain">Great Britain</option>
            </Select>
          </InputContainer>

          <Buttons>
            <Button
              direction="back"
              // onClick={(): void => moveFormBackNext("back")}
            >
              Back
            </Button>
            <Button
              direction="next"
              onClick={(): void => moveFormBackNext("next")}
            >
              Next
            </Button>
          </Buttons>
        </AllInputs>
      </Form>
    </Container>
  );
}

export default FirstForm;
