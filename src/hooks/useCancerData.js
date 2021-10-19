import { useEffect, useState } from "react";

const useCacnerData = () => {
  const [cancerData, setCancerData] = useState([]);
  useEffect(() => {
    fetch("/cancerData.json")
      .then((res) => res.json())
      .then((data) => setCancerData(data));
  }, []);
  return [cancerData, setCancerData];
};

export default useCacnerData;
