import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomForm from "../../components/CustomForm";
import { loginFields, loginInitValues } from "./loginFields";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

const Login = () => {
const navigate =  useNavigate()

  return (
    <>
      <Row className="mt-5">
        <Col sm={12} md={6}>
          <div className="form-wrapper mt-4">
            <div className="flex justify-content-center form-text-section">
              <h1>Login</h1>
              <p className="mt-1">
                Get access to your Orders, Wishlist and Recommendations
              </p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <CustomForm
            initialValues={loginInitValues}
            onSubmit={(values: any) => {
              navigate('/')
            }}
            fields={loginFields}
            btnTitle="Login"
            validationSchema={Yup.object().shape({
                email: Yup.string().email().required('Email is required'),
                password: Yup.string()
                    .required('Password is required')
            })}
          />
        </Col>
      </Row>
    </>
  );
};

export default Login;
