/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package ct.server;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.util.List;
import java.util.Map;

/**
 *
 * @author gas
 */
public class CtServer {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
        server.createContext("/test", new MsgHandler());
        server.setExecutor(null); // creates a default executor
        server.start();
    }
    
    static class MsgHandler implements HttpHandler {
        
        @Override
        public void handle(HttpExchange t) throws IOException {
            String response = "GET / HTTP/1.1\n"
                    + "Access-Control-Allow-Origin: http://127.0.0.1:8000/test";
            System.out.println(t.getRequestMethod());
            for (Map.Entry<String, List<String>> e : t.getRequestHeaders().entrySet()) {
                System.out.println(e.getKey()+" "+e.getValue());
            }
            t.sendResponseHeaders(200, response.length());
            
            OutputStream os = t.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }
    }
    
}
