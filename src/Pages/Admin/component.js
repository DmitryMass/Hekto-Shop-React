import React from 'react';
//
import { Field, Formik, Form } from 'formik';
//
import './admin.scss';
import ProductInput from '../../Components/Input_Product/component';
//

const Admin = () => {
  return (
    <div className="admin">
      <div className="container">
        <div className="admin__panel">
          <div className="admin__update">
            <h5 className="h5">Update Product</h5>
            <Formik
              initialValues={{
                product: '',
                price: '',
                type: '',
                brand: '',
                description: '',
              }}
              onSubmit={async () => {}}
            >
              <Form>
                <div className="admin__update-form">
                  <Field name="product" type="text" component={ProductInput} />
                  <Field name="price" type="text" component={ProductInput} />
                  <Field name="type" type="text" component={ProductInput} />
                  <Field name="brand" type="text" component={ProductInput} />
                  <Field
                    name="description"
                    type="text"
                    component={ProductInput}
                  />
                  <button>Update</button>
                  <button>Delete</button>
                </div>
              </Form>
            </Formik>
          </div>
          <div className="admin__newProduct">
            <h5 className="h5">Add New Product</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
