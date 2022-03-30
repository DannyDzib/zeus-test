import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import sx from "./styles"
// Import Swiper styles
import "swiper/css"

const SwiperCarousel = (props) => {
  const { data = [] } = props
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      style={sx.root}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <img
            src={item?.image}
            alt={item?.description}
            style={sx.imageCarousel}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperCarousel
