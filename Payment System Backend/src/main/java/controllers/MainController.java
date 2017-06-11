package controllers;

import db.AdminService;
import db.AdminServiceImpl;
import model.Admin;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class MainController {


    public MainController() {
    }

    @RequestMapping(value = "/")
    public String helloSpring() {
        return "It worked";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/admin_login")
    public String loginAdmin(@RequestBody LoginInformation loginInformation) {
        System.out.println(loginInformation.getUsername() + " " + loginInformation.getPassword());
        AdminService adminService = new AdminServiceImpl();
        return adminService.isValidAdmin(loginInformation);
    }

}
