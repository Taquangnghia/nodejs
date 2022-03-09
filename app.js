const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/product") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<body>");
        res.write("<h1>Product Page</h1>");
        res.write("<body>");
        res.write("<html>");
        res.end();
    } else if (req.url === "/api/products") {
        const products = [
            { id: 1, name: "Product A" },
            { id: 2, name: "Product B" },

        ];
        res.end(JSON.stringify(products));
    } else {
        console.log("Chịu không biết");
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log("Server is running port", PORT);
});

