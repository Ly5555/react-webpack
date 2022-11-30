import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Loading } from "./components/index";
import Router from "@/router";
import "./app.less";
function App() {
  return (
    <ConfigProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Router />
        </Suspense>
      </BrowserRouter>
    </ConfigProvider>
  );
}
export default App;
