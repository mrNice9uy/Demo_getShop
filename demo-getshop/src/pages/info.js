import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../slider/slider";

import "../styles/info.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../slider/slider.css";

function Info() {
  let navigate = useNavigate();

  return (
    <div>
      <div className="wrapper">
        <Slider />
      </div>
      <div className="container">
        <div className="inputBlock">
          <h2>
            Заявка<br></br> принята
          </h2>
          <p>
            Держите телефон под рукой.<br></br>Скоро с Вами ссвяжется наш
            менеджер
          </p>
          <button className="toHome" onClick={() => navigate("/")}>
            На главную
          </button>
        </div>
        <main className="mainInfo">
          <button className="xBtn" onClick={() => navigate("/")}>
            x
          </button>
          <div className="qrBlock">
            <div className="qrBlock__text">
              Сканируйте QR-код для получения дополнительной информации
            </div>
            <div className="qrBlock__img">
              <img
                src="https://s3-alpha-sig.figma.com/img/d3e6/c6d5/054c4d12c8284b9538de2bc5858a7e1f?Expires=1644796800&Signature=CHN87w~JeK5MaDueTfvGZko-xSJokUJd6ZisIsr6rvEmfJcLYK5jD~BUoHWa~EaUYG6jQESzIC3bdI~xSSy1zv2U9yu6g5ciR3XUFi4D~uNzQZpqUnqmM4kA5vm-isvckesUjYllPeSWYSqJU6uv8Yq7y3V2SplDvlo1iF~J015e-glnsZ~HDMVjW9v0B900aL5NDxsbHG~JVHcHJWPxpwTfsHzkQl77WcsN9tDKcWp~8rIkkDjYnccYhl9jzILQnEhbIs3TOwIkfFrjUiD4BgA~UciZJfGhJTRNxoKpaRlLFMdozJHVXAdNavTnBF3muBJRC4BgDCsvz63dIWgbJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="pic"
              ></img>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Info;
