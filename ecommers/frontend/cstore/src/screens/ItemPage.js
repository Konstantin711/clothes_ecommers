import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";

function ItemPage() {
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
                    <li key='1' className="uk-width-4-5">
                      <div className="uk-panel">
                        <img
                          src='../images/item_img_1.webp'
                          width="550"
                          max_width="650"
                          height="400"
                          alt=""
                        />
                        <div className="uk-position-bottom uk-text-center">
                          
                        </div>
                      </div>
                    </li>

                    <li key='1' className="uk-width-4-5">
                      <div className="uk-panel">
                        <img
                          src='../images/item_img_4.webp'
                          width="550"
                          max_width="650"
                          height="400"
                          alt=""
                        />
                        <div className="uk-position-bottom uk-text-center">
                          
                        </div>
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

          <Col lg={4}>
            
            

      
          </Col>
        </Row>
      </>
    </Container>
  );
}

export default ItemPage;
