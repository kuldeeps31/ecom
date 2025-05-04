package com.ecommerce.productsearch.service;

import com.ecommerce.productsearch.model.Product;
import com.ecommerce.productsearch.repository.ProductRepository;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class ProductService {
    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> getAllProducts(String search) {
        if (search == null || search.isEmpty()) return repository.findAll();
        return repository.findByNameContainingIgnoreCaseOrBrandContainingIgnoreCase(search, search);
    }

    public Product getProductById(UUID id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
    }
}
