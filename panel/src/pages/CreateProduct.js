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
import { endpoints } from '../../API';
import classnames from 'classnames'
import { isAvaible } from '../components/FormControls/validation/exists';
import { composeValidators } from '../components/FormControls/validation/compose';

function CreateProduct() {

   const [initialValues, setInitialValues] = React.useState({});
   return <div className="container m-auto">
      <DataPoster url={endpoints.products.post}>
         {({ data, loading, error, send }) => {
            return <Form
               mutators={{ ...finalFormArray, ...update }}
               onSubmit={(values) => {
                  send(values);
               }}

               render={({ handleSubmit, values, form: { reset, mutators: { update } } }) => {

                  return <form onSubmit={handleSubmit}>
                     <div className={classnames("fixed w-full h-full left-0 top-0", { hidden: !loading })} style={{ zIndex: 25, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <ThreeDots fillOpacity=".125" fill="currentColor" viewBox="0 0 120 30" className="w-12 h-auto absolute" style={{
                           left: '50%',
                           top: '50%',
                           transform: 'translate(-50%, -50%)'
                        }} />
                     </div>
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
                              <Field
                                 validate={composeValidators([required('نام محصول اجباری میباشد'), isAvaible({ url: endpoints.products.get, message: 'این نام قبلا ثبت شده است' })])}
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
                                 labelField='name'
                                 onChange={(v) => {
                                    console.log(v)
                                    Axios.get(`${endpoints.categories.get}/${v}`).then(res => {
                                       const data = res.data;
                                       update('details', (values.details || []).concat((data.specifications || []).map(item => ({ key: item.name, value: '' }))));
                                    })

                                 }}
                                 url={endpoints.categories.get}

                              />
                           </div>
                           <div className="mt-2 flex">
                              <Field component={ImageControl} name="image" validate={required('تصویر اجباری میباشد')} label="تصویر اصلی" />
                              <Field component={MultiImages} className="mr-4" name="images" label="تصاویر" />
                           </div>
                           {values.category && <DataGetter url={`${endpoints.categories.get}/${values.category}`}>
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
                           <Field
                              validate={required('توضیحات اجباری می‌باشد')}
                              name="description"
                              label="توضیحات"
                              component={InputControl}
                              inputType='textarea'
                              rows={6}
                           />
                           <Field validate={required('قیمت بدونه گارانتی الزامی میباشد')} className="mt-2" component={CurrencyControl} name="price" label="قیمت بدونه گارانتی (ریال)" showWords currencyName="ریال" step={10000} />
                           <DynaDetail className="mt-4" name="garantees" label="گارانتی ها" columns={[
                              { label: 'نام گارانتی', component: InputControl, validate: required('نام گارانتی اجباری میباشد'), name: 'name' },
                              { label: 'مدت زمان گارانتی (ماه)', component: InputControl, unit: 'ماه', validate: required('مدت زمان الزامی میباشد'), showWords: true, min: 0, type: 'number', name: 'duration' },
                              { label: 'توضیحات گارانتی', component: InputControl, className: 'resize-none', inputType: 'textarea', rows: 6, name: 'description' },
                              { label: 'قیمت با این گارانتی (ریال)', component: CurrencyControl, showWords: true, name: 'price', validate: required('قیمت اجباری میباشد') },
                           ]} />
                           <DynaDetail
                              label="جزئیات"
                              name="specifications"
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