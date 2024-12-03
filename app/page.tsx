'use client'
import ReduxProvider from '../store/ReduxProvider'
import '../styles/global.css'
import AITextForm from './AITextForm'
import WorksheetViewer from './components/WorksheetGenerator/WorksheetViewer'

export default function Page() {
  return (
    <ReduxProvider>
      <main className="mx-auto p-8">
        <h1 className="text-5xl">Arbeitsblatt Generator</h1>
        <div className="mx-auto grid grid-cols-5">
          <div className="col-span-2">
            <AITextForm />
          </div>
          <div className="col-span-3 h-[100vh]">
            <WorksheetViewer />
          </div>
        </div>
        {/*<div className="w-full">*/}
        {/*  <MessageList />*/}
        {/*</div>*/}
      </main>
    </ReduxProvider>
  )
}
