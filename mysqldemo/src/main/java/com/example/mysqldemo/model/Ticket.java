package com.example.mysqldemo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Ticket {

    @Id
    private String name;
    private String fromStation;
    private String toStation;
    private String date;

    public Ticket() {}

    public Ticket(String name, String fromStation, String toStation, String date) {
        this.name = name;
        this.fromStation = fromStation;
        this.toStation = toStation;
        this.date = date;
    }

    // Getters & Setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getFromStation() { return fromStation; }
    public void setFromStation(String fromStation) { this.fromStation = fromStation; }

    public String getToStation() { return toStation; }
    public void setToStation(String toStation) { this.toStation = toStation; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    // toString method
    @Override
    public String toString() {
        return "Ticket{" +
                "name='" + name + '\'' +
                ", fromStation='" + fromStation + '\'' +
                ", toStation='" + toStation + '\'' +
                ", date='" + date + '\'' +
                '}';
    }
}
