
import { useState } from "react";
import ProductList from "./components/ProductList";
import ShopFooter from "./components/ShopFooter";
import ShopHeader from "./components/ShopHeader";

function App() {
  // state hook
  const [shopData, setShopData] = useState({
    shopName: 'Kitri Shop',
    listName: '상품목록',
    products: ['아이폰', '갤럭시', '아이패드'],
    copyright: 'Copyright 2023 by kitri'
  });

  return (
    <>
      <ShopHeader name={shopData.shopName} />
      <ProductList
        name={shopData.listName}
        products={shopData.products}
      />
      <ShopFooter copyright={shopData.copyright} />
    </>
  )
}

export default App