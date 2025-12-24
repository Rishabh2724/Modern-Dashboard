import './App.css'
import Sidebar from './components/Sidebar'
import Folders from './components/Folders'
import Topbar from './components/Topbar'
import Content from './components/Content'

function App() {
  return (
    <div className="mt-1 min-h-screen grid grid-cols-[5rem_16rem_1fr]">

      {/* Sidebar */}
      <aside className="h-screen overflow-hidden">
        <Sidebar />
      </aside>

      {/* Folders */}
      <section className="h-screen overflow-hidden ">
        <Folders />
      </section>

      {/* Right content area */}
      <section className="h-screen flex flex-col overflow-hidden">

        {/* Topbar */}
        <header className="h-16 flex-shrink-0">
          <Topbar />
        </header>

        {/* White card container */}
        <main className="flex-1 ml-3 mt-3 mr-5 mb-5 rounded-[40px] border border-gray-200 bg-[#fafafa] shadow-sm overflow-hidden">
          <Content />
        </main>

      </section>
    </div>
  )
}

export default App
