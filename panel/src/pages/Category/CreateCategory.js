import React from 'react';
import DataPoster from '../../components/DataPoster';
import { Form, Field } from 'react-final-form';
import { ThreeDots } from 'svg-loaders-react';
import InputControl from '../../components/FormControls/InputControl';
import DynaDetail from '../../components/FormControls/DynaDetail';
import SelectField from '../../components/FormControls/SelectField';
import formArrays from 'final-form-arrays'
import classnames from 'classnames'
import { length } from '../../components/FormControls/validation/arrays'
import { required } from '../../components/FormControls/validation/comon';
import { endpoints, builder } from '../../../API'
import YesNo from '../../components/FormControls/YesNoControl';

function CreateCategory() {
   return <div className="">
      <DataPoster url={endpoints.categories.post}>
         {({ data, loading, send }) => {
            return <Form
               mutators={{ ...formArrays }}
               onSubmit={send}
               render={({ values, handleSubmit, form: { reset } }) => {
                  return <form onSubmit={handleSubmit}>
                     <div className="container m-auto">
                        <div>
                           {data && typeof data === 'string' && <div className="bg-green-400 p-2" >{data}</div>}
                           {data && !(typeof data === 'string') && <div className="bg-green-200 p-2" >باموفقیت دخیره شد</div>}
                        </div>
                        <div className={classnames("fixed w-full h-full left-0 top-0", { hidden: !loading })} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                           <ThreeDots fillOpacity=".125" fill="currentColor" viewBox="0 0 120 30" className="w-12 h-auto absolute" style={{
                              left: '50%',
                              top: '50%',
                              transform: 'translate(-50%, -50%)'
                           }} />
                        </div>
                     </div>
                     <div className="container m-auto shadow-lg p-4 rounded-lg">
                        <div className="flex">
                           <Field
                              component={InputControl}
                              label="عنوان"
                              name="name"
                              containerClassName="w-full"
                              validate={required('عنوان مورد نیاز می‌باشد')} />

                        </div>
                        <div className="flex">
                           <Field
                              component={YesNo}
                              name="hasParent"
                              defaultValue={false}
                              label="والد دارد"
                           />
                           {values.hasParent && <Field
                              component={SelectField}
                              name="category"
                              search
                              searchField="q"
                              className="mr-2 mt-2 w-full"
                              label="پدر"
                              labelField='name'
                              validate={required('در صورت داشتن پدر این فیلد اجباری میباشد')}
                              url={builder(endpoints.categories.get)}
                           />}
                        </div>
                        <DynaDetail
                           validate={length([10, 'امکان ثبت بیشتر از ده مشخصه امکان پذیر نمیباشد'], [1, 'حداقل یک مشخصه مورد نیاز می‌باشد'])}
                           label="مشخصات کلی"
                           name="specifications"
                           columns={[
                              { label: 'نام', validate: required('نام اجباری می‌باشد'), component: InputControl, name: 'name' },
                              { label: 'برچسب', validate: required('برچسب اجبازی میباشد'), component: InputControl, name: 'label' },
                              { label: 'نوع فیلد', component: SelectField, name: 'type', idField: 'id', placeholder: 'انتخاب نوع', items: [{ label: 'رشته', id: 'string' }, { label: 'عدد', id: 'number' }] }
                           ]}
                        />
                        <DynaDetail
                           label="فیلتر ها"
                           name="filters"
                           validate={length([10, 'حداکثر ده فیلتر میتوان داشته باشد'], [3, 'حداقل سه مورد فیلتر مورد نیاز است'])}
                           columns={[
                              { label: 'نام', validate: required('نام اجباری می‌باشد '), component: InputControl, name: 'name' },
                              { label: 'برچسب', validate: required('برچسب اجبازی میباشد'), component: InputControl, name: 'label' },
                              {
                                 label: 'نوع فیلد', component: SelectField, name: 'type', placeholder: 'انتخاب نوع',
                                 validate: required('نوع فیلد اجباری میباشد'), idField: 'id', items: [{ label: 'رشته', id: 'string' }, { label: 'عدد', id: 'number' }]
                              }
                           ]}
                        />
                        {values.parent && <Field
                           component={YesNo}
                           name="hasParentFilters"
                           defaultValue={false}
                           label="فیلر های پدرش را به ارث ببرد"
                           description="در صورتی که فیلتر های پدر برای فرزند مورد نیاز میباشد این گزینه را تیک بزنید"
                        />}
                        <button type="button" onClick={() => {
                           reset();
                        }} className="cursor-pointer rounded px-4 py-1 mt-2 text-white bg-blue-600 ml-2">
                           پاک کردن
                     </button>
                        <button className="rounded px-4 py-1 text-white mt-2 bg-green-600">
                           ثبت
                     </button>
                     </div>

                  </form>
               }
               }
            />
         }}
      </DataPoster>
   </div>

}

export default CreateCategory;