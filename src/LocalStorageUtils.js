export const loadCartFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : { count: 0, items: [], finalTotal: 0 };
  } catch (e) {
    console.error("error load from localstorage", e);
    return { count: 0, items: [], finalTotal: 0 };
  }
};
export const saveCartToLocalStorage = (cart) => {
  try {
    const serializedData = JSON.stringify(cart);
    localStorage.setItem("cart", serializedData);
  } catch (e) {
    console.error("error save in localstorage", e);
  }
};
