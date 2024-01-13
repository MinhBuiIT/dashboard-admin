import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'
import Bar from './scene/Bar'
import Calendar from './scene/Calendar'
import Contacts from './scene/Contacts'
import Dashboard from './scene/Dashboard'
import FAQ from './scene/FAQ'
import Geo from './scene/Geo'
import SlideBar from './scene/Global/SlideBar'
import TopBar from './scene/Global/TopBar'
import Invoices from './scene/Invoices'
import Line from './scene/Line'
import Pie from './scene/Pie'
import ProfileForm from './scene/ProfileForm'
import Team from './scene/Team'
import { ContextTheme, useMode } from './theme'
function App() {
  const [theme, themeContext] = useMode()
  return (
    <ContextTheme.Provider value={themeContext}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/*reset css */}
        <div className='app'>
          <SlideBar />
          <main className='content'>
            <TopBar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='team' element={<Team />} />
              <Route path='contacts' element={<Contacts />} />
              <Route path='invoices' element={<Invoices />} />
              <Route path='contacts' element={<Contacts />} />
              <Route path='form' element={<ProfileForm />} />
              <Route path='calendar' element={<Calendar />} />
              <Route path='faq' element={<FAQ />} />
              <Route path='bar' element={<Bar />} />
              <Route path='pie' element={<Pie />} />
              <Route path='line' element={<Line />} />
              <Route path='geography' element={<Geo />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ContextTheme.Provider>
  )
}

export default App
