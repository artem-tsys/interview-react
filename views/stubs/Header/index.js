import React from "react";
import { Typography, Row, Col, Avatar, Dropdown, Layout } from "antd";
import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";

const Header = () => (
  <Layout.Header>
    <Row align="stretch" justify="space-between">
      <Col>
        <Typography.Text>THE MOVIE DB</Typography.Text>
      </Col>
      <Col>
        <Dropdown
          menu={{
            items: [
              {
                label: <Link href="/stubs/dashboard">Dashboard</Link>,
                key: "dashboard",
              },
              {
                label: <Link href="/stubs/lists">My Lists</Link>,
                key: "lists",
              },
              {
                label: <Link href="/stubs/watchlist">Watchlist</Link>,
                key: "watchlist",
              },
              {
                label: <Link href="/stubs/favorites">Favorites</Link>,
                key: "favorites",
              },
              {
                label: "Logout",
                key: "logout",
              },
            ],
          }}
        >
          <Typography.Text>
            <Avatar icon={<UserOutlined />} />{" "}
            <span className="hide-sm-down">Username</span> <CaretDownOutlined />
          </Typography.Text>
        </Dropdown>
      </Col>
    </Row>
  </Layout.Header>
);

export default Header;
