import React, { useState } from "react";
import CheckboxElements from "./input";
import "./App.css";
import CountryDishButton from "./country-dish-button";
import { attributes, countryOptions, ids } from "./utils/options-utils";
import { generateCountryRecipe } from "./api-calls";
import Loading from "./loading";
import ToggleSwitch from "./toggle-switch";



function App() {
  const [loading, setLoading] = useState(false);
  const selectCountry = async () => {
    setLoading(true);
    try {
      const recipe = await generateCountryRecipe();
      console.log(recipe);
    } catch (error) {
      debugger;
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div aria-label="parent container" className="parent-container">
      {loading && <Loading />}
      <img src="" alt="" id="background-img" />
      <main className="main-element">
        {ids.map((id) => {
          return (<ToggleSwitch 
            id={id.id}
            key={id.id} />)
        })}
      
        <h1 aria-label="app text" className="headline">
          No idea what to cook? No worries recipe for success app does the
          thinking for you.
        </h1>
        <fieldset aria-label="allergies section" className="allergies">
          <legend className="legend">Indicate any dietary requirements</legend>

          {attributes.map((attribute, index) => {
            return (
              <CheckboxElements
                id={attribute.id}
                name={attribute.name}
                key={`${attribute.id}-${index}`}
              />
            );
          })}
        </fieldset>

        <section aria-label="cusine-options" className="cusine-options">
          {countryOptions.map((country, index) => {
            return (
              <CountryDishButton
                country_name={country.country_name}
                key={index}
                origin={country.origin}
                selectCountry={selectCountry}
              />
            );
          })}
        </section>
        {/* <!-- <label for="user-email">Enter you email address</label> --> */}
        <button className="try-again-btn">Try again</button>
      </main>
      <div className="test">
        <section
          aria-label="gpt-response"
          className="gpt-response preserve-line-breaks"
        ></section>
        <button className="want-another-recipe">I want another recipe</button>
        <button
          className="send-recipe-to-user-inbox"
          name="do_we_email_user"
          value="false"
        >
          send recipe to my in
        </button>
        <section className="email-section">
          <input
            type="email"
            id="user-email"
            className=""
            name="user_email_address"
            placeholder="sophie@example.com"
          />
          <button className="send-to-user-inbox-btn">send</button>
          {/* <!-- <i className="fa fa-paper-plane" aria-hidden="true" fa-lg></i> --> */}
          {/* <!-- <button className="send-email-btn">send</button> --> */}
        </section>
      </div>
    </div>
  );
}

export default App;
