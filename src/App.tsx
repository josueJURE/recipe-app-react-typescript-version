import React from "react";
import CheckboxElements from "./input"
import "./App.css";
import CountryDishButton from "./country-dish-button";

function App() {
  const countryOptions = ["Chinese", "Italian", "Peruvian", "Random"];

  return (
    <div aria-label="parent container" className="parent-container">
      <img src="" alt="" id="background-img" />
      <main className="main-element">
        <label className="switch">
          <input type="checkbox" className="dark-light-button" />
          <span className="slider round"></span>
        </label>
        <h1 aria-label="app text" className="headline">
          No idea what to cook? No worries recipe for success app does the
          thinking for you.
        </h1>
        <fieldset aria-label="allergies section" className="allergies">
          <legend className="legend">Indicate any dietary requirements</legend>

          <CheckboxElements id={"vegan"} name={"is_lactose_intolerant"}/>
          <CheckboxElements id={"other-dietary-requirements"} name={"is_vegan"}/>
          <CheckboxElements id={"user-text"} name={"has_other_dietary_requirements"}/>
          
          {/* <CheckboxElements/>
          <CheckboxElements/> */}
          {/* <input
            type="checkbox"
            id="lactose-intolerant"
            className="dietary-requirements"
            name="is_lactose_intolerant"
          />
          <label htmlFor="lactose-intolerant">lactose intolerant?</label>
          <input
            type="checkbox"
            id="vegan"
            className="dietary-requirements"
            name="is_vegan"
          />
          <label htmlFor="vegan">vegan?</label>

          <input
            type="checkbox"
            id="other-dietary-requirements"
            className="dietary-requirements"
            name="has_other_dietary_requirements"
          />
          <label htmlFor="other-dietary-requirements">other</label>
          <input
            id="user-text"
            type="text"
            className="dietary-requirements off"
            value=""
            name="what_are_user_other_dietary_requirements"
            placeholder="I don't eat:"
          /> */}
        </fieldset>

        <section aria-label="cusine-options" className="cusine-options">
          {countryOptions.map((country) => {
            return <CountryDishButton country={country} />;
          })}
        </section>
        <div id="loading-container">
          <div id="loading-indicator"></div>
          <h3 id="loading-text">Creating Recipe...</h3>
        </div>

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
