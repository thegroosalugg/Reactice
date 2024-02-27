import classes from "./CartButton.module.css";

const CartButton = ({ total, ...props }) => {
  return (
    <button className={classes.button} {...props}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
