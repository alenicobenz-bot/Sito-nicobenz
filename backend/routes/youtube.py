from fastapi import APIRouter
import httpx
import xml.etree.ElementTree as ET
from typing import List, Dict
import re

router = APIRouter()

@router.get("/latest")
async def get_latest_youtube_videos() -> List[Dict]:
    """
    Fetches the latest 3 videos from Nicobenz YouTube channel via RSS
    Returns: List of {n, title, length, youtubeId}
    """
    try:
        channel_id = "UCxxx"  # We'll extract from @nicobenzbeautysocialcoach
        
        # YouTube RSS feed URL
        rss_url = "https://www.youtube.com/feeds/videos.xml?channel_id=UCVq8QVAHne0i9xw52eA7s8Q"
        
        async with httpx.AsyncClient(timeout=10.0) as client:
            response = await client.get(rss_url)
            
            if response.status_code != 200:
                return get_fallback_videos()
            
            # Parse RSS XML
            root = ET.fromstring(response.content)
            namespace = {'yt': 'http://www.youtube.com/xml/schemas/2015', 
                        'media': 'http://search.yahoo.com/mrss/',
                        'atom': 'http://www.w3.org/2005/Atom'}
            
            videos = []
            entries = root.findall('atom:entry', namespace)[:3]
            
            for i, entry in enumerate(entries, 1):
                video_id_elem = entry.find('yt:videoId', namespace)
                title_elem = entry.find('atom:title', namespace)
                
                if video_id_elem is not None and title_elem is not None:
                    video = {
                        "n": f"EP. {50 - i}",  # Approximate episode number
                        "title": title_elem.text[:80],  # Limit length
                        "length": "45 min",  # Default, can't get from RSS
                        "youtubeId": video_id_elem.text
                    }
                    videos.append(video)
            
            if len(videos) == 0:
                return get_fallback_videos()
            
            return videos[:3]
            
    except Exception as e:
        print(f"Error fetching YouTube videos: {e}")
        return get_fallback_videos()


def get_fallback_videos() -> List[Dict]:
    """Fallback hardcoded videos if RSS fetch fails"""
    return [
        {
            "n": "EP. 48",
            "title": "Ospite Maurizio Fiore — Dipendenti imprenditori, la nuova era del lavoro",
            "length": "51 min",
            "youtubeId": "puNZKqsRnFo"
        },
        {
            "n": "EP. 47",
            "title": "Ospite Davide Lamia — Strategie social vincenti per il beauty",
            "length": "57 min",
            "youtubeId": "2vI_sbO5Anw"
        },
        {
            "n": "EP. 46",
            "title": "Ospite Andrea Bozzano — Costruire autorevolezza nel settore beauty",
            "length": "46 min",
            "youtubeId": "NKgB3S-soVU"
        }
    ]
