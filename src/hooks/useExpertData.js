import React, { useEffect, useState } from "react";

const useExpertData = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch("/expertData.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);
  return [experts, setExperts];
};

export default useExpertData;
