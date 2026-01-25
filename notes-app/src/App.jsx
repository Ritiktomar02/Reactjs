import React, { useEffect, useState } from 'react'

const App = () => {
  const [notesarray, setNotesArray] = useState([])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  // Load notes on first render
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || []
    setNotesArray(storedNotes)
  }, [])

  // Save to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notesarray))
  }, [notesarray])

  const submitHandler = (e) => {
    e.preventDefault()

    if (!title || !desc) return

    const newNote = { title, desc }
    setNotesArray(prev => [...prev, newNote])

    setTitle('')
    setDesc('')
  }

  const DeleteHandler=(idx)=>{
   
  const copyarray=[...notesarray];

  const newarray=copyarray.filter((_,i)=>i!==idx)

  setNotesArray(newarray)

  }

  return (
    <div className='h-screen bg-black text-white overflow-auto'>

      <form className='flex gap-4 p-10 flex-col items-start' onSubmit={submitHandler}>
        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>

        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className='px-5 w-full font-medium h-32 py-2 border-2 outline-none rounded'
          placeholder='Write Details here'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button className='bg-white active:scale-90 font-medium w-full text-black py-2 rounded'>
          Add Note
        </button>
      </form>

      <div className='p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>

        <div className='flex flex-wrap gap-5 mt-6'>
          {notesarray.map((ele, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between h-52 w-40 rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover"
            >
              <div>
                <h3 className='text-lg font-bold'>{ele.title}</h3>
                <p className='mt-2 text-xs font-semibold text-gray-600'>{ele.desc}</p>
              </div>

              <button className='bg-red-500 py-1 text-xs rounded font-bold text-white' onClick={()=>DeleteHandler(idx)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default App
