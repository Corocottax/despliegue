import './Card.css';

export const Card = (cardData) => {

    const colors = ['--primary-color', '--secondary-color', '--tertiary-color'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    return `
        <a class="link" href="${cardData.path}">
            <div class="card-container">
                <img src="${cardData.imgUrl}" alt="${cardData.name}">
                <div class="card-title">
                    <p style="color: var(${randomColor})">${cardData.name}</p>
                </div>
            </div>
        </a>
    `
}