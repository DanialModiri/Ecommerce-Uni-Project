import React from 'react';
import { Form, Field } from 'react-final-form';
import ImageControl from '../components/FormControls/ImageFormControl';
import InputControl from '../components/FormControls/InputControl';
import MultiImages from '../components/FormControls/MultiImage';
import DynaDetail from '../components/FormControls/DynaDetail';
import finalFormArray from 'final-form-arrays'
import DataPoster from '../components/DataPoster';
import { required } from '../components/FormControls/validation/comon';
import { ThreeDots } from 'svg-loaders-react'
import CurrencyControl from '../components/FormControls/CurrencyControl';
import SelectField from '../components/FormControls/SelectField'
import DataGetter from '../components/DataGetter';
import { update } from '../../utils/mutators'
import Axios from 'axios';

function CreateProduct() {

   const [initialValues, setInitialValues] = React.useState({});
   return <div className="container m-auto">
      <DataPoster url={'http://localhost:3002/products'}>
         {({ data, loading, error, send }) => {

            if (loading)
               return <ThreeDots fillOpacity=".125" fill="currentColor" viewBox="0 0 120 30" className="w-12 h-auto" />;
            else
               return <Form
                  mutators={{ ...finalFormArray, ...update }}
                  onSubmit={(values) => {
                     send(values);
                  }}

                  render={({ handleSubmit, values, form: { reset, mutators: { update } } }) => {

                     return <form onSubmit={handleSubmit}>
                        {!error && data && typeof data === 'string' && <div className="alert alert-success">
                           <p>{data}</p>
                        </div>}
                        {error && <div className="alert alert-danger">
                           {error}
                        </div>}
                        <div className="shadow p-4 mt-4 rounded-lg">
                           <div className="card-header">
                              <h2 className="text-lg font-weight-400">ثبت محصول جدید</h2>
                           </div>
                           <div className="card-body">
                              <div className="flex">
                                 <Field validate={required('نام الزامی میباشد')}
                                    component={InputControl}
                                    name="name"
                                    containerClassName="w-full"
                                    label="نام" />
                                 <Field
                                    component={SelectField}
                                    name="category"
                                    search
                                    className="mr-4 w-full"
                                    label="پدر"
                                    labelField='title'
                                    onChange={(v) => {
                                       console.log(v)
                                       Axios.get(`http://localhost:3002/categories/${v}`).then(res => {
                                          const data = res.data;
                                          update('details', (values.details || []).concat((data.specifications || []).map(item => ({ key: item.name, value: '' }))));
                                       })

                                    }}
                                    url="http://localhost:3002/categories"

                                 />
                              </div>
                              <div className="mt-2 flex">
                                 <Field component={ImageControl} name="primaryImage" label="تصویر اصلی" />
                                 <Field component={MultiImages} className="mr-4" name="images" label="تصاویر" />
                              </div>
                              {values.category && <DataGetter url={`http://localhost:3002/categories/${values.category}`}>
                                 {({ data, loading, error }) => {
                                    if (loading)
                                       return <ThreeDots fillOpacity=".125" fill="currentColor" viewBox="0 0 120 30" className="w-12 h-auto" />;
                                    return <div className="flex flex-wrap">
                                       {(data.filters || []).map((item, index) => <Field
                                          component={InputControl}
                                          containerClassName="w-1/4 ml-2"
                                          validate={required(`${item.label} اجباری می‌باشد`)}
                                          label={item.label}
                                          key={index}
                                          type={item.type}
                                          name={item.name} />)}
                                    </div>
                                 }}
                              </DataGetter>}
                              <Field validate={required('قیمت بدونه گارانتی الزامی میباشد')} className="mt-2" component={CurrencyControl} name="price" label="قیمت بدونه گارانتی (ریال)" showWords currencyName="ریال" step={10000} />
                              <DynaDetail className="mt-4" name="garantees" label="گارانتی ها" columns={[
                                 { label: 'مدت زمان گارانتی (ماه)', component: InputControl, unit: 'ماه', validate: required('مدت زمان الزامی میباشد'), showWords: true, min: 0, type: 'number', name: 'duration' },
                                 { label: 'توضیحات گارانتی', component: InputControl, className: 'resize-none', inputType: 'textarea', rows: 6, name: 'description' },
                                 { label: 'قیمت با این گارانتی (ریال)', component: CurrencyControl, showWords: true, name: 'price' },
                              ]} />
                              <DynaDetail
                                 label="جزئیات"
                                 name="details"
                                 className="mt-4"
                                 columns={[
                                    { label: 'کلید', name: 'key', component: InputControl },
                                    { label: 'مقدار', name: 'value', component: InputControl }
                                 ]}
                              />
                           </div>
                           <button className="rounded text-white p-2 w-16 text-center bg-blue-600 mt-4">
                              ثبت
                              </button>
                        </div>
                     </form>
                  }}
               />
         }}
      </DataPoster>

   </div>
}

export default CreateProduct;