import { useState, useEffect } from "react";
import { allCategories } from "../../../data/allCategories"; // import kiya

function AdminDashboard() {
  const [products, setProducts] = useState<any[]>([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    imageUrl: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Fetch products
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Add Product
  const addProduct = async () => {
    let uploadedImageUrl = newProduct.imageUrl;

    if (imageFile) {
      const formData = new FormData();
      formData.append("file", imageFile);

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadRes.json();
      uploadedImageUrl = uploadData.url;
    }

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...newProduct,
        price: newProduct.price.replace("₹", ""),
        imageUrl: uploadedImageUrl,
      }),
    });

    const data = await res.json();
    setProducts([...products, data]);
    setNewProduct({ name: "", price: "", category: "", imageUrl: "" });
    setImageFile(null);
  };

  // Flatten categories + subcategories
  const flatCategories = [
    ...allCategories.categories,
    ...Object.values(allCategories.submenus)
      .map((submenu) =>
        Object.entries(submenu).flatMap(([title, subs]) => [title, ...subs])
      )
      .flat(),
  ];

  return (
    <div className="h-[90vh] bg-gray-50 pt-28 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          Admin Dashboard
        </h1>

        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
            🛒 Add Product
          </h2>
          <div className="space-y-3 mb-4">
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
            />
            <input
              type="text"
              placeholder="Price (e.g., ₹500)"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
            />

            {/* Category Dropdown from allCategories */}
            <div className="space-y-3 mb-4">
    {/* dropdown */}
    <select
      value={newProduct.category}
      onChange={(e) =>
        setNewProduct({ ...newProduct, category: e.target.value })
      }
      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
    >
      <option value="">Select Category</option>
      {flatCategories.map((cat, i) => (
        <option key={i} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  </div>

            <input
              type="text"
              placeholder="Image URL (optional)"
              value={newProduct.imageUrl}
              onChange={(e) =>
                setNewProduct({ ...newProduct, imageUrl: e.target.value })
              }
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              className="w-full border rounded-lg px-3 py-2"
            />

            <button
              onClick={addProduct}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow transition"
            >
              Add Product
            </button>
          </div>

          <ul className="space-y-2">
            {products.map((prod) => (
              <li
                key={prod._id}
                className="bg-green-50 px-4 py-3 rounded-lg text-gray-700 shadow-sm flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  {prod.imageUrl && (
                    <img
                      src={prod.imageUrl}
                      alt={prod.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                  )}
                  <span>{prod.name}</span>
                </div>
                <span className="font-semibold">₹{prod.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
