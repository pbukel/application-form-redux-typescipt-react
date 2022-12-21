import React from 'react'
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setFromButtons,setShowLegal } from "../features/states";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 20px;
  width: 724px;
  height: 750px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 2px 5px #aaaaaa;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;
const Data = styled.div`
  margin-top: 80px;
  width: 571px;
  height: 473px;
  overflow: scroll;
  text-align: left;
  font: normal normal normal 14px/20px Inter;
  letter-spacing: 0px;
  color: #7f7f7f;
  opacity: 1;
`;
const Name = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-left: 40px;
`;
const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-left: 140px;
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

function LeagalData() {
  const show = useAppSelector((state) => state.states.value);
  const dispatch = useAppDispatch();
  function showLegal(show:boolean):void{
    dispatch(setShowLegal(show))
  }
  return (
   <Container>
        <Name>Contact Person</Name>
        <Data>
          I hereby agree that all data submitted herein regarding the company I
          represent along with my submitted personal data shall be used for
          direct marketing purposes with the aim of sending business financing
          proposals targeted and tailored to the aforementioned represented
          company, by UAB SME Finance, UAB SME Finance Leasing and UAB SME Bank.
          <br />
          <br />I hereby agree that all data submitted herein regarding the
          company I represent along with my submitted personal data shall be
          used for direct marketing purposes with the aim of sending business
          financing proposals targeted and tailored to the aforementioned
          represented company, by UAB SME Finance, UAB SME Finance Leasing and
          UAB SME Bank.
          <br />
          <br />I hereby agree that all data submitted herein regarding the
          company I represent along with my submitted personal data shall be
          used for direct marketing purposes with the aim of sending business
          financing proposals targeted and tailored to the aforementioned
          represented company, by UAB SME Finance, UAB SME Finance Leasing and
          UAB SME Bank.
          <br />
          <br /> I hereby agree that all data submitted herein regarding the
          company I represent along with my submitted personal data shall be
          used for direct marketing purposes with the aim of sending business
          financing proposals targeted and tailored to the aforementioned
          represented company, by UAB SME Finance, UAB SME Finance Leasing and
          UAB SME Bank.
          <br />
          <br />I hereby agree that all data submitted herein regarding the
          company I represent along with my submitted personal data shall be
          used for direct marketing purposes with the aim of sending business
          financing proposals targeted and tailored to the aforementioned
          represented company, by UAB SME Finance, UAB SME Finance Leasing and
          UAB SME Bank.
          <br />I hereby agree that all data submitted herein regarding the
          company I represent along with my submitted personal data shall be
          used for direct marketing purposes with the aim of sending business
          financing proposals targeted and tailored to the aforementioned
          represented company, by UAB SME Finance, UAB SME Finance Leasing and
          UAB SME Bank. I hereby agree that all data submitted herein regarding
          the company I represent along with my submitted personal data shall be
          used for direct marketing purposes with the aim of sending business
          financing proposals targeted and tailored to the aforementioned
          represented company, by UAB SME Finance, UAB SME Finance Leasing and
          UAB SME Bank. I hereby agree that all data submitted herein regarding
          the company I represent along with my submitted personal data shall be
          used for direct marketing purposes with the aim of sending business
          financing proposals targeted and tailored to the aforementioned
          represented company, by UAB SME Finance, UAB SME Finance Leasing and
          UAB SME Bank. I hereby agree that all data submitted herein regarding
          the company I represent along with my submitted personal data shall be
          used for direct marketing purposes with the aim of sending business
          financing proposals targeted and tailored to the aforementioned
          represented company, by UAB SME Finance, UAB SME Finance Leasing and
          UAB SME Bank. I hereby agree that all data submitted herein regarding
          the company I represent along with my submitted personal data shall be
          used for direct marketing purposes with the aim of sending business
          financing proposals targeted and tailored to the aforementioned
          represented company, by UAB SME Finance, UAB SME Finance Leasing and
          UAB SME Bank. I hereby agree that all data submitted herein regarding
          the company I represent along with my submitted personal data shall be
          used for direct marketing purposes with the aim of sending business
          financing proposals targeted and tailored to the aforementioned
          represented company, by UAB SME Finance, UAB SME Finance Leasing and
          UAB SME Bank. I hereby agree that all data submitted herein regarding
          the company I represent along with my submitted personal data shall be
          used for direct marketing purposes with the aim of sending business
          financing proposals targeted and tailored to the aforementioned
          represented company, by UAB SME Finance, UAB SME Finance Leasing and
          UAB SME Bank.
        </Data>
        <Buttons>
          <Button direction="back" onClick={():void => showLegal(false)} >Back</Button>
        </Buttons>
      </Container>
  )
}

export default LeagalData