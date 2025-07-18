import Header from "./Header"
import Footer from "./Footer"
import type { ReactNode} from "react"
import '../styles/Layout.css'
// import { useState } from "react"

interface LayoutProp{
    children : ReactNode
}

// const [theme, setTheme] = useState('dark');

const Layout = ({children}:LayoutProp) => {
  return (
    <div className="bg-(--primary-bg-color)">
      <div className= {`bg-(--primary-bg-color) grid grid-flow-row gap-[2rem] grid-rows-[auto_1fr_auto] min-h-dvh p-[2rem] w-[92%] md:w-[55%] mx-auto`}>
          <Header/>
          {children}
          <Footer/>
      </div>
    </div>
  )
}

export default Layout;  