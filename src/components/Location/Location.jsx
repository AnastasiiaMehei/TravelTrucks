import { Formik, Form, Field } from "formik";
import css from './Location.module.css'
import { useDispatch } from "react-redux";
import { setFilterLocation } from '../../redux/filters/operations';

export default function Location () {
  const dispatch = useDispatch();

 return (
    <div>
    <Formik
    initialValues={{
      location: ""
    }}
    onSubmit={(values, { setSubmitting }) => {
      dispatch(setFilterLocation(values.location));
      setSubmitting(false);
    }}  >
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