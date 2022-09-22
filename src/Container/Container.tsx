import React, { useState } from "react";
import { Button, Row, Col, Space, Form } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import FloorComponent from "../components/FloorComponent/floorComponent";
import { AddFields } from "./styles";

const Container = () => {
 
  const [form] = Form.useForm();
  return (
    
    <Space direction="vertical">
      <Row>
        <Form form={form} name="dynamic_form_nest_item" autoComplete="off">
          <Form.List name="sights">
            {(fields, { add, remove }) => (
              <>
               <Row justify="end">
                  <Button
                    shape="round"
                    type="primary"
                    icon={<PlusCircleOutlined />}
                    onClick={() => {
                      add();
                      console.log("sss");
                    }}
                  > 
                    Add new Floorplane
                  </Button>
                  </Row>
                  <Row>
                  <FloorComponent />
                  </Row>
                  <Row>
                {fields.map((field) => (
                  <Space key={field.key} align="baseline">
                    <Form.Item {...field}>
                      <FloorComponent />
                    </Form.Item>
                  </Space>
                ))}

                <Form.Item></Form.Item>
                </Row>
              </>
            )}
          </Form.List>
        </Form>
      </Row>
      {/* container for the 2 buttons at the bottom */}

      <Row justify="end" gutter={24}>
        <Col>
          <Button shape="round" type="primary">
            Cancel
          </Button>
        </Col>
        <Col>
          <Button shape="round" disabled type="primary">
            Next: Device Detail
          </Button>
        </Col>
      </Row>
    </Space>
  );
};
export default Container;
