"use client";

import { useState } from "react";

import * as style from "./style.css";
import { OpenedMenuType } from "./type";

const AccodrionPage = () => {
  const [openedMenu, setOpenedMenu] = useState<OpenedMenuType>(null);

  return (
    <div className={style.wrapper}>
      <h3>
        <button
          type="button"
          onClick={() =>
            setOpenedMenu((prev) => {
              if (prev === "PersonalInformation") {
                return null;
              }
              return "PersonalInformation";
            })
          }
        >
          <span>Personal Information</span>
        </button>
      </h3>
      {openedMenu === "PersonalInformation" && (
        <div>
          <div>
            <fieldset>
              <p>
                <label htmlFor="cufc1">
                  Name<span aria-hidden="true">*</span>:
                </label>
                <input type="text" value="" name="Name" id="cufc1" />
              </p>
              <p>
                <label htmlFor="cufc2">
                  Email<span aria-hidden="true">*</span>:
                </label>
                <input
                  type="text"
                  value=""
                  name="Email"
                  id="cufc2"
                  aria-required="true"
                />
              </p>
              <p>
                <label htmlFor="cufc3">Phone:</label>
                <input type="text" value="" name="Phone" id="cufc3" />
              </p>
              <p>
                <label htmlFor="cufc4">Extension:</label>
                <input type="text" value="" name="Ext" id="cufc4" />
              </p>
              <p>
                <label htmlFor="cufc5">Country:</label>
                <input
                  type="text"
                  value=""
                  name="Country"
                  id="cufc5"
                />
              </p>
              <p>
                <label htmlFor="cufc6">City/Province:</label>
                <input
                  type="text"
                  value=""
                  name="City_Province"
                  id="cufc6"
                />
              </p>
            </fieldset>
          </div>
        </div>
      )}
      <h3>
        <button
          type="button"
          id="accordion2id"
          onClick={() =>
            setOpenedMenu((prev) => {
              if (prev === "BillingAddress") {
                return null;
              }
              return "BillingAddress";
            })
          }
        >
          <span>Billing Address</span>
        </button>
      </h3>
      {openedMenu === "BillingAddress" && (
        <div id="sect2">
          <div>
            <fieldset>
              <p>
                <label htmlFor="b-add1">Address 1:</label>
                <input type="text" name="b-add1" id="b-add1" />
              </p>
              <p>
                <label htmlFor="b-add2">Address 2:</label>
                <input type="text" name="b-add2" id="b-add2" />
              </p>
              <p>
                <label htmlFor="b-city">City:</label>
                <input type="text" name="b-city" id="b-city" />
              </p>
              <p>
                <label htmlFor="b-state">State:</label>
                <input type="text" name="b-state" id="b-state" />
              </p>
              <p>
                <label htmlFor="b-zip">Zip Code:</label>
                <input type="text" name="b-zip" id="b-zip" />
              </p>
            </fieldset>
          </div>
        </div>
      )}
      <h3>
        <button
          type="button"
          id="accordion3id"
          onClick={() =>
            setOpenedMenu((prev) => {
              if (prev === "ShippingAddress") {
                return null;
              }
              return "ShippingAddress";
            })
          }
        >
          <span>Shipping Address</span>
        </button>
      </h3>
      {openedMenu === "ShippingAddress" && (
        <div id="sect3">
          <div>
            <fieldset>
              <p>
                <label htmlFor="m-add1">Address 1:</label>
                <input type="text" name="m-add1" id="m-add1" />
              </p>
              <p>
                <label htmlFor="m-add2">Address 2:</label>
                <input type="text" name="m-add2" id="m-add2" />
              </p>
              <p>
                <label htmlFor="m-city">City:</label>
                <input type="text" name="m-city" id="m-city" />
              </p>
              <p>
                <label htmlFor="m-state">State:</label>
                <input type="text" name="m-state" id="m-state" />
              </p>
              <p>
                <label htmlFor="m-zip">Zip Code:</label>
                <input type="text" name="m-zip" id="m-zip" />
              </p>
            </fieldset>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccodrionPage;
