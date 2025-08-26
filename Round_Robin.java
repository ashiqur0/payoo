// Java program for implementation of RR scheduling

public class Round_Robin {    
    static void waitingTime(int processes[], int bt[], int wt[], int quantum) {
        int rem_bt[] = new int[n]; // Make a copy of burst times bt[] to store remaining burst times.
        for (int i = 0; i < n; i++) {
            rem_bt[i] = bt[i];
        }

        int t = 0; // Current time
        while (true) { // Keep traversing processes in round robin manner until all of them are not done.
            boolean done = true;
            for (int i = 0; i < n; i++) {// Traverse all processes one by one repeatedly
                if (rem_bt[i] > 0) { // If burst time of a process is greater than 0 then only need to process further
                    done = false; // There is a pending process
                    if (rem_bt[i] > quantum) {
                        t += quantum;// Increase the value of t i.e.shows how much time a process has been processed
                        rem_bt[i] -= quantum; // Decrease the burst_time of current process by quantum
                    } else { // If burst time is smaller than or equal to quantum. Last cycle for this process
                        t = t + rem_bt[i]; // Increase the value of t i.e. shows how much time a process has been processed
                        wt[i] = t - bt[i]; // Waiting time is current time minus time used by this process
                        rem_bt[i] = 0;// As the process gets fully executed make its remaining burst time = 0
                    }
                }
            }

            if (done == true) { // If all processes are done
                break;
            }
        }
    }
    
    static void turnAroundTime(int processes[], int bt[], int wt[], int tat[]) {
        for (int i = 0; i < n; i++) {
            tat[i] = bt[i] + wt[i];
        }
    }

    static void avgTime(int processes[], int bt[], int quantum) {
        int wt[] = new int[n], tat[] = new int[n];        
        waitingTime(processes, bt, wt, quantum);
        turnAroundTime(processes, bt, wt, tat);
        
        System.out.println("P\tBT\tWT\tTAT"); // Processes Burst time Waiting time Turn Around Time
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
        int processes[] = { 1, 2, 3 };
        int burst_time[] = { 10, 5, 8 };
        n = 3;

        int quantum = 2; // Time quantum
        avgTime(processes, burst_time, quantum);
    }
}