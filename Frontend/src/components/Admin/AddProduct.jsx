import { useState } from "react";

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        stock: "",
        category: ""
    });

    const handleAdd = async () => {
        try {
            const res = await fetch(`${ADDURL}/api/v1/product`, {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            const data = await res.json();
            if (data.success || res.ok) {
                console.log(data.message);
            }

        } catch (error) {
            console.log("It have an Error", error);
        }
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="border p-2 mr-2"
            />
            <input
                type="number"
                placeholder="Price"
                value={formData.price}
                onChange={e => setFormData({ ...formData, price: e.target.value })}
                className="border p-2 mr-2"
            />
            <input
                type="number"
                placeholder="Stock"
                value={formData.stock}
                onChange={e => setFormData({ ...formData, stock: e.target.value })}
                className="border p-2 mr-2"
            />
            <input
                type="text"
                placeholder="Category"
                value={formData.category}
                onChange={e => setFormData({ ...formData, category: e.target.value })}
                className="border p-2 mr-2"
            />

            <button onClick={handleAdd}>Add Product</button>
        </div>
    )
}

export default AddProduct