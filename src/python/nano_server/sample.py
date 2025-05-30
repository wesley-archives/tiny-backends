from main import NanoServer
import json
import re

server = NanoServer(port=8080)

items = [
    {"id": 1, "name": "Item 1"},
    {"id": 2, "name": "Item 2"},
]

def send_json(handler, data, status=200):
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json")
    handler.end_headers()
    handler.wfile.write(json.dumps(data).encode("utf-8"))

def parse_id_from_path(path):
    match = re.match(r"^/items/(\d+)$", path)
    return int(match.group(1)) if match else None

@server.route("/", method="GET")
def hello_handler(handler):
    send_json(handler, {"message": "Hello from NanoServer!"})

@server.route("/items", method="GET")
def get_items_handler(handler):
    send_json(handler, items)

@server.route("/items", method="POST")
def add_item_handler(handler):
    try:
        length = int(handler.headers.get("Content-Length", 0))
        body = handler.rfile.read(length)
        data = json.loads(body)
        if "name" not in data:
            raise ValueError("Missing 'name' field")

        new_item = {
            "id": max([item["id"] for item in items], default=0) + 1,
            "name": data["name"]
        }
        items.append(new_item)
        send_json(handler, new_item, status=201)
    except Exception as e:
        send_json(handler, {"error": str(e)}, status=400)

@server.route("/items", method="GET")
def get_items_handler(handler):
    send_json(handler, items)

@server.route("/items/", method="GET")
def get_item_by_id_handler(handler):
    item_id = parse_id_from_path(handler.path)
    if item_id is None:
        return send_json(handler, {"error": "Invalid ID"}, status=400)

    for item in items:
        if item["id"] == item_id:
            return send_json(handler, item)
    send_json(handler, {"error": "Item not found"}, status=404)

@server.route("/items/", method="PUT")
def update_item_handler(handler):
    item_id = parse_id_from_path(handler.path)
    if item_id is None:
        return send_json(handler, {"error": "Invalid ID"}, status=400)

    try:
        length = int(handler.headers.get("Content-Length", 0))
        body = handler.rfile.read(length)
        data = json.loads(body)

        for item in items:
            if item["id"] == item_id:
                item["name"] = data.get("name", item["name"])
                return send_json(handler, item)

        send_json(handler, {"error": "Item not found"}, status=404)
    except Exception as e:
        send_json(handler, {"error": str(e)}, status=400)

@server.route("/items/", method="DELETE")
def delete_item_handler(handler):
    item_id = parse_id_from_path(handler.path)
    if item_id is None:
        return send_json(handler, {"error": "Invalid ID"}, status=400)

    for i, item in enumerate(items):
        if item["id"] == item_id:
            deleted = items.pop(i)
            return send_json(handler, {"deleted": deleted})

    send_json(handler, {"error": "Item not found"}, status=404)

if __name__ == "__main__":
    print("Starting the sample API with CRUD...")
    server.run()
