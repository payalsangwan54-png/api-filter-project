import{usestate} from 'react'
import'./app.css'
import Mnop from './components/Mnop'
function App(){
    const a ="this is prop";
    return (
        <div>
            this is app
            <Mnop data={a}/>
            </div>
    )
}
export default App 
