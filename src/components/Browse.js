import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './browseComponents/MainContainer'
import SeconContainer from './browseComponents/SeconContainer'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRated from '../Hooks/useTopRated'
import useUpcomingMovies from '../Hooks/useUpcomingMovies'
import GPTSearch from './browseComponents/GPTSearch'
import { useSelector } from 'react-redux'
const Browse = () => {
  const showGptSearch= useSelector(store=>store.gpt.showGptSearch)
useNowPlayingMovies();
usePopularMovies();
useTopRated();
useUpcomingMovies();
  return (
    <div className='box-border  text-white overflow-hidden'>
      <Header/>
      {showGptSearch ?<GPTSearch/>:
      
      <div className='bg-black flex-col w-100  box-border overflow-hidden' >

     <MainContainer/>
     <SeconContainer/>
      </div>
}

    </div>
  )
}

export default Browse