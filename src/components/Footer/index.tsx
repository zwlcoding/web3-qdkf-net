import { useTranslation } from 'react-i18next';
const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">{t('footer_about_us')}</a>
            </nav>
            <aside>
                <p>Copyright © 2024 web3.qdkf.net</p>
            </aside>
        </footer>

    )
}

export default Footer