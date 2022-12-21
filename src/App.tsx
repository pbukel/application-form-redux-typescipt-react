import "./App.css";
import styled from "styled-components";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import FirstForm from "./components/FirstForm";
import SecondForm from "./components/SecondForm";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { setIndex } from "./features/states";

const Container = styled.div`
  background-color: #f5f5f5;
  width: 100vw;
  height: 100vh;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92px;
  width: 100%;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-weight: 600;
  font-size: 35px;
  color: #2b64f5;
  cursor: pointer;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font: normal normal normal 28px/60px Inter;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font: normal normal normal 16px/60px Inter;
  color: #2b64f5;
  cursor: pointer;
`;
const MainContainer = styled.div`
  display: flex;
  /* align-items: center; */
  height: calc(100vh - 92px);
`;
const ProgressContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgresBox = styled.div`
  margin-left: 50px;
  width: 227px;
  height: 350px;
`;
const Percentage = styled.div`
  height: 5%;
  width: 100%;
  font: normal normal normal 16px/20px Inter;
  color: #2b64f5;
  margin-bottom: 12px;
`;
const StepperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 95%;
  width: 100%;

  padding-left: 8px;
`;
const Step = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;
const Line = styled.div`
  width: 2px;
  height: 100%;
  background-color: #7f7f7f;
  margin-right: 37px;
`;
const StepName = styled.div`
  font: normal normal normal 16px/20px Inter;
  color: #b2b2b2;
`;
const CheckBox = styled.div`
  display: flex;
  align-items: center;
  height: 19px;
  width: 19px;
  margin-left: 8px;
`;

const FormContainer = styled.div`
  flex: 3;
  margin-left: 170px;
  height: 100%;
  /* position: relative; */
  overflow: hidden;
  /* border: 2px solid red; */
`;

interface stateProps {
  index: number;
}
const Wrapper = styled.div<stateProps>`
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  transition: all 1.1s ease;
  transform: translateY(${(props) => props.index * -100}vh);
  /* transform: translateY(000vh); */
  /* border: 10px solid green; */
`;

function App() {
  const index = useAppSelector((state) => state.states.index);
  const dispatch = useAppDispatch();

  function moveFormFromStepper(i: Number): void {
    dispatch(setIndex(i));
  }

  return (
    <Container>
      <Header>
        <Left>smeGo</Left>
        <Center>Application</Center>
        <Right>Fill in later</Right>
      </Header>
      <MainContainer>
        <ProgressContainer>
          <ProgresBox>
            <Percentage>15%</Percentage>
            <StepperContainer>
              <Step>
                <Line></Line>
                <StepName>Product and Amount</StepName>
                <CheckBox>
                  <CheckCircleOutlineRoundedIcon color="primary" />
                </CheckBox>
              </Step>
              <Step onClick={():void => moveFormFromStepper(0)}>
                <Line></Line>
                <StepName>Company</StepName>
                <CheckBox>
                  <CheckCircleOutlineRoundedIcon color="primary" />
                </CheckBox>
              </Step>
              <Step onClick={(): void => moveFormFromStepper(1)}>
                <Line></Line>
                <StepName>Contact person</StepName>
                <CheckBox>
                  <CheckCircleOutlineRoundedIcon color="primary" />
                </CheckBox>
              </Step>
              <Step>
                <Line></Line>
                <StepName>Beneficial owners</StepName>
                <CheckBox>
                  <CheckCircleOutlineRoundedIcon color="primary" />
                </CheckBox>
              </Step>
              <Step>
                <Line></Line>
                <StepName>Factoring type</StepName>
                <CheckBox>
                  <CheckCircleOutlineRoundedIcon color="primary" />
                </CheckBox>
              </Step>
              <Step>
                <Line></Line>
                <StepName>Third parties</StepName>
                <CheckBox>
                  <CheckCircleOutlineRoundedIcon color="primary" />
                </CheckBox>
              </Step>
            </StepperContainer>
          </ProgresBox>
        </ProgressContainer>
        <FormContainer>
          <Wrapper index={index}>
            <FirstForm></FirstForm>
            <SecondForm></SecondForm>

            {/* <FormContainer2>
              <Form style={{ backgroundColor: "blue", height: "650px" }}></Form>
            </FormContainer2> */}
            {/* <Form style={{ backgroundColor: "red" }}></Form> */}
            {/* <Form style={{ backgroundColor: "blue" }}></Form> */}
            {/* <Form style={{ backgroundColor: "white" }}></Form> */}
            {/* <Form></Form> */}
          </Wrapper>
        </FormContainer>
      </MainContainer>
    </Container>
  );
}

export default App;
