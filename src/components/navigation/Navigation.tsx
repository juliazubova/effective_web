import styles from './navigation.module.css'
import NavigationItem from '../../models/NavigationItem'

const Navigation = (args: {items: NavigationItem[]}) => {
    const getNavigationItems = () => {
        return args.items.map(
            (item, index) => 
            <a key={`header_${index}`} href={item.link} className={item.isSelected ? styles.isSelected : ''}> {item.text} </a>
        )
    }
    return <nav className={styles.nav}>
        <div className={styles.logo}>
            <div className={styles.logo_image}>{'T'}</div>
            <div className={styles.logo_name}>{'HealthCare'}</div>
        </div>
        <div className={styles.links}>
            {getNavigationItems()}
        </div>
    </nav>
}

export default Navigation;