class ProductManager {
    constructor() {
        this.products = []
    }

    static id = 0;

    // AÑADIR PRODUCTO
    addProduct(title, description, price, thumbnail, code, stock) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].code === code) {
                console.log(`Code ${code} is repeated`);
                break;
            }
        }

        const newProduct = {
            title, description, price, thumbnail, code, stock
        }

        // CAMPOS COMPLETOS
        if (!Object.values(newProduct).includes(undefined)) {
            ProductManager.id++
            this.products.push({ ...newProduct, id: ProductManager.id });
        } else{
            console.log('All fields are required')
        }
    }

    // MOSTRAR PRODUCTOS
    getProduct() {
        return this.products;
    }

    // BUSCAR PRODUCTO POR ID
    findProductId(id) {
        return this.products.find((producto) => producto.id === id)
    }
    getProductById(id) {
        !this.findProductId(id) ? console.log("Not Found") : console.log(this.findProductId(id));
    }
}

const productos = new ProductManager

// TESTING

productos.addProduct('potus', 'planta interior', 3000, 'imagenPotus', 'a', 4);
productos.addProduct('lazo amor', 'planta exterior', 2000, 'imagenLazoAmor', 'b', 6);

// MOSTRAR PRODUCTOS AGREGADOS
console.log(productos.getProduct());

// PRODUCTO POR ID
productos.getProductById(2)
productos.getProductById(6)


// CODE REPETIDO
productos.addProduct('suculenta', 'planta interior', 1000, 'imagenSuculenta', 'b', 1);