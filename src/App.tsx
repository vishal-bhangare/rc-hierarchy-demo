import { Hierarchy } from "rc-hierarchy";
import "./App.css";

function App() {
  const data = {
    root: {
      it: {
        "Software Development": {
          "Frontend Developer": {},
          "Backend Developer": {},
        },
        "Data Science & Analytics": {},
      },
      "not-it": {
        "Sales & Marketing": {
          "Marketing Manager": {},
        },
        "Finance & Accounting": {},
      },
    },
  };
  return <Hierarchy data={data} />;
}

export default App;
