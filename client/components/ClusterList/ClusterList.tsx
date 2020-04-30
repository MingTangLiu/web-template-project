import React from 'react';
import { Select, Row, Col } from 'antd';
import { Button, Icon } from "snowy";

const plusIco = {
  viewBox: '0 0 24 24',
  path: (
    <polygon points="18,12.9 12.9,12.9 12.9,18 11.1,18 11.1,12.9 6,12.9 6,11.1 11.1,11.1 11.1,6 12.9,6 12.9,11.1 18,11.1 " />
  ),
};

export default function ClusterList(props) {
  const { router, children } = props
  if (children) return children

  return (
    <Row>
      <Col>
        <Button type='primary' onClick={() => router.push('/clusters/add')}>
          <Icon type={plusIco} />
          新增
        </Button>
      </Col>
      <Col style={{ marginTop: 20 }}>
        <Select style={{width: 120 }}/>
      </Col>
    </Row>
  );
}
