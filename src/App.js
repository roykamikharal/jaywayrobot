import {useState} from "react";
import './App.css';
import {RobotComponent} from "./Components/robot.component";
import InputElement from "./Components/input.element";
import {VALIDATION_CONFIG} from "./config/validation.config";
import {useForm} from "react-hook-form";
import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material/styles"
const theme = createTheme()

const robotsInitialVal = {
    x:0,
    y:0,
    z:"N",
    a:""
}

const startInitialVal = {
    x:0,
    y:0,
    z:"N"
}

function App() {

    const [robotsLocation , setRobotsLocation] = useState(robotsInitialVal);

    const [startLocation , setStartLocation] = useState(startInitialVal);

    const [roomSize] = useState({
        x:5,
        y:5
    });

    const [showFinalValue , setShowFinalValue] = useState(false);

    const {
        control,
        watch,
        handleSubmit,
        setValue,
        formState: { errors, isValid },
    } = useForm({ mode: "all" })

    const onSubmit = async (data, event) => {
        event.preventDefault()
        const splitStartLocation = data?.startPosition?.split(",");
        setRobotsLocation(robotsInitialVal);
        setStartLocation(() =>{
            return {
                x:parseInt(splitStartLocation[0]),
                y:parseInt(splitStartLocation[1]),
                z:splitStartLocation[2]
            }
        })
        startMovement(data)
    }

    const startMovement = ({instructions}) =>{
        const splitInstructions = instructions.split("");

        splitInstructions.map((nextMove) =>{
            switch (nextMove) {
                case "R":
                    setRobotsLocation((location) =>{
                        return {
                            ...location,
                            a:"R"
                        }
                    })
                    break;
                case "F":
                    setRobotsLocation((location) =>{
                        const locationData ={...location};
                        if (locationData.a === 'L' && locationData.x < roomSize.x ){
                            locationData.x = locationData.x + 1;
                        }
                        if (locationData.a === 'R' && locationData.y < roomSize.y){
                            locationData.y = locationData.y + 1;
                        }
                        return {
                            ...locationData
                        }
                    })
                    break;
                case "L":
                    setRobotsLocation((location) =>{
                        return {
                            ...location,
                            a:"L"
                        }
                    })
                    break;
                default:
                    break;
            }
        })

        setShowFinalValue(true);

    }

    const x = robotsLocation.x-startLocation.x;
    const y = robotsLocation.y-startLocation.y;

  return (
      <ThemeProvider theme={theme}>
            <div className="App">
              <div className="robotOuterView">
                  <RobotComponent/>
                  {showFinalValue &&
                  <div>
                      <h1>
                          {Math.abs(x)} {Math.abs(y)} {startLocation.z}
                      </h1>
                  </div>}
              </div>
                <div className="robotOuterView" >
                   <div style={{width:500}}>
                       <form onSubmit={handleSubmit(onSubmit)}>
                           <InputElement
                               label="Start Position"
                               name="startPosition"
                               required
                               placeholder="2,4,N"
                               rules={{
                                   message: "Please Follow pattern (2,4,N)",
                                   required: VALIDATION_CONFIG.required,
                                   pattern: VALIDATION_CONFIG.withComma,
                                   minLength:5
                               }}
                               control={control}
                               errors={errors}
                               autoFocus
                               autocomplete="off"
                           />

                           <InputElement
                               label="Instructions"
                               name="instructions"
                               required
                               placeholder="LRF"
                               rules={{
                                   required: VALIDATION_CONFIG.required,
                                   pattern: VALIDATION_CONFIG.validInstruction,
                               }}
                               control={control}
                               errors={errors}
                               autoFocus
                               autocomplete="off"
                           />

                           <button style={{marginTop:20}} type="submit">Start Movement</button>
                       </form>
                   </div>
              </div>
            </div>
      </ThemeProvider>
  );
}

export default App;
