import { lightTheme } from "./theme"
import globalStyles from "./theme/global-styles"

function App() {
  globalStyles()

  return (
    <div className={lightTheme}>
    </div>
  )
}

export default App
