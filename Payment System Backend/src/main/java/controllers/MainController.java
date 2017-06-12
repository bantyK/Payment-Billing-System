package controllers;

import db.AdminService;
import db.AdminServiceImpl;
import model.Admin;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class MainController {

    AdminService adminService = new AdminServiceImpl();

    public MainController() {
    }

    @RequestMapping(value = "/")
    public String helloSpring() {
        return "It worked";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/admin_login")
    public String loginAdmin(@RequestBody LoginInformation loginInformation) {
        System.out.println(loginInformation.getUsername() + " " + loginInformation.getPassword());
        return adminService.isValidAdmin(loginInformation);
    }

    @RequestMapping(method = RequestMethod.POST, value = "create_admin")
    public String createAdmin(@RequestBody Admin admin) {
        adminService.addAdmin(admin);
        return "True";
    }

    @RequestMapping(method = RequestMethod.GET, value = "admins")
    public List<Admin> getAllAdmins() {
        return adminService.getAllAdmin();
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/delete/{id}")
    public String deleteAdmin(@PathVariable("id") int id){
        return String.valueOf(id);
    }

}
