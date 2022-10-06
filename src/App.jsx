import { useState, useEffect } from 'react'
import CardCharacter from './CardCharacter'

function App() {
  const [ numberPage, setnumberPage ] = useState(1) 
  const [elements, setElements] = useState([])

  const fetchApi = async () => {
    const url = `https://rickandmortyapi.com/api/character/?page=${numberPage}`
    const data = await fetch(url)
    const responseJson = await data.json()
    setElements(responseJson.results)
  }
  
  useEffect(() => {
    fetchApi()
  }, [])

  useEffect(() => {
    fetchApi()
  }, [numberPage])

  return (
    <div className="w-11/12 mx-auto font-sans">
      <h1 className="text-4xl text-center mt-3 mb-12 text-violet-500 font-semibold">Rick and Morty: Characters</h1>
      <div className="flex justify-between mb-6">
        <button 
          className="bg-violet-500 py-2 px-4 hover:bg-violet-700 text-white font-medium disabled:bg-slate-600 disabled:cursor-not-allowed"
          onClick={() => setnumberPage(numberPage - 1)}
          disabled={numberPage <= 1 ? true : false}
        >
          Previous
        </button>
        <button 
          className="bg-violet-500 py-2 px-6 hover:bg-violet-700 text-white font-medium"
          onClick={() => setnumberPage(numberPage + 1)}
        >
          Next
        </button>
      </div>
      <h2 className="mb-14 text-2xl text-violet-500 font-semibold">Page: {numberPage}</h2>

      <div className="flex flex-wrap justify-center">
        {elements.map(data => elements.length === 0 ? <p>Download</p> : <CardCharacter key={data.id} data={data} />)}
      </div>
    </div>
  )
}

export default App
