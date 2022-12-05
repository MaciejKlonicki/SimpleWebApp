package org.maciejklonicki.simplewebapp;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class SayHelloController {

    @GetMapping("/")
    public String sayHello() {
        return "Hello";
    }

    @GetMapping("/html")
    public String sayHelloHtml() {
        StringBuffer sb = new StringBuffer();
        sb.append("<html>");
        sb.append("<head>");
        sb.append("<title> My First HTML Page - Changed</title>");
        sb.append("</head>");
        sb.append("<body>");
        sb.append("My first html page with body - Changed");
        sb.append("</body>");
        sb.append("</html>");

        return sb.toString();
    }

    @GetMapping("/sayhellojsp")
    public String sayHelloJsp() {
        return "sayHello";
    }
}
