import React, { useEffect } from 'react'
import {
  Switch,
  Route,
  useLocation,
  useHistory,
  Redirect,
} from 'react-router-dom'
import Home from './pages/Home'
import {
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
  Project7,
  Project8,
  Project9,
  Project10,
  Project11,
  Project12,
  Project13,
  Project14,
  Project15,
  Project16,
  Project17,
  Project18,
  Project19,
  Project20,
  Project21,
} from './pages/Projects'
// import Contact from "./pages/Contact";
import { AnimatePresence } from 'framer-motion'

const App = () => {
  const location = useLocation()
  let history = useHistory()

  useEffect(() => {
    const handleScrollToElement = (e) => {
      console.log(e.wheelDeltaY)
      const url = window.location.origin + '/'

      const wheelRouter = (after, before) => {
        if (e.wheelDeltaY < 0) {
          setTimeout(() => {
            history.push(after)
          }, 500)
        } else if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            history.push(before)
          }, 500)
        }
      }

      switch (window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0) {
            setTimeout(() => {
              history.push('projet-1')
            }, 500)
          }
          break
        case url + 'projet-1':
          wheelRouter('projet-2', '')
          break
        case url + 'projet-2':
          wheelRouter('projet-3', 'projet-1')
          break
        case url + 'projet-3':
          wheelRouter('projet-4', 'projet-2')
          break
        case url + 'projet-4':
          wheelRouter('projet-5', 'projet-3')
          break
        case url + 'projet-5':
          wheelRouter('projet-6', 'projet-3')
          break
        case url + 'projet-6':
          wheelRouter('projet-7', 'projet-4')
          break
        case url + 'projet-7':
          wheelRouter('projet-8', 'projet-5')
          break
        case url + 'projet-8':
          wheelRouter('projet-9', 'projet-6')
          break
        case url + 'projet-9':
          wheelRouter('projet-10', 'projet-7')
          break
        case url + 'projet-10':
          wheelRouter('projet-11', 'projet-8')
          break
        case url + 'projet-11':
          wheelRouter('projet-12', 'projet-9')
          break
        case url + 'projet-12':
          wheelRouter('projet-13', 'projet-10')
          break
        case url + 'projet-13':
          wheelRouter('projet-14', 'projet-11')
          break
        case url + 'projet-14':
          wheelRouter('projet-15', 'projet-12')
          break
        case url + 'projet-15':
          wheelRouter('projet-16', 'projet-13')
          break
        case url + 'projet-16':
          wheelRouter('projet-17', 'projet-14')
          break
        case url + 'projet-17':
          wheelRouter('projet-18', 'projet-15')
          break
        case url + 'projet-18':
          wheelRouter('projet-19', 'projet-16')
          break
        case url + 'projet-19':
          wheelRouter('projet-20', 'projet-17')
          break
        case url + 'projet-20':
          wheelRouter('projet-21', 'projet-18')
          break
        case url + 'projet-21':
          if (e.wheelDeltaY > 0) {
            setTimeout(() => {
              history.push('projet-19')
            }, 500)
          }
          break
        default:
          console.log('nothing')
      }
    }
    window.addEventListener('wheel', handleScrollToElement)
  }, [history])

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route path="/projet-1" component={Project1} />
        <Route path="/projet-2" component={Project2} />
        <Route path="/projet-3" component={Project3} />
        <Route path="/projet-4" component={Project4} />
        <Route path="/projet-5" component={Project5} />
        <Route path="/projet-6" component={Project6} />
        <Route path="/projet-7" component={Project7} />
        <Route path="/projet-8" component={Project8} />
        <Route path="/projet-9" component={Project9} />
        <Route path="/projet-10" component={Project10} />
        <Route path="/projet-11" component={Project11} />
        <Route path="/projet-12" component={Project12} />
        <Route path="/projet-13" component={Project13} />
        <Route path="/projet-14" component={Project14} />
        <Route path="/projet-15" component={Project15} />
        <Route path="/projet-16" component={Project16} />
        <Route path="/projet-17" component={Project17} />
        <Route path="/projet-18" component={Project18} />
        <Route path="/projet-19" component={Project19} />
        <Route path="/projet-20" component={Project20} />
        <Route path="/projet-21" component={Project21} />
        {/* <Route path="/contact" component={Contact} /> */}
        <Redirect to="/" />
      </Switch>
    </AnimatePresence>
  )
}

export default App
