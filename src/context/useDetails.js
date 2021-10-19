import { useContext } from "react";
import { detailsProvider } from "../pages/CancerDetails/CancerDetails";

const useDetails = () => {
  return useContext(detailsProvider);
};

export default useDetails;
