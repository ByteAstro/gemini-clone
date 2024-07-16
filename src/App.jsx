import './App.css'
import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div className='h-screen flex bg-slate-900 text-white'>
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
