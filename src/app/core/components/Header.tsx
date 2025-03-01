import './Header.css';
import { ThemeToggle } from '@components/ThemeToggle';
import Link from 'next/link';

export function Header() {

    return (
        <header className="header">
            <div className="nav-container @container">
                <h1 className="logo-wrapper">
                    <Link id="logo-link" className="logo-link text-link-color" href="/scales">
                    {/* <LogoIcon className="logo" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.321 249.321" className="logo">
                        <path d="M124.661,0C55.922,0,0.003,55.924,0.003,124.658c0,68.744,55.919,124.663,124.658,124.663 s124.658-55.919,124.658-124.663C249.319,55.919,193.394,0,124.661,0z M124.661,226.184c-55.99,0-101.542-45.547-101.542-101.531 c0-55.99,45.552-101.531,101.542-101.531s101.531,45.547,101.531,101.531S180.65,226.184,124.661,226.184z" fill="currentColor"/> 
                        <path d="M169.326,76.914c-1.615-1.322-3.742-1.838-5.782-1.425l-49.3,10.079 c-3.236,0.658-5.553,3.508-5.553,6.804v49.811c-2.654-0.761-5.564-1.191-8.681-1.191c-12.874,0-22.572,7.093-22.572,16.497 s9.698,16.497,22.572,16.497c7.468,0,13.799-2.442,17.856-6.282c2.725-0.941,4.71-3.454,4.71-6.5V98.039l35.414-7.239v37.927 c-2.654-0.761-5.564-1.197-8.681-1.197c-12.874,0-22.572,7.098-22.572,16.497c0,9.399,9.698,16.497,22.572,16.497 c12.863,0,22.567-7.098,22.567-16.497V82.293C171.877,80.204,170.942,78.23,169.326,76.914z" fill="currentColor"/>
                    </svg>
                    <span className="logo-text">Guitar Helper</span>
                    </Link>
                </h1>
        
                <nav className="nav-menu">
                    <Link href="/scales" className="text-link-color">Scales</Link>
                    <Link href="/chords" className="text-link-color">Chords</Link>
                </nav>
        
                <ThemeToggle />
            </div>
        </header>
    );
}