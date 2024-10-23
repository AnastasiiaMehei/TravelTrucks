import { Formik, Form, Field } from "formik";
import css from './Location.module.css'
export default function Location () {
 return (
    <div>
    <Formik
    initialValues={{
      location: ""
    }}
    // onSubmit={handleSubmit}
  >
    <Form className={css.form} autoComplete="off">
      <div className={css.inputbox}>
      <label>Location</label>
       <div className={css.input} >
       <svg>
    <use href='../../images/symbol-defs.svg#icon-Location'></use>
  </svg>
       <Field
          className={css.field}
          type="text"
          name="location"
          placeholder="City"
        />
       </div>
      </div>
      
    </Form>
  </Formik>
    </div>
 )   
};