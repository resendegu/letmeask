import { ButtonHTMLAttributes } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';



import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean;
};

export function Button({isOutlined = false, ...props}: ButtonProps) {
    return (
        <button 
            className={`button ${isOutlined ? 'outlined' : ''}`} 
            {...props} 
        />
    )
}

export function LogOutButton({...props}: ButtonHTMLAttributes<HTMLButtonElement>) {
    const { signOut } = useAuth();
    const history = useHistory();

    async function handleSignOut() {
        await signOut();

        history.push('/')
    }

    return (
        <button
            className="log-out-button" 
            {...props}
            onClick={handleSignOut}
        /> 
    );
}