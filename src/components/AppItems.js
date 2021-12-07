import React from "react";
import Sofa from "../assets/sofa.png";

const AppItems = () => {
  return (
    <div className="row mt-5 justify-content-xxl-between justify-content-sm-center">
      <div className="col-4 card me-3 my-3 shadow" style={{ width: "18rem" }}>
        <div className="nav">
          <div className="nav-item ms-4 mt-4 p-2 bg-light">New</div>
          <div className="nav-item position-absolute top-0 end-0 mt-4 p-2">
            <i className="bi bi-list-ul"></i>
            <i className="bi bi-heart mx-4"></i>
          </div>
        </div>
        <div className="mx-4">
          <img src={Sofa} className="card-img-top" alt="..." />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Wooden Chair</h5>
        </div>
        <div className="nav mb-4">
          <div className="nav-item ms-4">
            <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
            <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
            <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
            <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
            <i className="bi bi-star-fill"></i>
          </div>
          <div className="nav-item position-absolute bottom-0 end-0 mb-4">
            <span className="border mx-4">
              Rp 12.000
              <i className="bi bi-cart-fill border ms-4 "></i>
            </span>
          </div>
        </div>
      </div>
      <div className="col-4 card me-1 my-3 shadow" style={{ width: "18rem" }}>
        <div className="nav">
          <div className="nav-item ms-4 mt-4 p-2 bg-light">New</div>
          <div className="nav-item position-absolute top-0 end-0 mt-4 p-2">
            <i className="bi bi-list-ul"></i>
            <i className="bi bi-heart mx-4"></i>
          </div>
        </div>
        <div className="mx-4">
          <img src={Sofa} className="card-img-top" alt="..." />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Wooden Chair</h5>
        </div>
        <div className="nav mb-4">
          <div className="nav-item ms-4">
            <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
            <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
            <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
            <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
            <i className="bi bi-star-fill"></i>
          </div>
          <div className="nav-item position-absolute bottom-0 end-0 mb-4">
            <span className="border mx-4">
              Rp 12.000
              <i className="bi bi-cart-fill border ms-4 "></i>
            </span>
          </div>
        </div>
      </div>
      <div className="col-4 card me-3 my-3 shadow" style={{ width: "18rem" }}>
        <div className="nav">
          <div className="nav-item ms-4 mt-4 p-2 bg-light">New</div>
          <div className="nav-item position-absolute top-0 end-0 mt-4 p-2">
            <i className="bi bi-list-ul"></i>
            <i className="bi bi-heart mx-4"></i>
          </div>
        </div>
        <div className="mx-4">
          <img src={Sofa} className="card-img-top" alt="..." />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Wooden Chair</h5>
        </div>
        <div className="nav mb-4">
          <div className="nav-item ms-4">
            <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
            <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
            <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
            <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
            <i className="bi bi-star-fill"></i>
          </div>
          <div className="nav-item position-absolute bottom-0 end-0 mb-4">
            <span className="border mx-4">
              Rp 12.000
              <i className="bi bi-cart-fill border ms-4 "></i>
            </span>
          </div>
        </div>
      </div>
      <div className="col-4 card my-3 shadow" style={{ width: "18rem" }}>
        <div className="nav">
          <div className="nav-item ms-4 mt-4 p-2 bg-light">New</div>
          <div className="nav-item position-absolute top-0 end-0 mt-4 p-2">
            <i className="bi bi-list-ul"></i>
            <i className="bi bi-heart mx-4"></i>
          </div>
        </div>
        <div className="mx-4">
          <img src={Sofa} className="card-img-top" alt="..." />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Wooden Chair</h5>
        </div>
        <div className="nav mb-4">
          <div className="nav-item ms-4">
            <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
            <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
            <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
            <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
            <i className="bi bi-star-fill"></i>
          </div>
          <div className="nav-item position-absolute bottom-0 end-0 mb-4">
            <span className="border mx-4">
              Rp 12.000
              <i className="bi bi-cart-fill border ms-4 "></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppItems;
