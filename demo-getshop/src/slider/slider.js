import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.css";

function Slider() {
  return (
    <Swiper
      className="swiper"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="slide">
        <div className="slideContent">
          <img
            src="https://s3-alpha-sig.figma.com/img/1c62/a9fb/28a21c99964860a925039d89573297ea?Expires=1644796800&Signature=Zr8-msxNhoFD2hHRhlbfGngv1QDpDWK9wvMBoI8-cq9BvK3-8dVV5a4N~YuSiRJ0l3yeJgjUyVhVL0fNu1pUpQZcKPjfB-42b90UYUkYnPHV2q-B2mqScT4cHubz09T1KFxEc9UaAH3Yy-CGJ5lpAjx5cg19BmSMGJ~bN3~LheXLHc6iORS2YbQP~Nnrz29X8PQRzb0X0NYhYrUw5eSg0p~VjcSa33wRKeQjjamWYbo~FuC6G8PZvpdfDbAsfHmKgSO6cC~J-33cZu~ImxNCdC2xeW5Q-Yt8-5QUoEHznxkiIiLfjo2IQPOyLfR21C9m1EBBs4lFVdWfM98CcKGnqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="pic1"
          ></img>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <div className="slideContent">
          <img
            src="https://s3-alpha-sig.figma.com/img/1a95/8ad6/92b6469058ebcc97c2ecff76dfb6cbe4?Expires=1644796800&Signature=Le8Wwuo6CpELXkStP9q0LHhHXe0XLpbbcHmZG2v7W-6N~ZC7z~ZXuXBF7S6FdleU5l3qzWrBi8ZiuVy2nJx64aG20LnPli~pV6Q~~kfnOpAACO1JTskBz68dlBe1ULn~IcMNWph43OeVPnKFncz5EkNgzz6FeP87Ws-Dm5B2mQl4SU8dYyldX8sr5at9QdWhm7nOByrE-fucKSu9IQlu5lze7QsRawXYL~KfgqYvfbJz8VqKqndIwzUoRg9rFAMpNY4-teR0kAl8daCb0iPD24drJEH-yPVQHkWxCF6N58V~c7B9nZVHp6xqoNQCXlbeb9vdbJKreEZgOhdmTbjvqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="pic2"
          ></img>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <div className="slideContent">
          <img
            src="https://s3-alpha-sig.figma.com/img/de44/3188/8e7fd12748e6d0c5f1b0bf916c744a9a?Expires=1644796800&Signature=ADMxK-G0s~U8jO8E8NbI-fGsHfUiIRixSfFEBXhEc1~jmsza92V6~hzTWt3zB2fr1XXIZwqet8-FweX~hs7~5pSxa-WDE2rOBDN9wYRi1AFz83Kd3WC1XEN-dIvaYnNVgbABhqdz8a-Zw5-d4-q70lt0W~Bm11UR-ruKIB~P07W7UFATS0QmfAkoTxPmeOl3EllKaE3Wn04QoncA~cvxXvPbQ6AMaXB0IAqHnijIPj2R94tvSOGTMqGDVIHK0xvZlIqLg5P1flQexE1KlHJ9zvPHvA8zI-KVONcyMQ6b-PGt22WaEij9G9rbFwG79pG23JsQdiZTlaMw46kJUpQAJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="pic3"
          ></img>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
