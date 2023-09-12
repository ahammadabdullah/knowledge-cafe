import './App.css'
import Blogs from './component/body/Blogs/Blogs'
import Bookmarks from './component/body/Bookmarks/Bookmarks/Bookmarks'
import Header from './component/header/Header'

function App() {

  return (
    <>
    <Header></Header>
    <main className="max-w-7xl mx-auto flex gap-6">
      <Blogs ></Blogs>
      <Bookmarks ></Bookmarks>
    </main>
    </>
  )
}

export default App
