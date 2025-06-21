package com.example.mysqldemo.service;

import com.example.mysqldemo.model.Ticket;
import com.example.mysqldemo.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    public String bookTicket(String name, String from, String to, String date) {
        if (ticketRepository.existsById(name)) {
            return "Ticket already booked for " + name;
        }
        Ticket ticket = new Ticket(name, from, to, date);
        ticketRepository.save(ticket);
        return "Ticket booked successfully for " + name;
    }

    public Ticket viewTicket(String name) {
        return ticketRepository.findById(name).orElse(null);
    }

    public ArrayList<Ticket> viewallTickets() {
        return (ArrayList<Ticket>) ticketRepository.findAll();
    }


    public String cancelTicket(String name) {
        if (ticketRepository.existsById(name)) {
            ticketRepository.deleteById(name);
            return "Ticket canceled for " + name;
        }
        System.out.println(name);
        return "No ticket found for " + name;
    }
}
