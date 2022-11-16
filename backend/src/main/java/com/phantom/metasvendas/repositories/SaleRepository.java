package com.phantom.metasvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.phantom.metasvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
