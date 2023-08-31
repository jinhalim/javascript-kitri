function ProductList({ name, products }) {
    return (
        <>
            <h3>{name}</h3>
            <ul>
                {/* <li>{props.products[0]}</li>
                <li>{props.products[1]}</li>
                <li>{props.products[2]}</li> */}
                {
                    products.map(product => <li>{product}</li>)
                }
            </ul>
        </>
    );
}
export default ProductList;