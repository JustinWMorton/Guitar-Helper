import React from 'react';
import GithubLogo from '@shared/GithubLogo';
import './Footer.css';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <span>Justin Morton</span>
                <a href="https://github.com/JustinWMorton" target="_blank" rel="noopener noreferrer">
                    <GithubLogo className="github-logo" />
                </a>
            </div>
        </footer>
    );
}