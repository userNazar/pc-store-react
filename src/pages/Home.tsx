import HomeBoardCateries from '../components/home/HomeBoardCateries'
import HomeFooter from '../components/home/footer/HomeFooter'
import HomeHeaderSlider from '../components/home/HomeHeaderSlider'
import HomeNewProducts from '../components/home/HomeNewProducts'

export default function Home() {
  return (
    <>
      <HomeHeaderSlider />
      <HomeNewProducts />
      <HomeBoardCateries />
      <HomeFooter />
    </>
  )
}
