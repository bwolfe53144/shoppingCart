import Header from "../components/Header";
import ProductDetail from "./ProductDetail";
import { useCartContext } from "../context/CartContext";


export default function Shop() {
  const {cartItems} = useCartContext();

  return (
    <>
      <Header cartItemsCount={cartItems.reduce((total, currentItem) => {
          return total + currentItem.quantity;
      }, 0)} />
      <h1 className="title">Harbor Heights</h1>
      <ProductDetail />
    </>
  );
}

