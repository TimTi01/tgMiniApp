import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface NextRouteButtonProps {
    navigateLink: string
}

export const NextRouteButton: FC<NextRouteButtonProps> = ({ navigateLink }) => {
    const navigate = useNavigate()

    return (
        <button onClick={() => navigate(navigateLink)}>
            Next Link
        </button>
    )
}

export const BackRouteButton: FC = () => {
    const navigate = useNavigate()

    return (
        <button onClick={() => navigate(-1)}>
            Back Link
        </button>
    )
}
