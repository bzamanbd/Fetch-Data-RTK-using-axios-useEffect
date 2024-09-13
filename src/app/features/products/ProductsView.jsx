import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "./productSlice"

function ProductsView() {
    const {isLoading, error, products} = useSelector((state)=>state.products)  

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchProducts())
    
    }, [dispatch])
    
  return<> 
  <h1>Products</h1>
  {isLoading && <h3>Loading....</h3>}
  {error && <h3>{error}</h3>}
  {products && products.map((product)=>{ 
    const {id, title, image} =product;
    return <div key={id}> 
        <h5>{title}</h5>
        <img src={image} alt="img" width={150} height={150} />
    </div>
  })}
  </>
}

export default ProductsView
