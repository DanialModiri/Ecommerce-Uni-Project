import React, { useState } from 'react';
import Table from '../components/Table';
import DataGetter from '../components/DataGetter'
import { endpoints } from '../../API';
import { ThreeDots } from 'svg-loaders-react'
import Text from '../components/Text'
import Currency from '../components/Currency';
import SelectField from '../components/FormControls/SelectField';
import CollapseCheckList from '../components/CollapseCheckList';
import { Form, Field } from 'react-final-form';
import { OnChange } from 'react-final-form-listeners';
import Pagination from 'react-paginate';
import queryString from 'query-string'
import Axios from 'axios';

const productsColumns = [
   { label: 'عنوان', path: 'name', render: v => <Text text={v} maxLength={50} /> },
   { label: 'قیمت', path: 'price', render: v => `${Currency(v)} ریال` },
   { label: 'دسته', path: 'category.name' },
   { label: 'تصویر', path: 'image', render: v => <img className="object-cover h-32 w-24" src={v} /> }
]

function ProductList({ history, location, ...rest }) {
   const [selection, setSelection] = useState([]);
   const search = queryString.parse(location.search);
   const [category, setCategory] = useState(null);
   const [filters, setFilters] = useState({ page: 0, ...search });

   const changesFilters = (query) => {
      setFilters(query)
      history.push({
         search: queryString.stringify({ ...query, page: (query.page || 0) + 1 })
      })
   }

   return <div className="container m-auto">
      <Form
         initialValues={search}
         onSubmit={(values) => {

         }}
         render={({ values }) => {

            return <div>
               
               <Field
                  component={SelectField}
                  name="category"
                  search
                  className="mr-4 w-64"
                  label="دسته"
                  labelField='name'
                  onChange={(v) => {
                     setCategory(v);
                  }}
                  url={endpoints.categories.get}
               />
               <OnChange>
                  {(values) => {
                     changesFilters({ ...values, ...filters })
                  }}
               </OnChange>
               {category && <DataGetter url={`${endpoints.categories.get}/${category}`}>{
                  ({ data, loading, error }) => {
                     if (loading)
                        return <ThreeDots fillOpacity=".125" fill="currentColor" viewBox="0 0 120 30" className="w-12 h-auto absolute" style={{
                           left: '50%',
                           top: '50%',
                           transform: 'translate(-50%, -50%)'
                        }} />
                     return <div className="flex">
                        {Object.keys(data.filters_values).map((item, index) => <Field
                           name={item}
                           component={CollapseCheckList}
                           className="mr-4"
                           key={index}
                           items={data.filters_values[item].list}
                           render={(v) => <div>
                              <span>{v}</span>
                           </div>}
                        />)}
                     </div>
                  }
               }</DataGetter>}

               <DataGetter url={endpoints.products.get} params={filters}>
                  {({ loading, data, size, error }) => {
                     console.log(size)
                     if (loading)
                        return <ThreeDots fillOpacity=".125" fill="currentColor" viewBox="0 0 120 30" className="w-12 h-auto absolute" style={{
                           left: '50%',
                           top: '50%',
                           transform: 'translate(-50%, -50%)'
                        }} />
                     return <div className="m-auto container">

                        <Table
                           idField="_id"
                           editUrl={'/edit/product/'}
                           selections={selection}
                           onSelect={(selectionV) => {
                              setSelection(selectionV);
                           }}
                           columns={productsColumns}
                           data={data.list}
                        />

                        <Pagination
                           pageCount={size / 5}
                           pageRangeDisplayed={4}
                           forcePage={parseInt(filters.page)}
                           containerClassName="flex mt-4"
                           pageLinkClassName="p-2 m-auto block text-center text-white"
                           pageClassName="ml-2 bg-blue-700 rounded-full h-8 w-8 block"
                           activeClassName="bg-blue-800"
                           onPageChange={({ selected }) => {
                              changesFilters({ ...filters, page: selected });
                           }}
                        />
                     </div>
                  }}
               </DataGetter>

            </div>
         }}>

      </Form>

   </div>
}

export default ProductList;