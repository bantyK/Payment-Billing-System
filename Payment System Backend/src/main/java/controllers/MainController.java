package controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
    public MainController() {
    }

    @RequestMapping(value = "/")
    public String helloSpring() {
        return "Hello from spring boot";
    }


}
