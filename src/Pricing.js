/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

const Pricing = ({
  name,
  currency,
  cost,
  pricePer,
  features,
  handleChange,
  // change,
}) => {
  // console.log("props",props);
  // console.log("change", change);
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {name}
          </h5>
          <h6 className="card-price text-center">
            {currency}
            {cost}
            <span className="period">/{pricePer}</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {features.map(({ name, access }) => {
              return access ? (
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  {name}
                </li>
              ) : (
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  {name}
                </li>
              );
            })}
          </ul>
          <div className="d-grid">
            <a
              href="#"
              className="btn btn-primary text-uppercase"
              //  handleChange(name)  ===> assing the function
              onClick={() => {
                handleChange(name);
              }}
            >
              Button
            </a>
            {/* <input type="text" name={name} onKeyPress={(event)=>{change(event)}}
            ></input> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
