'use client'
import ReduxProvider from '../store/ReduxProvider'
import '../styles/global.css'
import WorksheetForm from './WorksheetForm'
import WorksheetWrapper from './components/WorksheetWrapper'

export default function Page() {
  return (
    <ReduxProvider>
      <main className="mx-auto p-8">
        <h1 className="text-5xl">Arbeitsblatt Generator</h1>
        <div className="mx-auto grid grid-cols-5">
          <div className="col-span-5 lg:col-span-2">
            <WorksheetForm />
          </div>
          <div className="col-span-5 lg:col-span-3">
            <WorksheetWrapper />
          </div>
          <div className="col-span-3">{/*<WorksheetValidator />*/}</div>
          {/*<div className="col-span-5">*/}
          {/*  <WorksheetViewer />*/}
          {/*</div>*/}
        </div>
      </main>
    </ReduxProvider>
  )
}
