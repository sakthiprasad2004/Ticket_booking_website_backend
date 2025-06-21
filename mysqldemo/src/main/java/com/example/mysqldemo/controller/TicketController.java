package com.example.mysqldemo.controller;

import com.example.mysqldemo.model.Ticket;
import com.example.mysqldemo.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class TicketController {

    private final TicketService ticketService;

    @Autowired
    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    /**
     * Books a ticket.
     * @param ticket Ticket details.
     * @return Response with booking status.
     */
    @PostMapping("/book")
    public ResponseEntity<Map<String, String>> book(@RequestBody HashMap<String, String> requestBody) {
        String name = requestBody.get("name");
        String fromStation = requestBody.get("fromStation");
        String toStation = requestBody.get("toStation");
        String date = requestBody.get("date");

        String message = ticketService.bookTicket(name, fromStation, toStation, date);
        Map<String, String> response = new HashMap<>();
        response.put("message", message);
        return ResponseEntity.ok(response);
    }

    /**
     * Retrieves a ticket by name.
     * @param name Passenger's name.
     * @return Ticket details if found, otherwise a message indicating no ticket found.
     */
    @GetMapping("/view")
    public ResponseEntity<Object> view(@RequestParam String name) {
        Ticket ticket = ticketService.viewTicket(name);
        if (ticket != null) {
            return ResponseEntity.ok(ticket);
        } else {
            Map<String, String> response = new HashMap<>();
            response.put("message", "No ticket found.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }

    @GetMapping("/viewall")
    public ResponseEntity<?> viewAll() {
        List<Ticket> tickets = ticketService.viewallTickets();

        if (tickets.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Collections.singletonMap("message", "No ticket found."));
        }

        return ResponseEntity.ok(tickets);
    }



    /**
     * Cancels a ticket by passenger's name.
     * @param name Passenger's name.
     * @return Response with cancellation status.
     */
    @PostMapping("/cancel")
    public ResponseEntity<Map<String, String>> cancel(@RequestBody String name) {
        name = name.replace("=", "");
        String message = ticketService.cancelTicket(name);
        Map<String, String> response = new HashMap<>();
        response.put("message", message);
        return ResponseEntity.ok(response);
    }
}
