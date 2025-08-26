// Java program for implementation of FCFS scheduling Algorithm

import java.util.Scanner;

public class FCFS {

    static void waitingTime(int processes[], int bt[], int wt[]) {
        wt[0] = 0;
        for (int i = 1; i < n; i++) {
            wt[i] = bt[i - 1] + wt[i - 1];
        }
    }

    static void turnAroundTime(int processes[], int bt[], int wt[], int tat[]) {
        for (int i = 0; i < n; i++) {
            tat[i] = bt[i] + wt[i];
        }
    }

    static void avgTime(int processes[], int bt[]) {
        int wt[] = new int[n], tat[] = new int[n];        
        waitingTime(processes, bt, wt);
        turnAroundTime(processes, bt, wt, tat);
        
        // Processes Burst time Waiting time Turn Around Time
        System.out.println("P\tBT\tWT\tTAT");
        int total_wt = 0, total_tat = 0;
        for (int i = 0; i < n; i++) {
            total_wt = total_wt + wt[i];
            total_tat = total_tat + tat[i];
            System.out.println(i + 1 + "\t" + bt[i] + "\t" + wt[i] + "\t" + tat[i]);
        }

        float s = (float) total_wt / n;
        int t = total_tat / n;
        System.out.println("Average waiting time: " + s);
        System.out.println("Average turn around time: " + t);
    }

    static int n;

    public static void main(String[] args) {

        @SuppressWarnings("resource")
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the number of process: ");
        n = scanner.nextInt();
        int processes[] = new int[n];   // 1 2 3
        int burst_time[] = new int[n];  // 10 5 8

        System.out.println("Enter Each Process and Its Burst Time");
        for (int i = 0; i < n; i++) {
            processes[i] = scanner.nextInt();
            burst_time[i] = scanner.nextInt();
        }

        avgTime(processes, burst_time);
    }
}