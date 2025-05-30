from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class NanoServer:
    def __init__(self, port=8080):
        self.port = port
        self.routes = {}

    def route(self, path, method='GET'):
        def wrapper(func):
            self.routes[(path, method.upper())] = func
            return func
        return wrapper

    def handle_request(self, handler):
        route_key = (handler.path, handler.command)
        handler.send_response = self._wrap_send_response(handler.send_response)
        handler.send_json = lambda data, status=200: self._send_json(handler, data, status)

        if route_key in self.routes:
            try:
                self.routes[route_key](handler)
            except Exception as e:
                handler.send_json({"error": str(e)}, status=500)
        else:
            handler.send_json({"error": "Not Found"}, status=404)

    def _send_json(self, handler, data, status=200):
        handler.send_response(status)
        handler.send_header("Content-Type", "application/json")
        handler.end_headers()
        handler.wfile.write(json.dumps(data).encode('utf-8'))

    def _wrap_send_response(self, original_send_response):
        def wrapper(code):
            original_send_response(code)
        return wrapper

    def run(self):
        server = self

        class CustomHandler(BaseHTTPRequestHandler):
            def do_GET(self): server.handle_request(self)
            def do_POST(self): server.handle_request(self)

        httpd = HTTPServer(('', self.port), CustomHandler)
        print(f"NanoServer running on port {self.port}")
        httpd.serve_forever()
