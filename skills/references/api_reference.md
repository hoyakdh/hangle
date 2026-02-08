# SkillsMP API Reference

## Introduction

This document provides detailed information about the SkillsMP API endpoints used by the `skillsmp-search` skill.

## Base URL

`https://skillsmp.com/api/v1`

## Authentication

All API requests require an API key to be included in the `Authorization` header as a Bearer token.

| Header | Value |
| :--- | :--- |
| `Authorization` | `Bearer YOUR_API_KEY` |

## Endpoints

### 1. Keyword Search

Search for skills using keywords.

**Endpoint:** `GET /skills/search`

| Parameter | Type | Required | Description | Default |
| :--- | :--- | :--- | :--- | :--- |
| `q` | string | Yes | The search query. | - |
| `page` | integer | No | The page number for results. | 1 |
| `limit` | integer | No | The number of items per page (max 100). | 20 |
| `sortBy` | string | No | Sort order: `stars` or `recent`. | `stars` |

**Example Request:**
```
GET /skills/search?q=web&page=1&limit=10&sortBy=stars
```

**Example Response:**
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "skill_123",
        "name": "Web Scraper",
        "description": "Extract data from websites easily.",
        "stars": 150,
        "author": "devuser"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 50
    }
  }
}
```

### 2. AI Semantic Search

Search for skills using natural language queries powered by Cloudflare AI.

**Endpoint:** `GET /skills/ai-search`

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `q` | string | Yes | The natural language query or description. |

**Example Request:**
```
GET /skills/ai-search?q=Make a chatbot for customer support
```

**Example Response:**
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "skill_456",
        "name": "Chatbot Builder",
        "description": "Create conversational AI agents.",
        "relevance": 0.95
      }
    ]
  }
}
```

## Error Codes

| Status Code | Error Code | Description |
| :--- | :--- | :--- |
| 400 | `MISSING_QUERY` | The `q` parameter is missing. |
| 401 | `MISSING_API_KEY` | The API key is missing. |
| 401 | `INVALID_API_KEY` | The provided API key is invalid. |
| 500 | `INTERNAL_ERROR` | An unexpected error occurred. |
