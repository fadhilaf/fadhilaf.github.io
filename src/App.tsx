import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import useLocalStorage from 'use-local-storage';
import styles from './App.module.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blogs';

function App() {
  const location = useLocation();

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches; //kalo misal lah ado settingan di browsernyo "prefer dark", langsung didefaultken dark
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

	const switchTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
	}

  return (
    <div className="App" data-theme={theme}>
      <Header path={location.pathname} switchTheme={switchTheme}/>
      <div className={styles.body}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
