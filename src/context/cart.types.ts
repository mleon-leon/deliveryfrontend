export type CartItem = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
};

export type CartContextType = {
    cart: CartItem[];
    addToCart: (product: Omit<CartItem, "quantity">) => void;
    increaseQty: (id: number) => void;
    decreaseQty: (id: number) => void;
    removeFromCart: (id: number) => void;
    cartCount: number;
    bump: boolean;
};
