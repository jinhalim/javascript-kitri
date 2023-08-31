
function ShopHeader({ name }) {
    function buttonClicked() {
        console.log('ghghdg');
    }
    return (
        <>
            <h1>{name}</h1>
            <button onClick={buttonClicked}>눌러</button>
            <hr />
        </>
    );
}

export default ShopHeader;