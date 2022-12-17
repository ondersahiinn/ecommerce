import { addProduct } from "@redux/slices/product"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


const Categories = (props: any) => {

    const productList = useSelector((state: any) => state.product.productList)
    const dispatch = useDispatch()

    useEffect(() => {
        if (productList.length === 0) {
            fetch('http://localhost:3000/api/categories')
                .then(res => res.json())
                .then(data => dispatch(addProduct(data)))
        }

    }, [productList])

    return (
        <>
            <h1> Girdib</h1>
        </>
    )
}

export default Categories