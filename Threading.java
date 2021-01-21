
public class Threading {
	public static void main(String[] args) {
		PublicResource pr=new PublicResource(1200);
		ThreadFunc t=new ThreadFunc(pr);
		Thread t1=new Thread(new ThreadFunc2(pr));
		t.start();
		t1.start();
	}
}
