import json
import os
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

def handler(event: dict, context) -> dict:
    """Отправка заявок поддержки в Discord через webhook"""
    
    method = event.get('httpMethod', 'GET')
    
    # CORS headers
    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400'
    }
    
    # Handle OPTIONS request
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': cors_headers,
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    # Parse request body
    try:
        body = json.loads(event.get('body', '{}'))
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Invalid JSON'})
        }
    
    # Validate required fields
    name = body.get('name', '').strip()
    email = body.get('email', '').strip()
    message = body.get('message', '').strip()
    subject = body.get('subject', 'Не указана')
    
    if not name or not email or not message:
        return {
            'statusCode': 400,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Missing required fields'})
        }
    
    # Get webhook URL from environment
    webhook_url = os.environ.get('DISCORD_WEBHOOK_URL')
    if not webhook_url:
        return {
            'statusCode': 500,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Webhook URL not configured'})
        }
    
    # Subject mapping
    subject_map = {
        'privilege': 'Вопрос по привилегиям',
        'payment': 'Проблема с оплатой',
        'unban': 'Разбан аккаунта',
        'bug': 'Баг на сервере',
        'complaint': 'Жалоба на игрока',
        'other': 'Другое'
    }
    subject_text = subject_map.get(subject, subject if subject else 'Не указана')
    
    # Create Discord embed
    discord_payload = {
        "embeds": [{
            "title": "🎫 Новая заявка в поддержку",
            "color": 7506394,  # Violet color
            "fields": [
                {
                    "name": "👤 Имя / Никнейм",
                    "value": name,
                    "inline": True
                },
                {
                    "name": "📧 Email",
                    "value": email,
                    "inline": True
                },
                {
                    "name": "📋 Тема",
                    "value": subject_text,
                    "inline": False
                },
                {
                    "name": "💬 Сообщение",
                    "value": message[:1024],  # Discord limit
                    "inline": False
                }
            ],
            "timestamp": None,
            "footer": {
                "text": "Xaoc World Support System"
            }
        }]
    }
    
    # Send to Discord
    try:
        req = Request(
            webhook_url,
            data=json.dumps(discord_payload).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        with urlopen(req, timeout=10) as response:
            if response.status not in [200, 204]:
                raise HTTPError(webhook_url, response.status, 'Discord webhook failed', {}, None)
    except (HTTPError, URLError) as e:
        return {
            'statusCode': 500,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': f'Failed to send to Discord: {str(e)}'})
        }
    
    return {
        'statusCode': 200,
        'headers': {**cors_headers, 'Content-Type': 'application/json'},
        'body': json.dumps({
            'success': True,
            'message': 'Заявка успешно отправлена'
        })
    }
