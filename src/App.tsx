import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components /routes/Home";
import Thread from "./components /routes/thread/Thread";
import { useDispatch } from "react-redux";
import UserProfile from "./components /routes/userProfile/UserProfile";
import { gql, useQuery } from "@apollo/client";
import useRefreshReduxMe from "./hooks/useRefreshReduxMe";
import { threadCategories } from "./store/categories/Reducer";

const GetAllCategories = gql`
  query getAllCategories {
    getAllCategories {
      id
      name
    }
  }
`;

function App() {
  const { data: categoriesData } = useQuery(GetAllCategories);
  const dispatch = useDispatch();
  const { execMe, updateMe } = useRefreshReduxMe();

  useEffect(() => {
    execMe();
  }, [execMe]);

  useEffect(() => {
    updateMe();
  }, [updateMe]);

  useEffect(() => {
    if (categoriesData && categoriesData.getAllCategories) {
      dispatch({
        type: threadCategories,
        payload: categoriesData.getAllCategories,
      });
    }
  }, [dispatch, categoriesData]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorythreads/:categoryId" element={<Home />} />
      <Route path="/thread/:id" element={<Thread />} />
      <Route path="/thread" element={<Thread />} />
      <Route path="/userprofile/:id" element={<UserProfile />} />
    </Routes>
  );
}

export default App;