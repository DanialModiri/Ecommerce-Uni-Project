import React, { useState } from 'react';
import DataGetter from '../components/DataGetter';
import { endpoints, url } from '../../API';
import { ThreeDots } from 'svg-loaders-react';
import ProductItem from '../components/ProductItem';

function Products(props) {
   const filters = props.match.params;
   const id = props.match.params.id;
   return <div className="container m-auto">
      <DataGetter url={`${endpoints.categories.get}/${id}`}>
         {({ data, error, loading }) => {
            if (loading)
               return <div className="m-auto w-64 h-12">
                  <ThreeDots fillOpacity=".125" fill="currentColor" viewBox="0 0 120 30" className="w-12 h-auto" />;
                    </div>
            return <div className="">

            </div>

         }}
      </DataGetter>
      <DataGetter url={`${url}${endpoints.products.get}`} params={filters}>
         {({ data, loading, error }) => {
            if (loading)
               return <div className="m-auto w-64 h-12">
                  <ThreeDots fillOpacity=".125" fill="currentColor" viewBox="0 0 120 30" className="w-12 h-auto" />;
               </div>
            if(!loading && (!data || !data.length) )
               return <div className="bg-red-500 p-2 ">
                  {error}
               </div>
            return <div className="flex flex-wrap">
               {data.map((item, index) => <ProductItem key={index} {...item} />)}
            </div>

         }}
      </DataGetter>
   </div>
}

export default Products;