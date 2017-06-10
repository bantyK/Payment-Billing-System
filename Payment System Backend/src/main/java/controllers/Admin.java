package controllers;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "AdminTable")
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  int id;
    private String username;
    private String password;
    private Date dateOfJoining;
    private int salary;


    public Admin(int id, String username, String password, Date dateOfJoining, int salary) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.dateOfJoining = dateOfJoining;
        this.salary = salary;
    }

    public Admin(String username, String password) {
    }

    public int getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public Date getDateOfJoining() {
        return dateOfJoining;
    }

    public int getSalary() {
        return salary;
    }
}
