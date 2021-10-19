import React, { useEffect, useState } from "react";

const useDetailsData = () => {
  const [detailsData, setDetailsData] = useState([]);
  useEffect(() => {
    fetch("/cancerDetailsData.json")
      .then((res) => res.json())
      .then((data) => setDetailsData(data));
  }, []);
  return [detailsData, setDetailsData];
};

export default useDetailsData;
