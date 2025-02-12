import React, { useContext, useEffect } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import { UserContext } from "../hooks/ContextApi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const { isLClicked, setIsLClicked } = useContext(UserContext);
  const { isSClicked, setIsSClicked } = useContext(UserContext);
  const {isOutClicked, setIsOutSClicked} = useContext(UserContext);
  useEffect(() => {
    setIsLClicked(false)
    setIsSClicked(false)
    setIsOutSClicked(true)

    const token = JSON.parse(localStorage.getItem("userToken"))
    if(token) {
        navigate('/profile')
    } else {
      navigate('/')
    }
  }, [])
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
