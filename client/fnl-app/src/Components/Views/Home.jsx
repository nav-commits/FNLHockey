import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import HomePageContent from "../Organisms/HomePageContent/HomepageContent";
import Spinner from "../Atoms/Spinner/Spinner";

function Home() {
  const { isLoading } = useAuth0();

  if (isLoading) return <Spinner />;

  return <HomePageContent />;
}

export default Home;
