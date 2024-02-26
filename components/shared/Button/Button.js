import './Button.css';

export const Button = (style, label) => {
    return `
        <button class="btn ${style}">${label}</button>
    `
}