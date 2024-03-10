import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './browseComponents/MainContainer'
import SeconContainer from './browseComponents/SeconContainer'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRated from '../Hooks/useTopRated'
import useUpcomingMovies from '../Hooks/useUpcomingMovies'
const Browse = () => {
useNowPlayingMovies();
usePopularMovies();
useTopRated();
useUpcomingMovies();
  return (
    <div className='box-border bg-black text-white overflow-hidden'>
      <Header/>
      <div className=' flex-col w-100  box-border overflow-hidden' >

     <MainContainer/>
     <SeconContainer/>
      </div>
    </div>
  )
}

export default Browse