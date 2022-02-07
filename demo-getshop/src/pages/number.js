import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MaskedInput from "react-text-mask";

import "../styles/number.css";

function Number() {
  const [checked, setChecked] = useState(false);
  const [number, setNumber] = useState("");
  const inputRef = useRef();
  let navigate = useNavigate();

  const inputCheck = useCallback(
    (inputRef) => {
      if (number.length !== 10 && number.length !== 0) {
        inputRef.current.inputElement.classList.add("inputPhoneInvalid");
      } else {
        inputRef.current.inputElement.classList.remove("inputPhoneInvalid");
      }
    },
    [number.length]
  );

  useEffect(() => {
    document.addEventListener(
      "keydown",
      function (e) {
        if (e.key === "Escape") {
          return navigate("/");
        }
      },
      []
    );
    inputCheck(inputRef);
  }, [navigate, number, inputCheck]);

  const handleClick = () => {
    navigate("/info");
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleNumberChange = (e) => {
    let length = number.length;
    if (e.key === "Backspace") return;
    if (length === 10) return;
    if (e.nativeEvent.data) {
      setNumber(number + e.nativeEvent.data);
    } else if (e.nativeEvent.target.innerHTML) {
      setNumber(number + e.nativeEvent.target.innerHTML);
    } else {
      setNumber(number.slice(0, -1));
    }
  };

  return (
    <>
      <div className="container">
        <div className="inputBlock">
          <div className="enterNumberText">
            Введите ваш номер мобильного телефона
          </div>
          <MaskedInput
            className="inputPhone"
            placeholder="+7(___)___-__-__"
            ref={inputRef}
            onBlur={() => inputCheck(inputRef)}
            onChange={handleNumberChange}
            onKeyDown={(e) =>
              e.key === "Backspace" ? setNumber(number.slice(0, -1)) : null
            }
            value={number}
            mask={[
              "+",
              "7",
              "(",
              /[1-9]/,
              /\d/,
              /\d/,
              ")",
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
            ]}
          />
          <div className="connectText">
            и с Вами свяжется наш менеждер<br></br> для дальнейшей консультации
          </div>
          <div className="keyboard" id="keyboard">
            <button className="nums" onClick={handleNumberChange}>
              1
            </button>
            <button className="nums" onClick={handleNumberChange}>
              2
            </button>
            <button className="nums" onClick={handleNumberChange}>
              3
            </button>
            <button className="nums" onClick={handleNumberChange}>
              4
            </button>
            <button className="nums" onClick={handleNumberChange}>
              5
            </button>
            <button className="nums" onClick={handleNumberChange}>
              6
            </button>
            <button className="nums" onClick={handleNumberChange}>
              7
            </button>
            <button className="nums" onClick={handleNumberChange}>
              8
            </button>
            <button className="nums" onClick={handleNumberChange}>
              9
            </button>
            <button
              className="backSpace span-2"
              onClick={() => setNumber(number.slice(0, -1))}
            >
              Стереть
            </button>
            <button className="nums" onClick={handleNumberChange}>
              0
            </button>

            <div className="checkBlock span-3">
              <div className="check">
                <input
                  id="customCheck"
                  type="checkbox"
                  checked={checked}
                  onChange={handleChange}
                ></input>
                <label for="customCheck">
                  <span></span>
                  <div>
                    Согласие на обработку <br></br> персональных данных
                  </div>
                </label>
              </div>
            </div>
            <button
              className={
                number.length === 10 && checked === true
                  ? "confirmEnable span-3"
                  : "confirmDisable span-3"
              }
              disabled={number.length === 10 && checked === true ? false : true}
              onClick={handleClick}
            >
              Подтвердить номер
            </button>
          </div>
        </div>
        <main className="main">
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
    </>
  );
}

export default Number;
