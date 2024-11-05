import toast from "react-hot-toast";

// Get all products from local storage
const getAllProducts = () => {
    const allProduct = localStorage.getItem("product");
    return allProduct ? JSON.parse(allProduct) : [];
};

// Add product to local storage
const addToCart = (newProduct) => {
    console.log("Adding Product:", newProduct);

    const products = getAllProducts();
    console.log("Existing Products:", products); 

    // Check if product already exists
    const isExist = products.some((item) => item.product_id == newProduct.product_id
     );
    console.log("Product Exists:", isExist); 

    if (isExist) {
        toast.error("Product already exists.");
        return;
    }

    products.push(newProduct); // Add the new product to the array
    localStorage.setItem("product", JSON.stringify(products)); // Save the updated array to localStorage
    toast.success("Product added successfully!");
};

// Remove product from local storage
const removeFromCart = (productId) => {
    const products = getAllProducts();
    console.log(products)
    const updatedProducts = products.filter((item) => item.product_id !== productId);

    if (updatedProducts.length === products.length) {
        // No product was removed
        toast.error("Product not found in cart.");
        return;
    }

    localStorage.setItem("product", JSON.stringify(updatedProducts)); // Update localStorage with the new array
    toast.success("Product removed successfully.");
};

export { addToCart, getAllProducts, removeFromCart };
