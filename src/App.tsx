import "./App.css";
import styled from "styled-components";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import FirstForm from "./components/FirstForm";
import SecondForm from "./components/SecondForm";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { setIndex } from "./features/states";
import Third from "./components/Third";
import Four from "./components/Four";
import Five from "./components/Five";
import Fade from "@mui/material/Fade";

const Container = styled.div`
  background-color: #f5f5f5;
  width: 100vw;
  height: 100vh;
  @media (max-width: 768px) {
    height: 120vh;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
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
  height: calc(100vh - 92px);
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: 110vh;
  }
`;
const ProgressContainer = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex: 0;
    width: 100%;
  }
`;

const ProgresBox = styled.div`
  width: 227px;
  height: 350px;
  @media (max-width: 768px) {
    width: 90%;
    height: 100%;
  }
`;
const Percentage = styled.div`
  height: 5%;
  width: 100%;
  font: normal normal normal 16px/20px Inter;
  color: #2b64f5;
  margin-bottom: 12px;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;
const StepperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 95%;
  width: 100%;
  padding-left: 8px;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const Step = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  margin-bottom: 4px;
  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
    height: 50px;
  }
`;
interface stepProps {
  step: number;
  index: number;
}
const Line = styled.div<stepProps>`
  transition: all 0.3s ease;
  width: 2px;
  height: 100%;
  background-color: ${(props) =>
    props.step < props.index ? "#2b64f5" : "#7f7f7f"};
  margin-right: 37px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const StepName = styled.div<stepProps>`
  transition: all 0.3s ease;
  font: normal normal normal 16px/20px Inter;
  color: ${(props) => (props.step < props.index ? "#2b64f5" : "#7f7f7f")};
  @media (max-width: 768px) {
    border-bottom: ${(props) =>
      props.step < props.index ? "2px solid #2b64f5" : "none"};
    height: 100%;
    align-items: center;
    font-size: 11px;
    width: 100%;
    text-align: center;
  }
`;
const CheckBox = styled.div`
  display: flex;
  align-items: center;
  height: 19px;
  width: 19px;
  margin-left: 8px;
  transition: all 1.1s ease;
  @media (max-width: 768px) {
    display: none;
  }
`;

const FormContainer = styled.div`
  flex: 3;
  height: 100%;
  overflow: hidden;
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
`;

function App() {
  const index = useAppSelector((state) => state.states.index);
  const percent = useAppSelector((state) => state.states.percentage);
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
            <Percentage>{percent}%</Percentage>
            <StepperContainer>
              <Step>
                <Line step={-1} index={index}></Line>
                <StepName step={-1} index={index}>
                  Product and Amount
                </StepName>
                <CheckBox>
                  <Fade in={true}>
                    <CheckCircleOutlineRoundedIcon color="primary" />
                  </Fade>
                </CheckBox>
              </Step>
              <Step onClick={(): void => moveFormFromStepper(0)}>
                <Line step={0} index={index}></Line>
                <StepName step={0} index={index}>
                  Company
                </StepName>
                <CheckBox>
                  <Fade in={0 < index ? true : false}>
                    <CheckCircleOutlineRoundedIcon color="primary" />
                  </Fade>
                </CheckBox>
              </Step>
              <Step onClick={(): void => moveFormFromStepper(1)}>
                <Line step={1} index={index}></Line>
                <StepName step={1} index={index}>
                  Contact person
                </StepName>
                <CheckBox>
                  <Fade in={1 < index ? true : false}>
                    <CheckCircleOutlineRoundedIcon color="primary" />
                  </Fade>
                </CheckBox>
              </Step>
              <Step>
                <Line step={2} index={index}></Line>
                <StepName step={2} index={index}>
                  Beneficial owners
                </StepName>
                <CheckBox>
                  <Fade in={2 < index ? true : false}>
                    <CheckCircleOutlineRoundedIcon color="primary" />
                  </Fade>
                </CheckBox>
              </Step>
              <Step>
                <Line step={3} index={index}></Line>
                <StepName step={3} index={index}>
                  Factoring type
                </StepName>
                <CheckBox>
                  <Fade in={3 < index ? true : false}>
                    <CheckCircleOutlineRoundedIcon color="primary" />
                  </Fade>
                </CheckBox>
              </Step>
              <Step>
                <Line step={4} index={index}></Line>
                <StepName step={4} index={index}>
                  Third parties
                </StepName>
                <CheckBox>
                  <Fade in={4 < index ? true : false}>
                    <CheckCircleOutlineRoundedIcon color="primary" />
                  </Fade>
                </CheckBox>
              </Step>
            </StepperContainer>
          </ProgresBox>
        </ProgressContainer>
        <FormContainer>
          <Wrapper index={index}>
            <FirstForm></FirstForm>
            <SecondForm></SecondForm>
            <Third></Third>
            <Four></Four>
            <Five></Five>
          </Wrapper>
        </FormContainer>
      </MainContainer>
    </Container>
  );
}

export default App;
