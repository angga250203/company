interface NewsArticle {
    title: string;
    category: string;
    image: UnsplashImage;
}

interface UnsplashImage {
    url: string;
    credit: string;
}

export const newsData:NewsArticle [] = [
    {
        "title": "AI Revolution: How Artificial Intelligence is Transforming Industries",
        "category": "Artificial Intelligence",
        "image": {
            "url": "https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
            "credit": "Franck V."
        }
    },
    {
        "title": "The Future of Quantum Computing: What to Expect",
        "category": "Quantum Computing",
        "image": {
            "url": "https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
            "credit": "Michael Dziedzic"
        }
    },
    {
        "title": "5G Technology: The Next Step in Connectivity",
        "category": "5G Technology",
        "image": {
            "url": "https://images.unsplash.com/photo-1721332153289-0c46dc38981b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
            "credit": "JJ Ying"
        }
    },
    {
        "title": "Exploring the Potential of Blockchain in Finance",
        "category": "Blockchain",
        "image": {
            "url": "https://images.unsplash.com/photo-1719937206168-f4c829152b91?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
            "credit": "Executium"
        }
    },
    {
        "title": "The Role of IoT in Smart Cities",
        "category": "Internet of Things",
        "image": {
            "url": "https://images.unsplash.com/photo-1723220217566-f79c2b6adb46?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
            "credit": "Lukas Blazek"
        }
    },
    {
        "title": "Augmented Reality in Retail: Enhancing the Shopping Experience",
        "category": "Augmented Reality",
        "image": {
            "url": "https://images.unsplash.com/photo-1721332150382-d4114ee27eff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D",
            "credit": "Patrick Tomasso"
        }
    },
    {
        "title": "Cybersecurity Trends: Protecting Data in the Digital Age",
        "category": "Cybersecurity",
        "image": {
            "url": "https://images.unsplash.com/photo-1722861625549-dccf89e7896a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D",
            "credit": "FLY:D"
        }
    },
    {
        "title": "The Impact of Automation on the Workforce",
        "category": "Automation",
        "image": {
            "url": "https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D",
            "credit": "Lenny Kuhne"
        }
    }
]
