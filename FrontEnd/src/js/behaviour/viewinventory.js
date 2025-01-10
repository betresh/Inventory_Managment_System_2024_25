var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var productListContainer = document.getElementById('product-list');
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, products, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:3000/api/getProducts', {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch products');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    products = _a.sent();
                    // Clear existing products before adding new ones
                    productListContainer.innerHTML = '';
                    // Display products
                    products.forEach(function (product) {
                        var productCard = document.createElement('div');
                        productCard.classList.add('col-md-4');
                        productCard.classList.add('mb-4');
                        productCard.innerHTML = "\n          <div class=\"product-card\" style=\"width: 320px; height: 520px\">\n            <img\n              src=\"".concat(product.imageURL, "\"\n              alt=\"Product Image\"\n              class=\"product-img\"\n              style=\"height: 200px; object-fit: cover\"\n            />\n            <h5 class=\"product-title mt-3\">").concat(product.name, "</h5>\n            <p class=\"product-desc\">\n              ").concat(product.description, "\n            </p>\n            <p class=\"stock-info\">Stock Left: ").concat(product.quantityInStock, "</p>\n            <p class=\"product-price\">$").concat(product.price.toFixed(2), "</p>\n            <p class=\"text-muted\">Category: ").concat(product.catagory, "</p>\n            <p class=\"text-muted\">Added on: ").concat(new Date(product.createdAt).toLocaleDateString(), "</p>\n          </div>\n        ");
                        productListContainer.appendChild(productCard);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    alert('Failed to load products');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Call the function to fetch products when the page loads
fetchProducts();