import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/home.css";

function Home() {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/number");
  };

  return (
    <div className="container">
      <div className="bgVideo">
        <div className="fgVideo">
          <iframe
            src="https://www.youtube.com/embed/M7FIvfx5J10?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&playlist=M7FIvfx5J10&modestbranding=1&iv_load_policy=3&showinfo=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
      <div className="sideBlock">
        <h4 className="text">
          ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! <br></br> ПОДАРИТЕ ЕМУ СОБАКУ!
        </h4>
        <img
          className="qr"
          src="https://s3-alpha-sig.figma.com/img/d3e6/c6d5/054c4d12c8284b9538de2bc5858a7e1f?Expires=1644796800&Signature=CHN87w~JeK5MaDueTfvGZko-xSJokUJd6ZisIsr6rvEmfJcLYK5jD~BUoHWa~EaUYG6jQESzIC3bdI~xSSy1zv2U9yu6g5ciR3XUFi4D~uNzQZpqUnqmM4kA5vm-isvckesUjYllPeSWYSqJU6uv8Yq7y3V2SplDvlo1iF~J015e-glnsZ~HDMVjW9v0B900aL5NDxsbHG~JVHcHJWPxpwTfsHzkQl77WcsN9tDKcWp~8rIkkDjYnccYhl9jzILQnEhbIs3TOwIkfFrjUiD4BgA~UciZJfGhJTRNxoKpaRlLFMdozJHVXAdNavTnBF3muBJRC4BgDCsvz63dIWgbJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="pic"
        ></img>
        <p className="qrText">Сканируйте QR-код или нажмите ОК</p>
        <button className="okButton" type="button" onClick={handleClick}>
          OK
        </button>
      </div>
    </div>
  );
}

export default Home;
