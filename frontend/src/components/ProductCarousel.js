import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

function ProductCarousel() {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)
    const { error, loading, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

    return (loading ? <Loader />
        : error
            ? <Message variant='danger'>{error}</Message>
            : (
                <Carousel pause='hover' className='bg-dark w-50 mr-auto ml-auto'>
                    {products.map(product => (
                        <Carousel.Item key={product._id} className=''>
                            <Link to={`/product/${product._id}`}>
                                <Image src={product.image} alt={product.name} fluid className='d-block'/>
                                <Carousel.Caption className='carousel.caption text-muted' style={{top: "2rem"}} >
                                    <h6>{product.name} (¥{product.price})</h6>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )

    )
}

export default ProductCarousel
