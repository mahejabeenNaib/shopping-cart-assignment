import { Field, Formik } from "formik";
import React from "react";
import "./index.scss";


function CustomForm({ fields, btnTitle, ...props }) {
  return (
    <div className="custom-form-section_formGroup">
      <Formik {...props} className="login-section_form" >
        {({ handleSubmit, isValid, dirty }) => (
          <form onSubmit={handleSubmit}>
            {fields.map((x) => (
                <Field key={x.name} {...x} />
            ))}
            <button
              type="submit"
              className="btn--submit"
              disabled={!(dirty && isValid)}
            >
              {btnTitle}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default CustomForm;
