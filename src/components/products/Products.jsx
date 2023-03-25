import css from "./Products.module.css";
import Plan from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function Products() {
  const [parent] = useAutoAnimate()
  const [MenuProducts, setMenuProducts] = useState(ProductsData);

  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type == type));
  };
  return (
    <div className={css["p-container"]}>
      <img alt="product" src={Plan} />
      <h1>Our Feature Products</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          <li onClick={() => filter("conditioner")}>Conditioner</li>
          <li onClick={() => filter("foundation")}>Foundation</li>
        </ul>

        <div className={css.list} ref={parent}>
          {MenuProducts.map((product) => (
            <div className={css.product} key={product.id}>
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.details}</span>
                </div>
                <span>{product.price}$</span>
                <div>Shop now</div>
              </div>
              <img src={product.img} alt="product" className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
