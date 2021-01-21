import java.util.Scanner;

public class ThreadFunc extends Thread{
	private PublicResource pr;
	@Override
	public void run() {
		// TODO Auto-generated method stub
		System.out.println("Indepent running before in A");
		synchronized (pr) {
			System.out.println("Enter Amount to be used");
			Scanner kb=new Scanner(System.in);
			int a=kb.nextInt();
			if(a<=pr.getNet()){
				System.out.println("You got the resource");
				pr.setNet(pr.getNet()-a);

			}
			else{
				System.out.println("Resource Not available");
			}

		}
		System.out.println("Independent running After in A");


	}
	public ThreadFunc(PublicResource pr) {
		super();
		this.pr = pr;
	}

}
