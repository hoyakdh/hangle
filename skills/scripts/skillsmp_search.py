import sys
import json
import os
import urllib.request
import urllib.parse
import urllib.error

API_BASE_URL = "https://skillsmp.com/api/v1"

def get_api_key():
    api_key = os.environ.get("SKILLSMP_API_KEY")
    if not api_key:
        print(json.dumps({"success": False, "error": {"message": "Missing SKILLSMP_API_KEY environment variable. Please set it before running the script."}}, indent=2))
        sys.exit(1)
    return api_key

def make_request(endpoint, params=None):
    api_key = get_api_key()
    url = f"{API_BASE_URL}{endpoint}"
    if params:
        url += "?" + urllib.parse.urlencode(params)
    
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }

    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode('utf-8'))
            return {"success": True, "data": data}
    except urllib.error.HTTPError as e:
        try:
            error_data = json.loads(e.read().decode('utf-8'))
            return {"success": False, "error": error_data, "status_code": e.code}
        except:
             return {"success": False, "error": {"message": str(e)}, "status_code": e.code}
    except Exception as e:
        return {"success": False, "error": {"message": str(e)}}

def keyword_search(query, page=1, limit=20, sort_by="stars"):
    params = {
        "q": query,
        "page": page,
        "limit": limit,
        "sortBy": sort_by
    }
    return make_request("/skills/search", params)

def ai_search(query):
    params = {
        "q": query
    }
    return make_request("/skills/ai-search", params)

def main():
    if len(sys.argv) < 3:
        print(json.dumps({"success": False, "error": {"message": "Usage: python skillsmp_search.py <command> <query> [args...]"}}, indent=2))
        sys.exit(1)

    command = sys.argv[1]
    query = sys.argv[2]

    if command == "keyword":
        page = int(sys.argv[3]) if len(sys.argv) > 3 else 1
        limit = int(sys.argv[4]) if len(sys.argv) > 4 else 20
        sort_by = sys.argv[5] if len(sys.argv) > 5 else "stars"
        result = keyword_search(query, page, limit, sort_by)
    elif command == "ai":
        result = ai_search(query)
    else:
        result = {"success": False, "error": {"message": f"Unknown command: {command}. Use 'keyword' or 'ai'."}}

    print(json.dumps(result, indent=2))

if __name__ == "__main__":
    main()
