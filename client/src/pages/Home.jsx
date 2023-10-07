import React from "react";
import state from "../store";
import { AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

const Home = () => {
  const snap = useSnapshot(state);

  return <AnimatePresence>{}</AnimatePresence>;
};

export default Home;
