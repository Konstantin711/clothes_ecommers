import React, { useState } from "react";
import { Container, Row, Col, Image, Form, Button, ToggleButton, ButtonGroup } from "react-bootstrap";

function ItemPage() {
  const sizes = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
  ];

  const [selectedSizes, setSelectedSizes] = useState([]);

  const toggleSize = (size) => {
    const currentIndex = selectedSizes.indexOf(size);
    const newSelectedSizes = [...selectedSizes];

    if (currentIndex === -1) {
      newSelectedSizes.push(size);
    } else {
      newSelectedSizes.splice(currentIndex, 1);
    }

    setSelectedSizes(newSelectedSizes);
  };

  return (
    <Container>
      <>
        <Row>
          <Col sm={12} md={12} lg={6} xl={6} className="me-5 mt-2">
            <div uk-slider="true">
              <div
                className="uk-position-relative uk-visible-toggle uk-dark"
                tabIndex="-1"
              >
                <ul className="uk-slider-items uk-grid">
                  <li key="1" className="uk-width-4-5">
                    <div className="uk-panel">
                      <img
                        src="../images/item_img_1.webp"
                        width="550"
                        max_width="650"
                        height="400"
                        alt=""
                      />
                      <div className="uk-position-bottom uk-text-center"></div>
                    </div>
                  </li>

                  <li key="1" className="uk-width-4-5">
                    <div className="uk-panel">
                      <img
                        src="../images/item_img_4.webp"
                        width="550"
                        max_width="650"
                        height="400"
                        alt=""
                      />
                      <div className="uk-position-bottom uk-text-center"></div>
                    </div>
                  </li>
                </ul>
                <a
                  className="uk-position-center-left uk-position-small"
                  href="true"
                  uk-slidenav-previous="true"
                  uk-slider-item="previous"
                ></a>
                <a
                  className="uk-position-center-right uk-position-small uk-emphasis"
                  href="true"
                  uk-slidenav-next="true"
                  uk-slider-item="next"
                ></a>
              </div>
              <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
            </div>
          </Col>

          <Col lg={5}>
            <h3 className="mt-2 uk-text-lead uk-text-bold item-title">
              Футболка pi light beige skate oversize
            </h3>
            <div>
              <div className="mt-3 item-description">
                Oversize футболка дозволить рухатися абсолютно вільно і вдало
                доповнить будь-який образ. <br />
                - 10% еластан, 90% бавовна.
              </div>
              <div className="mt-3 item-price-block">
                {sizes.map((size) => (
                  <ToggleButton
                    className="sizes-button"
                    key={size}
                    id={`size-${size}`}
                    type="checkbox"
                    variant={
                      selectedSizes.includes(size)
                        ? "secondary"
                        : "outline-secondary"
                    }
                    value={size}
                    onClick={() => toggleSize(size)}
                  >
                    {size}
                  </ToggleButton>
                ))}

                <span className="item-price"> 499 грн </span>
              </div>
              
              <div className="uk-text-right buy-block">
                <Button className="mt-2 buy-button">Купити</Button>
              </div>
              

              {/* 
              
              <div className="description-title">Колір:</div>- молочний.
              <div className="description-title">Деталі та крій:</div>- тип крою
              - oversize; - круглий виріз; - якісний принт на грудях; - бірка з
              фірмовим логотипом бренду вшита в бічний шов.
              <div className="description-title">Догляд:</div>
              - прання у звичайному режимі при температурі не вище 30°C, без
              віджиму; <br />
              - відбілювання заборонено; <br />- сушити в підвішеному стані, без
              застосування штучної сушки. <br />
              <div className="description-title">На фото:</div>- зріст моделі -
              175 см; - вага моделі - 71 кг; - розмір речей - "M".
              <div className="description-title">Сезон:</div>- цілорічний. */}
            </div>
          </Col>
        </Row>
      </>
    </Container>
  );
}

export default ItemPage;
