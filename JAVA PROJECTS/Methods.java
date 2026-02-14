import java.util.Scanner;

public class Switch {
    static Scanner input = new Scanner(System.in);

    static void print(){
        for (int i = 1; i <= 5; i++){
            for (int j = 1; j <= 5; j++){
                if (i == 1 || i ==5){
                    System.out.print("* ");
                }
            }
            System.out.println();
        }
    }


    public static void main(String[] args) {
        print();
    }
}