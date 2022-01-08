import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import "../css/Nav.css";

import { filterCharacters } from "../redux/actions";

const Nav = () => {
  const [filters, setFilters] = useState({
    byName: "",
    byGender: "",
  });

  const genders = ["All", "Male", "Female"];

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    e.preventDefault();
    setFilters({ ...filters, byName: e.target.value });
  };

  const handleGenderFilter = (e) => {
    if (e.target.value !== "") {
      setFilters({ ...filters, byGender: e.target.value });
    } else {
      setFilters(() => {
        return { ...filters };
      });
    }
  };

  const handleRefresh = (e) => {
    setFilters({ byName: "", byGender: "All" });
  };

  useEffect(() => {
    dispatch(filterCharacters(filters));
  }, [dispatch, filters]);

  return (
    <div className="nav-container">
      <form className="nav-form">
        <input
          name="nombre"
          type="text"
          value={filters.byName}
          onChange={(e) => handleInputChange(e)}
        />
        <label htmlFor="">Gender</label>
        <select
          name="genero"
          id="gender"
          onChange={(e) => handleGenderFilter(e)}
        >
          {genders.map((e, i) => {
            if (filters.byGender === "All" && i === 0) {
              return (
                <option key={i} value={e} selected>
                  {e}
                </option>
              );
            }
            return (
              <option key={i} value={e}>
                {e}
              </option>
            );
          })}
        </select>
        <button type="button" onClick={() => handleRefresh()}>
          retirar filtros
        </button>
      </form>
    </div>
  );
};

export default Nav;
