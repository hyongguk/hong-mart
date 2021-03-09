import React, { useEffect } from 'react'
import { Card, CardImg } from 'react-bootstrap'

interface ProductInfo {
    product: {
        _id: string,
        name: string,
        image: string,
        description: string,
        brand: string,
        category: string,
        price: number,
        countInStock: number,
        rating: number,
        numReviews: number,
    }
}

function Product({product}:ProductInfo) {
    useEffect(() => {
        console.log(product)
    }, [])
    return (
        <div>
            <Card className="my-3 p-4 rounded-lg" >
                <Card.Img src={product.image} />
            </Card>
        </div>
    )
}

export default Product
