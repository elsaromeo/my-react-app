import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <h2 id="date"></h2>
      <form id="searchForm" class="form-row">
        <div class="col">
          <input
            class="form-control"
            type="text"
            placeholder="Search city"
            autofocus="on"
            id="searchCity"
          />
        </div>
        <div class="col">
          <div class="btn-group" role="group">
            <button
              id="search_button"
              type="submit"
              class="btn btn-secondary btn-sm"
              value="search"
            >
              Search 🔍
            </button>
            <button
              id="location_button"
              type="submit"
              class="btn btn-secondary btn-sm"
              value="location"
            >
              Current location 📍
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
