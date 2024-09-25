
import AboutOfHome from '../../Layout/AboutOfHome'
import CoursesHome from '../../Layout/CoursesHome'
import HomeFAQ from '../../Layout/HomeFAQ'
import HomeSecond from '../../Layout/HomeSecond'
import HomeTopLast from '../../Layout/HomeTopLast'
import Placement from '../../Layout/Placement'
import Testmonials from '../../Layout/Testmonials'


const Home = () => {
  return (
    <>
    {/* <HeroTop text1={"Home"} /> */}
    <HomeTopLast />
    <HomeSecond />
    <AboutOfHome />
    <CoursesHome />
    <HomeFAQ />
    <Placement />
    <Testmonials />
    </>
  )
}

export default Home