package com.sala_app.controller;


import com.sala_app.model.Product;
import com.sala_app.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173") // autoriser React local
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public Page<Product> getProducts(@RequestParam(defaultValue = "0") int page,
                                     @RequestParam(defaultValue = "10") int size,
                                     @RequestParam(required = false) String search) {

        PageRequest pageable = PageRequest.of(page, size);
        if (search != null && !search.isEmpty()) {
            return productService.searchProducts(search, pageable);
        } else {
            return productService.getAllProducts(pageable);
        }
    }


}