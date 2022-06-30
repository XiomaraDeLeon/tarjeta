import "./App.css";
import { Breadcrumb, Layout, Menu } from "antd";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Register from "./components/register";
import Login from "./components/login";
import { useState, useEffect } from "react";
import AuthService from "./services/auth.service";
const { Header, Content, Footer } = Layout;

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  return (
    <div>
      {currentUser && (
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={new Array(1).fill(null).map((_, index) => {
                const key = index + 1;
                return {
                  key,
                  label: "Contactos",
                };
              })}
            />
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Contactos</Breadcrumb.Item>
            </Breadcrumb>

            <div className="site-layout-content">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      )}
      {!currentUser && (
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
