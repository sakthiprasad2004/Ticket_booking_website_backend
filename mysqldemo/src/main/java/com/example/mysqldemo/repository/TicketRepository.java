package com.example.mysqldemo.repository;

import com.example.mysqldemo.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<Ticket, String> {
}
