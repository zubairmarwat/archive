
const archiveMedia = [
    
    {
        type: 'video',
        src: 'contents/africa.mp4',
        caption: 'Death over submission',
        aspect: 'portrait' 
    },
    {
        type: 'image',
        src: 'contents/goat.jpg',
        caption: 'Three goats in Bannu, Khyber Pakhtunkhwa',
        aspect: 'landscape' 
    },
    {
        type: 'video',
        src: 'contents/freedom.mp4',
        caption: 'You do not get freedom peacefully',
        aspect: 'landscape'
    },
    {
        type: 'video',
        src: 'contents/religion.mp4',
        caption: '"My religion teaches that"',
        aspect: 'portrait' 
    },

    {
        type: 'video',
        src: 'https://www.youtube.com/embed/qNfAFfu6VD0',
        caption: 'Democracy is Hypocrisy',
        aspect: 'landscape' 
    },

    {
        type: 'image',
        src: 'contents/pointing.jpg',
        caption: 'Mujahid pointing to the sky in prayer and dedicating the victory to Allah, 1989',
        aspect: 'potrait'
    },

      {
        type: 'video',
        src: 'contents/favscene.mp4',
        caption: 'My all time favourite movie scene in one of my favourite movie ever. A true hidden gem: The Assassination of Jesse James by the Coward Robert Ford (2007) by Andrew Dominik',
        aspect: 'landscape' 
    },
];


function displayMedia() {
    const grid = document.getElementById('media-grid-dynamic');
    if (!grid) return; 
    grid.innerHTML = archiveMedia.map(item => `
        <div class="media-item ${item.aspect}"> 
            <div class="media-content">
                ${item.type === 'video' && item.src.includes('youtube') 
                    ? `<iframe src="${item.src}" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`
                    : item.type === 'video'
                    ? `<video controls muted playsinline><source src="${item.src}" type="video/mp4"></video>`
                    : `<img src="${item.src}" alt="Archive Photo">`
                }
            </div>
            <p class="media-desc">${item.caption}</p>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', displayMedia);
