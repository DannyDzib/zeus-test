import SwiperCarousel from "components/SwiperCarousel"
import Box from "@mui/material/Box"
import sx from "./styles"

const HomePage = () => {
  const swiper = [
    {
      image: "https://rb.gy/3pqivy",
      description: "Estructuree",
    },
    {
      image: "https://rb.gy/l0dmqx",
      description: "Estructuree",
    },
    {
      image: "https://rb.gy/wtycvh",
      description: "Estructuree",
    },
  ]
  return (
    <Box sx={sx.swiperContent}>
      <SwiperCarousel data={swiper} />
    </Box>
  )
}

export default HomePage
