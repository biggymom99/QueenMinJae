import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useDebounce from "../hooks/useDebounce";
import { useNavigate } from "react-router-dom";

const SearchInput = styled.input`
  width: 200px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

export default function Search({ onSearch }) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const navigate=useNavigate();

  // 딜레이 후에 API 호출
  useEffect(() => {
    if (debouncedQuery) {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery, onSearch]);

  //enter누르면 쿼리에 검색어 들어옴
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim()) {
      //onSearch(query);
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <SearchInput
      type="text"
      placeholder="영화 검색..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}


