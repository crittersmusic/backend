import React from 'react'
import { Header } from './components/Header'
import { ProjectPanel } from './components/ProjectPanel'
import { Toolbar } from './components/Toolbar'
import { KnowledgeTools } from './components/KnowledgeTools'

function App() {
  return (
    <div className="min-h-screen bg-background text-white p-4">
      <Header />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProjectPanel />
        <div className="md:col-span-2 flex flex-col gap-4">
          <Toolbar />
          <KnowledgeTools />
        </div>
      </div>
    </div>
  )
}

export default App
