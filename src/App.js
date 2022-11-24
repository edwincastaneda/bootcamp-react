import logo from './logo.svg'
import './App.css'
import { ComponenteA } from './ejercicios/1,2,3/ComponenteA'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/*<TaskListComponent></TaskListComponent>*/}
                <ComponenteA></ComponenteA>
            </header>
        </div>
    )
}

export default App
