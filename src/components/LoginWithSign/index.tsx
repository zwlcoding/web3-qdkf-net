import {ConnectButton} from "@rainbow-me/rainbowkit";
import {useAccount, useSignMessage} from "wagmi"
import {useLocalStorage} from "react-use";
import { useTranslation } from 'react-i18next';
import randomStr from '../../utils/randomStr/index.ts'
const LoginWithSign = () => {
    const nonce = randomStr();
    const { t } = useTranslation();
    const [jwt_token, setItem] = useLocalStorage('__ww_jwt_token');
    const {address} = useAccount();
    const {signMessageAsync} = useSignMessage();
    const tryVerifySign = async () => {
        const message = `login with sign ${nonce}`
        const result = await signMessageAsync({
            message: message,
        })
        console.log(result)
        fetch('https://api.qdkf.net/wallet-login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                signature: result,
                message: message,
                address,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    alert(data.message)
                    return
                }
                setItem(data.data.token)
            })
            .catch((err) => {
                alert(err && err.message)
            })
    }
    return (
        <>
            <ConnectButton
                chainStatus={'icon'}
                accountStatus="avatar"
                showBalance={false}
            />
            {
                (!!address && !jwt_token) ? <div role="alert" className="alert shadow-lg fixed bottom-0 left-0 right-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-info h-6 w-6 shrink-0">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        <h4 className={"font-bold"}>{t('login_with_wallet')}</h4>
                        <div className={"text-xs"}>{t("login_with_wallet_tips")}</div>
                    </div>
                    <div>
                        <button className="btn btn-sm">{t("btn_deny")}</button>
                        <button className="btn btn-sm btn-primary" onClick={tryVerifySign}>{t("btn_sign_accept")}</button>
                    </div>
                </div> : null
            }
        </>

    )
}

export default LoginWithSign