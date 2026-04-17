from fastapi import APIRouter, HTTPException
import httpx
from bs4 import BeautifulSoup
from typing import List, Dict
import re

router = APIRouter()

@router.get("/latest")
async def get_latest_blog_posts() -> List[Dict]:
    """
    Scrapes the latest 3 blog posts from nicobenz.it
    Returns: List of {title, excerpt, date, category, href, image}
    """
    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            # Fetch the main blog page or search for recent posts
            response = await client.get("https://www.nicobenz.it/post")
            
            if response.status_code != 200:
                # Fallback: return hardcoded recent posts
                return get_fallback_posts()
            
            soup = BeautifulSoup(response.text, 'html.parser')
            posts = []
            
            # Find all blog post links (Wix blog structure)
            # This is a heuristic - may need adjustment
            post_links = soup.find_all('a', href=re.compile(r'/post/[^/]+$'))[:3]
            
            for link in post_links:
                href = link.get('href', '')
                if not href.startswith('http'):
                    href = f"https://www.nicobenz.it{href}"
                
                # Try to extract title
                title_elem = link.find(['h2', 'h3', 'h4']) or link
                title = title_elem.get_text(strip=True) if title_elem else "Articolo"
                
                # Basic post object
                post = {
                    "id": href.split('/')[-1],
                    "category": "Marketing",
                    "title": title[:100],  # Limit length
                    "excerpt": "Scopri di più leggendo l'articolo completo.",
                    "date": "Recente",
                    "read": "5 min",
                    "href": href,
                    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
                }
                posts.append(post)
            
            # If scraping failed, return fallback
            if len(posts) == 0:
                return get_fallback_posts()
            
            return posts[:3]
            
    except Exception as e:
        print(f"Error fetching blog posts: {e}")
        return get_fallback_posts()


def get_fallback_posts() -> List[Dict]:
    """Fallback hardcoded posts if scraping fails"""
    return [
        {
            "id": "j1",
            "category": "Marketing",
            "title": "Oggi vince la persona, non il brand",
            "excerpt": "Perché il personal branding è diventato l'unica vera leva di differenziazione nel settore beauty.",
            "date": "2024",
            "read": "6 min",
            "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
            "href": "https://www.nicobenz.it/post/oggi-vince-la-persona-non-il-brand"
        },
        {
            "id": "j2",
            "category": "Strategia",
            "title": "Parrucchieri che fanno i soldi con Facebook e Instagram VS Parrucchieri che non li fanno",
            "excerpt": "Le differenze concrete tra chi usa i social per crescere e chi li subisce senza risultati.",
            "date": "2023",
            "read": "7 min",
            "image": "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=80",
            "href": "https://www.nicobenz.it/post/2018/03/10/parrucchieri-che-fanno-i-soldi-con-facebook-e-instagram-vs-parrucchieri-che-non-li-fanno"
        },
        {
            "id": "j3",
            "category": "Mindset",
            "title": "Parrucchieri e tempo",
            "excerpt": "Come smettere di essere schiavi dell'agenda e iniziare a gestire il tempo con strategia.",
            "date": "2023",
            "read": "5 min",
            "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
            "href": "https://www.nicobenz.it/post/2018/06/08/parrucchieri-e-tempo"
        }
    ]
