import React from 'react';
import ProductForm from '../components/ProductForm';
import DataGetter from '../components/DataGetter';
import { endpoints } from '../../API';
import { ThreeDots } from 'svg-loaders-react'

function EditProduct(props) {
    const id = props.match.params.id;
    return <DataGetter url={`${endpoints.products.get}/${id}`}>
        {({ data, loading, error }) => {
            if (loading)
                return <ThreeDots fillOpacity=".125" fill="currentColor" viewBox="0 0 120 30" />;
            if (data) {
                delete data._id;
                data.categorySelected = { id: data.category._id, name: data.category.name };
                data.category = data.category._id;
                return <ProductForm url={`${endpoints.products.get}/${id}`} method="PUT" initialValues={{ ...data }} />
            }
            if (!data && !loading)
                return <div className="bg-red-500 border rounded">
                    خطا
                </div>
        }}
    </DataGetter>
}

export default EditProduct;