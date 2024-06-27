import { createLazyFileRoute } from '@tanstack/react-router';

const AboutLazy = () => {
    return (
        <div>
            <h1>About</h1>
        </div>
    )
}

export const Route = createLazyFileRoute('/about')({
    component: AboutLazy
})