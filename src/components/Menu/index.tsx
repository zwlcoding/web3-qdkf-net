import { useTranslation } from 'react-i18next';
import {Link} from '@tanstack/react-router'
const Menu = () => {
    const { t } = useTranslation();
    return (
        <>
            <li><Link to="/">{t('menu_home')}</Link></li>
            <li><Link to="/about">{t('menu_about')}</Link></li>
        </>
    )
}

export default Menu