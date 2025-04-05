import { useRef } from 'react'
import './App.css'

function App() {
  const inputTag = useRef()
  const outputTag = useRef()

  function createTag() {
    const tagInput = inputTag.current.value;
    outputTag.current.innerHTML = `<${tagInput}>The text is changing according to input tags</${tagInput}>`;
    inputTag.current.value = "";
  }

  return (
    <>
      <input type="text" ref={inputTag} placeholder='Enter HTML tag' />
      <button onClick={createTag}>Create Tag</button>
      <div ref={outputTag}></div>
    </>
  )
}

export default App
