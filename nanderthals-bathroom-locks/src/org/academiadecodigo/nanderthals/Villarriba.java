package org.academiadecodigo.nanderthals;

public class Villarriba {

    public static void main(String[] args) {

    Toilet toilet = new Toilet();
    Bathroom bathroom = new Bathroom(toilet);

    Thread rita = new Thread(new Cadet("Rita", bathroom));
    Thread moreira = new Thread(new Cadet("Moreira", bathroom));
    Thread david = new Thread(new Cadet("David", bathroom));
    Thread mj = new Thread(new Cadet("MJ", bathroom));
    Thread zenuno = new Thread(new Cadet("Zé Nuno", bathroom));
    Thread andre = new Thread(new Cadet("Andre", bathroom));

    rita.start();
    moreira.start();
    david.start();
    mj.start();
    zenuno.start();
    andre.start();

    }
}
