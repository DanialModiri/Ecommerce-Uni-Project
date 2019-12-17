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


function CreateProduct() {

    return <div>
                <DataPoster url={'http://localhost:3002/products'}>
                    {({ data, loading, error, send }) => {

                        if (loading)
                            return <ThreeDots fillOpacity=".125" fill="currentColor" viewBox="0 0 120 30" className="w-12 h-auto" />;
                        else
                            return <Form mutators={{ ...finalFormArray }} 
                            
                            onSubmit={(values) => {
                                send(values);
                            }} 

                            render={({ handleSubmit, values }) => {

                                return <form onSubmit={handleSubmit}>
                                {!error && data && typeof data === 'string' && <div className="alert alert-success">
                                    <p>{data}</p>
                                </div>}
                                {error && <div className="alert alert-danger">
                                    {error}
                                 </div>}
                                <div className="card">
                                    <div className="card-header">
                                        <h2>ثبت محصول جدید</h2>
                                    </div>
                                    <div className="card-body">
                                        <Field validate={required('نام الزامی میباشد')} component={InputControl} name="name" label="نام" />
                                        <Field component={ImageControl} name="primaryImage" label="تصویر اصلی" />
                                        <Field component={MultiImages} name="images" label="تصاویر" />
                                        <Field validate={required('قیمت بدونه گارانتی الزامی میباشد')} component={InputControl} name="price" label="قیمت بدونه گارانتی (ریال)" type={'number'} />
                                        <DynaDetail name="garantees" label="گارانتی ها" columns={[
                                            { label: 'مدت زمان گارانتی (ماه)', component: InputControl, type: 'number', name: 'duration' },
                                            { label: 'توضیحات گارانتی', component: InputControl, inputType: 'textarea', name: 'description' },
                                            { label: 'قیمت با این گارانتی (ریال)', component: InputControl, type: 'number', name: 'price' },
                                        ]} />
                                        <DynaDetail
                                            label="جزئیات"
                                            name="details"
                                            columns={[
                                                { label: 'کلید', name: 'key', component: InputControl },
                                                { label: 'مقدار', name: 'value', component: InputControl }
                                            ]}
                                        />
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-primary">
                                            ثبت
                                    </button>
                                    </div>
                                </div>
                            </form>
                            }}
                            
                   />
                    }}
                </DataPoster>
        
    </div>
}

export default CreateProduct;