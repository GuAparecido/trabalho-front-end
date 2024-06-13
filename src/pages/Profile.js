import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Esse é o seu perfil</h1>
            <button onClick={() => navigate(-1)}> Voltar</button>
        </div >
    );
}

export default Profile;