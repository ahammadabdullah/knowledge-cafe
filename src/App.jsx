import { useState } from 'react'
import './App.css'
import Blogs from './component/body/Blogs/Blogs'
import Bookmarks from './component/body/Bookmarks/Bookmarks/Bookmarks'
import Header from './component/header/Header'

function App() {
  const [readingTime, setReadingTime] = useState(0)
  const [bookmark, setBookmark] = useState([])

  const handleBookmark = blog => {
    const newBookmark = [...bookmark, blog]
    setBookmark(newBookmark)
  }
  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)
    const remainingBookmarks = bookmark.filter(bookmark => bookmark.id !== id)
    setBookmark(remainingBookmarks)
  }
  

  return (
    <>
    <Header></Header>
    <main className="max-w-7xl mx-auto flex gap-6">
      <Blogs handleMarkAsRead={handleMarkAsRead} handleBookmark={handleBookmark} ></Blogs>
      <Bookmarks readingTime={readingTime} bookmark={bookmark} ></Bookmarks>
    </main>
    </>
  )
}

export default App
