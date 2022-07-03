import styled from "@emotion/styled";
import { Button, Col, Divider, Row, Statistic } from "antd";
import Title from "antd/lib/typography/Title";
import MainLayout from "src/Components/MainLayout";
import ReactEcharts from "echarts-for-react";

const AdminHomeStyled = styled.div`
  .ant-statistic {
    padding: 24px;
    border: 1px solid #ededed;
  }
`;

const AdminHome = () => {
  const option = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ["month", "Jan", "Feb", "March"],
        ["Jan", 43.3, 85.8],
        ["Feb", 83.1, 73.4],
        ["March", 86.4, 65.2],
      ],
    },
    xAxis: { type: "category" },
    yAxis: {},
    series: [{ type: "bar" }, { type: "bar" }],
  };

  return (
    <MainLayout>
      <AdminHomeStyled>
        <div>
          <Title level={4}>Statistics</Title>
          <>
            <Row gutter={16}>
              <Col span={6}>
                <Statistic title="Remaining Token" value={"RM 300,000"} />
              </Col>
              <Col span={6}>
                <Statistic title="Active CO2" value={"3.5 Tonnes"} />
              </Col>
              <Col span={6}>
                <Statistic title="Projected CO2" value={"2 Tonnes"} />
              </Col>
            </Row>
          </>
        </div>
        <Divider />
        <Title level={4}>Projected CO2 Emission</Title>
        <ReactEcharts option={option} style={{ border: "1px solid #ededed" }} />
      </AdminHomeStyled>
    </MainLayout>
  );
};

export default AdminHome;
