package com.sala_app.repository;


import com.sala_app.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

//public interface ProductRepository extends PagingAndSortingRepository<Product, String> {
//
//    @Query("SELECT p FROM Product p WHERE LOWER(p.libelle) LIKE LOWER(CONCAT('%', :search, '%'))")
//    Page<Product> searchByLibelle(@Param("search") String search, Pageable pageable);
//}

public interface ProductRepository extends PagingAndSortingRepository<Product, String> {

    // Rechercher un produit par libelle (désignation)
    @Query("SELECT p FROM Product p WHERE LOWER(p.designation) LIKE LOWER(CONCAT('%', :search, '%'))")
    Page<Product> searchByLibelle(@Param("search") String search, Pageable pageable);
}
