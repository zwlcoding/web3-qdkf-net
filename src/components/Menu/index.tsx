import { useTranslation } from 'react-i18next';
const Menu = () => {
    const { t } = useTranslation();
    return (
        <>
            <li><a href="/home">{t('menu_home')}</a></li>
            <li><a href="/about">{t('menu_about')}</a></li>
        </>
    )
}

export default Menu