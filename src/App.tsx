import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Command } from '@tauri-apps/api/shell'
import { event } from '@tauri-apps/api'


function App() {
  const [count, setCount] = useState(0)

  const handleOpen = () => {
    window.open("localhost:4000")
  }

  // const handleStart = () => {
  //   // `binaries/my-sidecar` is the EXACT value specified on `tauri.conf.json > tauri > bundle > externalBin`
  //   const command = Command.sidecar('binaries/demo')

  //   // console.log('123142')

  //   event.listen('message', (event) => {
  //     console.log(event.payload)
  //   })

  //   command.on('close', (data) => {
  //     console.log(`command finished with code ${data.code} and signal ${data.signal}`)
  //   })

  //   command.on('error', (error) =>
  //     console.log(`command error: "${error}"`)
  //   )

  //   command.stdout.on('data', (line) =>
  //     console.log(`command stdout: "${line}"`)
  //   )

  //   command.stderr.on('data', (line) =>
  //     console.log(`command stderr: "${line}"`)
  //   )

  //   command.spawn()
  // }

  return (
    <div style={{
      display: 'flex',
      height: '100%'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        flex: 0.5
      }}>





      </div>
      <iframe style={{
        flex: 0.5
      }} src="http://localhost:4000" />
    </div>
  )
}

export default App
