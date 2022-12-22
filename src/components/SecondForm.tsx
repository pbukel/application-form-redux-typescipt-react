import React from "react";
import styled from "styled-components";
import LeagalData from "./LeagalData";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  setFromButtons,
  setShowLegal,
  setValues,
  setError2,
  removeError2,
} from "../features/states";

const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Form = styled.div`
  box-sizing: border-box;
  margin: 20px 10px;
  max-width: 650px;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 2px 5px #aaaaaa;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  padding-bottom: 20px;
`;

const Name = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-left: 40px;
`;
const AllInputs = styled.div`
  margin-top: 20px;
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
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  border-radius: 8px;
`;
const PhoneContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  gap: 15px;
`;
const Select = styled.select`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  flex: 1.5;
`;
const Phone = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  flex: 3.5;
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

const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
`;
const Checkbox = styled.input``;
const Text = styled.div`
  font-size: 11px;
  opacity: 1;
  text-align: left;
  letter-spacing: 0px;
`;

const Span = styled.span`
  color: #2b64f5;
  cursor: pointer;
`;
const ErrorMessage = styled.div`
  color: #ff0000c3;
  font-size: 12px;
  width: 100%;
  margin-left: 10px;
`;

function SecondForm() {
  const show = useAppSelector((state) => state.states.value);
  const data = useAppSelector((state) => state.states.values);
  const dispatch = useAppDispatch();
  const errors = useAppSelector((state) => state.states.secondFormErrors);
  console.log(errors);

  function moveFormBackNext(direction: string): void {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (data.name.length < 3) {
      dispatch(setError2("name"));
    } else {
      dispatch(removeError2("name"));
    }
    if (data.surname.length < 3) {
      dispatch(setError2("surname"));
    } else {
      dispatch(removeError2("surname"));
    }
    if (data.email.length === 0 || expression.test(data.email) === false) {
      dispatch(setError2("email"));
    } else {
      dispatch(removeError2("email"));
    }
    // if (direction === "back") dispatch(setFromButtons(direction));
    dispatch(setFromButtons(direction));
  }
  function showLegal(show: boolean): void {
    dispatch(setShowLegal(show));
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
        <Name>Contact Person</Name>
        <AllInputs>
          <InputContainer>
            <Input
              placeholder="Name"
              onChange={(e) => handleInput(e, "name")}
            ></Input>
            {errors.includes("name") === true ? (
              <ErrorMessage>
                Wrong input. It must contain at least 6 digits
              </ErrorMessage>
            ) : (
              ""
            )}
          </InputContainer>
          <InputContainer>
            <Input
              placeholder="Surname"
              onChange={(e) => handleInput(e, "surname")}
            ></Input>
            {errors.includes("surname") === true ? (
              <ErrorMessage>
                Wrong input. It must contain at least 6 digits
              </ErrorMessage>
            ) : (
              ""
            )}
          </InputContainer>
          <InputContainer>
            <Input
              placeholder="Job title"
              onChange={(e) => handleInput(e, "jobTitle")}
            ></Input>
            {errors.includes("jobTitle") === true ? (
              <ErrorMessage>
                Wrong input. It must contain at least 6 digits
              </ErrorMessage>
            ) : (
              ""
            )}
          </InputContainer>
          <InputContainer>
            <Input
              placeholder="E-mail address"
              onChange={(e) => handleInput(e, "email")}
            ></Input>
            {errors.includes("email") === true ? (
              <ErrorMessage>Wrong email adress!</ErrorMessage>
            ) : (
              ""
            )}
          </InputContainer>

          <PhoneContainer>
            <Select placeholder="Job title">
              {/* <option value="">Country of registration</option> */}
              <option value="+370">+370 Lithuania</option>
              <option value="+42">+42 Germany</option>
              <option value="+44">+44 Great Britain</option>
            </Select>
            <Phone
              placeholder="Phone No."
              onChange={(e) => handleInput(e, "phone")}
            ></Phone>
          </PhoneContainer>
          <CheckboxContainer>
            <Checkbox type="checkbox"></Checkbox>
            <Text>
              I hereby agree that all data submitted herein regarding the
              company I represent along with my submitted personal data shall be
              used for direct marketing purposes with the aim of sending
              business financing proposals targeted and tailored to the
              aforementioned represented company, by UAB SME Finance, UAB SME
              Finance Leasing and UAB SME Bank.{" "}
              <Span onClick={(): void => showLegal(true)}>
                Please click to expand
              </Span>
            </Text>
          </CheckboxContainer>
          <CheckboxContainer>
            <Checkbox type="checkbox"></Checkbox>
            <Text>
              I hereby agree that UAB SME Finance (legal entity code 304254910,
              address at Antano Tumėno str. 4-1101 (hereinafter – SME Finance))
              and other companies as provided, acting in partnership herewith:
              UAB „SME Finance Leasing“ (legal entity code 305625261, address at
              Antano Tumėno str. 4-15 (hereinafter – SME Finance Leasing)) and
              UAB SME Bank{" "}
              <Span onClick={(): void => showLegal(true)}>
                Please click to expand
              </Span>
            </Text>
          </CheckboxContainer>

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
              Next
            </Button>
          </Buttons>
        </AllInputs>
      </Form>
      {show && <LeagalData></LeagalData>}
    </Container>
  );
}

export default SecondForm;
