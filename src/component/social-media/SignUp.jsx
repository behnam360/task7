import React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import "../social-media/style/SingUp.css";

const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="sign-up-caption">
        <h2 className="parag" >پنل کاربری</h2>
      </div>
      <Form>
        <Form.Item
          label="نام کاربری"
          name="username"
          rules={[
            { required: true, message: "لطفا نام کاربری خود را وارد کنید!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="رمز عبور"
          name="password"
          rules={[
            { required: true, message: "لطفا رمز عبور خود را وارد کنید!" },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>مرا به خاطر بسپار</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            ورود
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
