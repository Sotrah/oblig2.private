package com.example.oblig1;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class KundeController {

    public final List<Kinobillett> alleBilletter = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreBillett (Kinobillett innBillett){
        alleBilletter.add(innBillett);
    }

    @GetMapping("/hentAlle")
    public List<Kinobillett> hentAlle(){
        return alleBilletter;
    }

    @GetMapping("/slettAlle")
    public void slettBilletter() {
            alleBilletter.clear();
        }
    }