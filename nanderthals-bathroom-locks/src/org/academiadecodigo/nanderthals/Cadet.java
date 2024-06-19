package org.academiadecodigo.nanderthals;

public class Cadet implements Runnable {

    private String name;
    private Bathroom bathroom;

    public Cadet(String name, Bathroom bathroom) {
        this.name = name;
        this.bathroom = bathroom;
    }

    @Override
    public void run() {

        Thread.currentThread().setName(name);
        bathroom.enterBathroom();
    }
}
