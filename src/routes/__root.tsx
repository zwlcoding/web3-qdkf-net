import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import Layout from '../components/Layout'
import Menu from '../components/Menu'
// import Header from '../components/Header'
import Footer from '../components/Footer'

export const Route = createRootRoute({
    component: () => (
        <>
            <Layout
                menu={<Menu/>}
                footer={<Footer/>}
            >
                <div className={'p-3'}>
                    <Outlet/>
                </div>
            </Layout>
            {import.meta.env.DEV && (<TanStackRouterDevtools />)}
        </>
    )
})