import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Banner() {
    return (
        <div class="bg-light">
            <div className={`${styles.center}`}>
                <ul>
                    <li>
                        My Story
                    </li>
                    <li>
                        What is Aroma Free?
                    </li>
                    <li>
                        Dr. Benjamin
                    </li>
                    <li>
                        Privacy
                    </li>
                </ul>
            </div>
            <Image
                scr="images/ee-logo.webp"
                width={250}
                height={250}
                alt="Empowered Essence Logo"
            />
        </div>
    )
}