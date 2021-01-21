import java.util.Scanner;

public class ThreadFunc2 implements Runnable{
	private PublicResource pr;
	@Override
	public void run() {
		// TODO Auto-generated method stub
		System.out.println("Independent Running before in B");
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
		System.out.println("independent running after in b");

	}
	public ThreadFunc2(PublicResource pr) {
		super();
		this.pr = pr;
	}

}


