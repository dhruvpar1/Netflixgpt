import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './browseComponents/MainContainer'
import SeconContainer from './browseComponents/SeconContainer'
const Browse = () => {
useNowPlayingMovies()
  return (
    <div>
      <Header/>
      <div className='flex '>

     <MainContainer/>
     {/* <SeconContainer/> */}
      </div>
    </div>
  )
}

export default Browse