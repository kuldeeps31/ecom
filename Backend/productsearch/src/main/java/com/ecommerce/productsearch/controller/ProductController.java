package com.ecommerce.productsearch.controller;

import com.ecommerce.productsearch.model.Product;
import com.ecommerce.productsearch.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/products")
@CrossOrigin("*")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping
    public List<Product> getProducts(@RequestParam(required = false) String search) {
        return service.getAllProducts(search);
    }

    @GetMapping("/{id}")
    public Product getProduct(@PathVariable UUID id) {
        return service.getProductById(id);
    }
}
