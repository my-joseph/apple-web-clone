import Swiper from "swiper/bundle";
import "swiper/css/bundle";

let swiperInstance = {};
export function createSwiper(selector, option = {}) {
  if (swiperInstance[selector]) {
    swiperInstance[selector].destroy(true, true);
  }
  swiperInstance[selector] = new Swiper(selector, option);
  return swiperInstance[selector];
}
