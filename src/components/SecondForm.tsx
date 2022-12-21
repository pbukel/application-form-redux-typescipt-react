import React from "react";
import styled from "styled-components";
import LeagalData from "./LeagalData";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setFromButtons, setShowLegal } from "../features/states";

const Container = styled.div`
  height: 100vh;
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  position: relative;
`;

const Form = styled.div`
  /* margin: auto 0; */
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 20px;
  max-width: 724px;
  height: 750px;
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
  margin-top: 40px;
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
  width: 106%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
`;
const Checkbox = styled.input``;
const Text = styled.div`
  font-size: 13px;
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
  const dispatch = useAppDispatch();
  function moveFormBackNext(direction: string): void {
    dispatch(setFromButtons(direction));
  }
  function showLegal(show: boolean): void {
    dispatch(setShowLegal(show));
  }

  return (
    <Container>
      <Form style={{ backgroundColor: "white" }}>
        <Name>Contact Person</Name>
        <AllInputs>
          <InputContainer>
            <Input placeholder="Name"></Input>
            <ErrorMessage>
              Wrong input. It must contain at least 6 digits
            </ErrorMessage>
          </InputContainer>
          <InputContainer>
            <Input placeholder="Surname"></Input>
            <ErrorMessage>
              Wrong input. It must contain at least 6 digits
            </ErrorMessage>
          </InputContainer>
          <InputContainer>
            <Input placeholder="Job title"></Input>
            <ErrorMessage>
              Wrong input. It must contain at least 6 digits
            </ErrorMessage>
          </InputContainer>
          <InputContainer>
            <Input placeholder="Job title"></Input>
            <ErrorMessage>
              Wrong input. It must contain at least 6 digits
            </ErrorMessage>
          </InputContainer>
          <InputContainer>
            <Input placeholder="E-mail address"></Input>
            <ErrorMessage>
              Wrong input. It must contain at least 6 digits
            </ErrorMessage>
          </InputContainer>

          <PhoneContainer>
            <Select placeholder="Job title">
              {/* <option value="">Country of registration</option> */}
              <option value="Lithuania">Lithuania</option>
              <option value="Germany">Germany</option>
              <option value="Great Britain">Great Britain</option>
            </Select>
            <Phone placeholder="Phone No."></Phone>
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
            <Button direction="next">Next</Button>
          </Buttons>
        </AllInputs>
      </Form>
      {show && <LeagalData></LeagalData>}
    </Container>
  );
}

export default SecondForm;
