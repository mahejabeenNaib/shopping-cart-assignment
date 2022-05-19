import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomForm from "../../components/CustomForm";
import { loginFields, loginInitValues } from "./loginFields";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  return (
    <>
      <Row className="mt-5">
        <Col sm={12} md={6}>
          <div className="form-wrapper mt-4">
            <div className="flex justify-content-center form-text-section">
              <h1>Signup</h1>
              <p className="mt-1">
                We do not share your personal details with anyone.
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
            btnTitle="Signup"
            validationSchema={Yup.object().shape({
              firstname: Yup.string().required("Firstname is required"),
              lastname: Yup.string().required("Lastname is required"),
              email: Yup.string().email().required("Email is required"),
              password: Yup.string()

                .required("Password is required")
                .min(6, "Password is too short - should be 6 chars minimum.")
                .matches(/(?=.*[0-9])/, "Password must contain a number."),
              confirmPassword: Yup.string()
                .required("Confirm Password is required")
                .min(
                  6,
                  "Confirm Password is too short - should be 6 chars minimum."
                )
                .matches(/(?=.*[0-9])/, "Password must contain a number.")
                .oneOf([Yup.ref("password"), null], "Passwords must match"),
            })}
          />
        </Col>
      </Row>
    </>
  );
};

export default Register;
