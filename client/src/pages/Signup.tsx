import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [addProfile, { error, data }] = useMutation(ADD_USER);

    // Handle form input changes
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // Handle form submission
    const handleFormSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const { data } = await addProfile({
                variables: { input: { ...formState } },
            });
            Auth.login(data.addProfile.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card w-50 shadow-lg">
                <div className="card-header bg-primary text-light">
                    <h4 className="mb-0">Sign Up</h4>
                </div>
                <div className="card-body">
                    {data ? (
                        <p>
                            Success! You may now head{' '}
                            <Link to="/">back to the homepage.</Link>
                        </p>
                    ) : (
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Username
                                </label>
                                <input
                                    id="name"
                                    className="form-control"
                                    placeholder="Your username"
                                    name="name"
                                    type="text"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    className="form-control"
                                    placeholder="Your email"
                                    name="email"
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    className="form-control"
                                    placeholder="******"
                                    name="password"
                                    type="password"
                                    value={formState.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-block btn-primary w-100"
                                style={{ cursor: 'pointer' }}
                            >
                                Submit
                            </button>
                        </form>
                    )}

                    {error && (
                        <div className="my-3 p-3 bg-danger text-white rounded">
                            {error.message}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Signup;
