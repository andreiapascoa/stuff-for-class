package org.academiadecodigo.nanderthals;

public class Bathroom {

    private Toilet toilet;

    public Bathroom(Toilet toilet) {
        this.toilet = toilet;
    }

    public void enterBathroom() {

        synchronized (toilet) {

            System.out.println(Thread.currentThread().getName() + " is entering the toilet...");
            toilet.useToilet();
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            System.out.println(Thread.currentThread().getName() + " is leaving the toilet...");
        }


        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        System.out.println(Thread.currentThread().getName() + " is washing their hands...");

    }

}
