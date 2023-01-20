import { Habit } from "./components/Habit";
import "./styles/global.css";

export function App() {
  return (
    <div>
      <Habit completed={32} />
      <Habit />
      <Habit completed={64}/>
      <Habit />
      <Habit completed={128}/>
      <Habit />
    </div>
  );
}

export default App;

