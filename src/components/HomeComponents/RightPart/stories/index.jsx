import { StoriesData } from "./storiesData";
import { Swiper, SwiperSlide } from "swiper/react";

const Stories = () => {
  return (
    <>
      <div className="mb-4">
        <h4 className="font-gilroyBold text-lg text-black">Stories</h4>
      </div>

      <div className="w-[300px]">
        <Swiper spaceBetween={6} slidesPerView={3}>
          {StoriesData.map((story, index) => (
            <SwiperSlide
              key={index}
              style={{ background: `url(${story.bgPicture})` }}
              className="h-[200px] rounded-md bg-cover bg-no-repeat"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden object-cover ml-2 mt-2 border-2 border-primary_color">
                <img src={story.picture} alt="friend story" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <div className="flex items-center gap-x-2">
        
      </div> */}
    </>
  );
};

export default Stories;
