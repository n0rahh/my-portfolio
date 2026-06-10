import os
import httpx
from dotenv import load_dotenv

load_dotenv()

BOT_TOKEN = os.getenv('TELEGRAM_BOT_TOKEN')
CHAT_ID = os.getenv('TELEGRAM_CHAT_ID')
TELEGRAM_API_URL = f'https://api.telegram.org/bot{BOT_TOKEN}/sendMessage'

def escape_markdown_v2(text: str) -> str:
    chars_to_escape = ['_', '[', ']', '(', ')', '~', '`', '>', '#', '+', '-', '=', '|', '{', '}', '.', '!']

    for char in chars_to_escape:
        text = text.replace(char, f'\\{char}')
        
    return text

async def send_telegram_notification(message: str) -> bool:
    if not BOT_TOKEN or not CHAT_ID:
        print("Error: Telegram bot token or chat ID not set.")
        return False

    safe_message = escape_markdown_v2(message) 
    
    payload = {
        "chat_id": CHAT_ID,
        "text": safe_message,
        "parse_mode": "MarkdownV2"
    }

    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            response = await client.post(TELEGRAM_API_URL, json=payload)
            response.raise_for_status() 
            return response.json().get("ok", False)
    except httpx.HTTPError as e:
        print(f"HTTP error (e.g. 400 Bad Request): {e}")
        return False
    except Exception as e:
        print(f"Unknown error while sending to Telegram: {e}")
        return False