package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class MainController {

    @Autowired()
    @Qualifier(value = "adminService")
    private AdminService adminService;

    public MainController() {
    }

    @RequestMapping(value = "/")
    public String helloSpring() {
        return "It worked";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/admin_login")
    public String loginAdmin(@RequestBody LoginInformation loginInformation) {
        System.out.println(loginInformation.getUsername() + " " + loginInformation.getPassword());
        String adminFound = "false";
        Iterable<Admin> admins = this.adminService.findAll();
        for (Admin admin : admins) {
            if (admin.getUsername().equals(loginInformation.getUsername()) &&
                    admin.getPassword().equals(loginInformation.getPassword())) {
                adminFound = "true";
                break;
            }
        }
        return adminFound;
    }

}
