package api;

import java.io.IOException;

import org.testng.Assert;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class PeopleApi {

	static String  baseUrl = "https://swapi.dev/api/";
	
	public static String getAllPeople(String path) throws IOException {
		OkHttpClient client = new OkHttpClient().newBuilder()
				  .build();
				Request request = new Request.Builder()
				  .url(baseUrl+path)
				  .method("GET", null)
				  .build();
				Response response = client.newCall(request).execute();
				int responseCode = response.code();
				Assert.assertEquals(200, responseCode);
				return response.body().string();
	}
	
}
