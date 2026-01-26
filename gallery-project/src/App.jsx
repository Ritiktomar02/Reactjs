import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([])
  const [index, setIndex] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const res = await axios.get(
          `https://picsum.photos/v2/list?page=${index}&limit=10`
        )
        setData(res.data)
      } catch (err) {
        console.log('Error: ', err)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [index])

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-gray-100 to-gray-200 flex flex-col">

      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center py-6 sm:py-8 text-gray-800">
        Image Gallery
      </h1>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-8">
        {loading ? (
          <div className="text-gray-500 text-lg animate-pulse">
            Loading images...
          </div>
        ) : (
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-7">
              {data.map((ele) => (
                <div
                  key={ele.id}
                  className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="overflow-hidden">
                    <img
                      src={ele.download_url}
                      alt={ele.author}
                      className="h-40 sm:h-44 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="px-3 py-2 text-center">
                    <p className="text-sm font-medium text-gray-700 truncate">
                      {ele.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-white/80 backdrop-blur border-t">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-5">
          <button
            disabled={index === 1 || loading}
            onClick={() => setIndex((prev) => prev - 1)}
            className="px-6 py-2 rounded-full border text-sm font-medium
              border-gray-300 text-gray-700
              hover:bg-gray-100
              disabled:opacity-40 disabled:cursor-not-allowed
              transition"
          >
            Prev
          </button>

          <span className="px-4 py-1 rounded-full bg-gray-900 text-white text-sm font-semibold">
            Page {index}
          </span>

          <button
            disabled={loading}
            onClick={() => setIndex((prev) => prev + 1)}
            className="px-6 py-2 rounded-full bg-gray-900 text-white text-sm font-medium
              hover:bg-gray-800
              disabled:opacity-40 disabled:cursor-not-allowed
              transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
