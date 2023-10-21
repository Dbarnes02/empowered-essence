import styles from '@/styles/Home.module.css'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <div class="bg-light">
            <p>Copyright &copy; {currentYear} Diana Barnes. All rights reserved.</p>
        </div>
    )
}