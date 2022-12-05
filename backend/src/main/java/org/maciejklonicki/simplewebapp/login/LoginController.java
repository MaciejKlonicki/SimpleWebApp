package org.maciejklonicki.simplewebapp.login;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @GetMapping("/login")
    public String goToLoginPage() {
        return "Hello React!";
    }
}
