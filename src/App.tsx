import { useRoutes } from "react-router-dom";
import { AppRoutes } from "./Routes/App.Routes";

function App() {
  const Routing = useRoutes(AppRoutes);
  return Routing;
}

export default App;
