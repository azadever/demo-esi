import type { NextPage } from "next";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { Layout, Menu, Breadcrumb, Tabs, Card, Row, Col } from "antd";
import Text from "antd/lib/typography/Text";

const { Header, Content, Footer, Sider } = Layout;

const LayoutStyled = styled(Layout)`
  height: 100vh;

  .site-layout-content {
    padding: 24px;
    background: #fff;
  }

  #components-layout-demo-top .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }

  .ant-row-rtl #components-layout-demo-top .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }

  .ant-layout-header {
  }
`;

interface LayoutProps {
  children: JSX.Element;
}

const MainLayout = ({ children }: LayoutProps): JSX.Element => {
  const router = useRouter();

  return (
    <Layout>
      <Sider>
        <div>
          <div className="logo">
            <img src="logo.png" style={{ width: 25, margin: 16 }} />
          </div>
        </div>
        <Menu theme="dark">
          <Menu.Item onClick={() => router.push("/admin")}>Dashboard</Menu.Item>
          <Menu.Item>Settings</Menu.Item>
          <Menu.Item onClick={() => router.push("/our-project")}>
            Projects
          </Menu.Item>
        </Menu>
      </Sider>
      <LayoutStyled className="layout">
        <Content style={{ padding: "24px" }}>
          <div className="site-layout-content">{children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ever AI Technologies ©2020 Created by Azad Suhail
        </Footer>
      </LayoutStyled>
    </Layout>
  );
};

export default MainLayout;
